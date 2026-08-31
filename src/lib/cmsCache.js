// Session-wide cache for CMS GET requests.
// Each URL is fetched at most once per visit; every later page open resolves
// instantly from the cache, so navigation doesn't show loaders again.
const cache = new Map();

export function fetchCms(url) {
    if (!cache.has(url)) {
        const promise = fetch(url)
            .then((response) => {
                if (!response.ok) throw new Error(`CMS request failed: ${response.status} ${url}`);
                return response.json();
            })
            .catch((error) => {
                // Don't cache failures — allow a retry on the next visit
                cache.delete(url);
                throw error;
            });
        cache.set(url, promise);
    }
    return cache.get(url);
}

const CMS = 'https://coronation-cms.interactivedigital.com.gh';

// Every page-level endpoint. Warmed in the background shortly after the first
// page renders, so opening any other page is instant.
const PREFETCH_URLS = [
    `${CMS}/api/home/fetch`,
    `${CMS}/api/home/individual/fetch`,
    `${CMS}/api/about/fetch`,
    `${CMS}/api/bod/fetch`,
    `${CMS}/api/aboutus/executive-members/fetch`,
    `${CMS}/api/pns/fetch`,
    `${CMS}/api/institute/pns/fetch`,
    `${CMS}/api/motor/individual/fetch`,
    `${CMS}/api/institute/motor/fetch`,
    `${CMS}/api/travel/individual/fetch`,
    `${CMS}/api/institute/marine/fetch`,
    `${CMS}/api/institute/engineering/fetch`,
    `${CMS}/api/careerspage/fetch`,
    `${CMS}/api/contactpage/fetch`,
    `${CMS}/api/published-blogs/cards`,
    `${CMS}/api/published-blogs/cards/latest-two`,
    `${CMS}/api/blog-categories`,
];

export function prefetchAllCms() {
    PREFETCH_URLS.forEach((url) => fetchCms(url).catch(() => {}));
}
