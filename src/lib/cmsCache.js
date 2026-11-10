// Session-wide cache for CMS GET requests.
//
// Every CMS URL is fetched at most once per visit. Later calls for the same URL
// resolve from memory, so moving between pages never shows the loaders again.
// Callers keep using the normal Response API (`res.ok`, `res.json()`), which
// keeps the call sites identical to a plain `fetch`.
import { findLocalInsight, mergeLocalInsights } from './localInsights';

const cache = new Map();

export const CMS_URL = 'https://coronation-cms.interactivedigital.com.gh';

// Resolves a CMS image path. CMS uploads are relative paths on the CMS host;
// local insight images are bundled asset URLs and are returned as-is.
export function cmsImage(path) {
    if (!path) return path;
    return /^(https?:|data:|blob:|\/)/.test(path) ? path : `${CMS_URL}/${path}`;
}

export function fetchCms(url, init) {
    // Only idempotent GETs are cached; form posts go straight through.
    if (init && init.method && init.method.toUpperCase() !== 'GET') {
        return fetch(url, init);
    }

    // Local insight posts are served without touching the CMS.
    const detailMatch = url.match(/\/api\/blog\/([^/]+)\/details$/);
    const localPost = detailMatch && findLocalInsight(decodeURIComponent(detailMatch[1]));
    if (localPost) {
        return Promise.resolve(new Response(JSON.stringify([localPost]), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        }));
    }

    if (!cache.has(url)) {
        const entry = fetch(url, init)
            .then(async (response) => {
                const raw = await response.text();
                const body = response.ok ? mergeLocalInsights(url, raw) : raw;
                if (!response.ok) {
                    // Don't keep failures around - let the next visit retry.
                    cache.delete(url);
                }
                return { body, status: response.status, statusText: response.statusText, headers: response.headers };
            })
            .catch((error) => {
                cache.delete(url);
                throw error;
            });
        cache.set(url, entry);
    }

    return cache
        .get(url)
        .then(({ body, status, statusText, headers }) => new Response(body, { status, statusText, headers }));
}

// Every page-level endpoint. Warmed in the background shortly after the first
// page renders, so opening any other page is instant.
const PREFETCH_URLS = [
    `${CMS_URL}/api/home/fetch`,
    `${CMS_URL}/api/home/individual/fetch`,
    `${CMS_URL}/api/about/fetch`,
    `${CMS_URL}/api/bod/fetch`,
    `${CMS_URL}/api/aboutus/executive-members/fetch`,
    `${CMS_URL}/api/pns/fetch`,
    `${CMS_URL}/api/institute/pns/fetch`,
    `${CMS_URL}/api/motor/individual/fetch`,
    `${CMS_URL}/api/institute/motor/fetch`,
    `${CMS_URL}/api/travel/individual/fetch`,
    `${CMS_URL}/api/institute/marine/fetch`,
    `${CMS_URL}/api/institute/engineering/fetch`,
    `${CMS_URL}/api/careerspage/fetch`,
    `${CMS_URL}/api/contactpage/fetch`,
    `${CMS_URL}/api/published-blogs/cards`,
    `${CMS_URL}/api/published-blogs/cards/latest-two`,
    `${CMS_URL}/api/blog-categories`,
];

export function prefetchAllCms() {
    PREFETCH_URLS.forEach((url) => fetchCms(url).catch(() => {}));
}
