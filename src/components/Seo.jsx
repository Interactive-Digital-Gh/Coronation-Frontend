import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://coronation.com.gh';
const DEFAULT_TITLE = 'Coronation Insurance Ghana | Motor, Travel, Home & Business Insurance';
const DEFAULT_DESCRIPTION =
    'Coronation Insurance Ghana offers trusted motor, travel, home, marine, engineering and business insurance with fast claims settlement. Get your free quote today.';

// Per-route metadata. canonical defaults to SITE_URL + pathname; set it explicitly
// where a page has a preferred (keyword) URL that should receive the ranking signal.
const ROUTE_META = {
    '/': {
        title: 'Insurance in Ghana for Individuals | Motor, Travel & Home | Coronation',
        description:
            'Protect what matters with Coronation Insurance Ghana — comprehensive motor, travel and home insurance for individuals, with fast claims settlement. Get a free quote today.',
    },
    '/individual/about': {
        title: 'About Us | Coronation Insurance Ghana',
        description:
            'Learn about Coronation Insurance Ghana — a leading insurance company backed by the Coronation Group, with over 16 years of underwriting and risk management expertise.',
    },
    '/individual/products': {
        title: 'Personal Insurance Products in Ghana | Motor, Travel & Home | Coronation',
        description:
            'Explore Coronation Ghana\'s personal insurance products: comprehensive motor insurance, travel insurance and home insurance. Compare cover and get a free quote.',
    },
    '/individual/products/motor': {
        title: 'Motor & Car Insurance in Ghana | Get a Quote Fast | Coronation',
        description:
            'Protect your vehicle with Coronation\'s comprehensive motor insurance in Ghana. We settle claims within 48 hours. Get your free car insurance quote today.',
        canonical: `${SITE_URL}/motor-insurance-ghana`,
    },
    '/individual/products/travel': {
        title: 'Travel Insurance in Ghana | Worldwide & Schengen Cover | Coronation',
        description:
            'Travel with confidence with Coronation\'s travel insurance in Ghana — medical emergencies, lost baggage and trip cancellation cover for individuals and students.',
    },
    '/individual/products/home': {
        title: 'Home Insurance in Ghana | Protect Your Property | Coronation',
        description:
            'Insure your home and household contents with Coronation Insurance Ghana. Flexible homeowner and householder cover with fast claims. Get a free quote today.',
    },
    '/individual/insights': {
        title: 'Insurance Insights & Articles | Coronation Insurance Ghana',
        description:
            'Read the latest insurance insights from Coronation Ghana\'s experts — practical guidance on motor, travel, home and business insurance.',
    },
    '/individual/careers': {
        title: 'Careers | Coronation Insurance Ghana',
        description:
            'Build your career with Coronation Insurance Ghana. Explore current vacancies and join a leading African financial services group.',
    },
    '/individual/contact': {
        title: 'Contact Us | Coronation Insurance Ghana',
        description:
            'Get in touch with Coronation Insurance Ghana — request a quote, make an enquiry or reach our Accra office by phone or email.',
    },
    '/individual/services': {
        title: 'Self Service | Buy Insurance & Make a Claim | Coronation Ghana',
        description:
            'Buy insurance online, renew your policy or make a claim with Coronation Insurance Ghana\'s self-service portal.',
    },
    '/individual/whistleblowing': {
        title: 'Whistle Blowing | Coronation Insurance Ghana',
        description: 'Report misconduct confidentially through Coronation Insurance Ghana\'s whistle blowing channel.',
    },
    '/corporate': {
        title: 'Corporate & Business Insurance in Ghana | Coronation',
        description:
            'Coronation Insurance Ghana protects businesses with corporate motor, marine, engineering and business insurance. Trusted underwriting, fast claims. Get a quote.',
    },
    '/corporate/about': {
        title: 'About Us | Corporate Insurance | Coronation Insurance Ghana',
        description:
            'Learn about Coronation Insurance Ghana — a leading corporate insurer backed by the Coronation Group, serving businesses across Ghana.',
    },
    '/corporate/products': {
        title: 'Corporate Insurance Products | Fleet, Marine & Engineering | Coronation',
        description:
            'Explore Coronation Ghana\'s corporate insurance products: commercial motor and fleet, marine cargo, and engineering insurance for businesses of every size.',
    },
    '/corporate/products/motor': {
        title: 'Commercial Motor & Fleet Insurance in Ghana | Coronation',
        description:
            'Cover your company vehicles with Coronation\'s commercial motor and fleet insurance in Ghana. Comprehensive cover with fast claims settlement. Get a quote.',
    },
    '/corporate/products/engineering': {
        title: 'Engineering Insurance in Ghana | Contractors & Plant Cover | Coronation',
        description:
            'Protect projects and equipment with Coronation\'s engineering insurance in Ghana — contractors all risks, plant, machinery breakdown and erection all risks cover.',
    },
    '/corporate/products/marine': {
        title: 'Marine & Goods in Transit Insurance in Ghana | Coronation',
        description:
            'Insure your cargo with Coronation\'s marine insurance in Ghana — hull, cargo and goods in transit cover trusted by importers and brokers. Get a free quote.',
        canonical: `${SITE_URL}/marine-insurance-ghana`,
    },
    '/corporate/insights': {
        title: 'Business Insurance Insights | Coronation Insurance Ghana',
        description:
            'Insights for businesses from Coronation Ghana\'s experts — risk management, marine, engineering and corporate insurance guidance.',
    },
    '/corporate/careers': {
        title: 'Careers | Coronation Insurance Ghana',
        description:
            'Build your career with Coronation Insurance Ghana. Explore current vacancies and join a leading African financial services group.',
    },
    '/corporate/contact': {
        title: 'Contact Us | Corporate Insurance | Coronation Insurance Ghana',
        description:
            'Speak to Coronation Insurance Ghana about corporate cover — request a quote, make an enquiry or reach our Accra office by phone or email.',
    },
    '/corporate/services': {
        title: 'Self Service | Buy Insurance & Make a Claim | Coronation Ghana',
        description:
            'Buy insurance online, renew your policy or make a claim with Coronation Insurance Ghana\'s self-service portal.',
    },
    '/corporate/whistleblowing': {
        title: 'Whistle Blowing | Coronation Insurance Ghana',
        description: 'Report misconduct confidentially through Coronation Insurance Ghana\'s whistle blowing channel.',
    },
    '/privacy': {
        title: 'Privacy Policy | Coronation Insurance Ghana',
        description: 'How Coronation Insurance Ghana collects, uses and protects your personal data.',
    },
    '/motor-insurance-ghana': {
        title: 'Motor & Car Insurance in Ghana | Get a Quote Fast | Coronation',
        description:
            'Protect your vehicle with Coronation\'s comprehensive motor insurance in Ghana. We settle claims within 48 hours. Get your free car insurance quote today.',
    },
    '/marine-insurance-ghana': {
        title: 'Marine Insurance in Ghana | Cargo & Goods in Transit | Coronation',
        description:
            'Insure your cargo with Coronation\'s marine insurance in Ghana — hull, cargo and goods in transit cover trusted by importers and marine insurance brokers. Get a free quote.',
    },
    '/business-protection-insurance': {
        title: 'Business Protection Insurance in Ghana | Corporate & SME Cover | Coronation',
        description:
            'Protect your business with Coronation\'s corporate insurance in Ghana — SME packages, commercial fleet, engineering and marine cover with fast claims. Get a free quote.',
    },
};

