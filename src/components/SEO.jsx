import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export const SITE_URL = 'https://coronation.com.gh';

const SEO = ({ title, description, keywords, canonicalUrl }) => {
    const { pathname } = useLocation();
    // Every page gets a canonical on the live domain; pages pass canonicalUrl
    // explicitly when a different (keyword) URL should receive the ranking signal.
    const canonical = canonicalUrl || `${SITE_URL}${pathname === '/' ? '' : pathname.replace(/\/$/, '')}`;
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={canonical} />
            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonical} />
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default SEO;