// Prefix fallbacks for dynamic routes (article detail pages set their own
// article-specific title once loaded; this covers the initial render).
const PREFIX_META = [
    { prefix: '/individual/insights/', meta: ROUTE_META['/individual/insights'] },
    { prefix: '/corporate/insights/', meta: ROUTE_META['/corporate/insights'] },
];

function upsertMeta(attr, key, content) {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

function upsertCanonical(href) {
    let el = document.head.querySelector('link[rel="canonical"]');
    if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'canonical');
        document.head.appendChild(el);
    }
    el.setAttribute('href', href);
}

// Sets document title / description / canonical / Open Graph tags directly on
// every route change (react-helmet-async failed to update tags on client-side
// navigation, so the tags are managed by hand).
const RouteSeo = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const meta =
            ROUTE_META[pathname] ||
            PREFIX_META.find((p) => pathname.startsWith(p.prefix))?.meta ||
            {};

        const title = meta.title || DEFAULT_TITLE;
        const description = meta.description || DEFAULT_DESCRIPTION;
        const canonical = meta.canonical || `${SITE_URL}${pathname === '/' ? '' : pathname}`;

        document.title = title;
        upsertMeta('name', 'description', description);
        upsertCanonical(canonical);
        upsertMeta('property', 'og:title', title);
        upsertMeta('property', 'og:description', description);
        upsertMeta('property', 'og:url', canonical);
        upsertMeta('property', 'og:type', 'website');
        upsertMeta('property', 'og:site_name', 'Coronation Insurance Ghana');
    }, [pathname]);

    return null;
};

export default RouteSeo;
