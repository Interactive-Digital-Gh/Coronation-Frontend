/**
 * Meta Pixel tracking utility functions.
 * Replace YOUR_PIXEL_ID_HERE in index.html with your actual Meta Pixel ID.
 */

/**
 * Track a quote request submission
 * @param {string} productType - e.g., "Motor Insurance", "Marine Insurance"
 */
export const trackQuoteRequest = (productType) => {
    if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', {
            content_name: productType,
            content_category: 'Insurance Quote Request',
        });
    }
};

/**
 * Track a "Buy Insurance" button click
 * @param {string} productType - e.g., "Motor", "Marine"
 */
export const trackBuyInsurance = (productType) => {
    if (typeof window.fbq === 'function') {
        window.fbq('track', 'InitiateCheckout', {
            content_name: productType,
            content_category: 'Insurance Purchase',
        });
    }
};

/**
 * Track a product page view
 * @param {string} productName - e.g., "Motor Insurance Ghana"
 */
export const trackProductView = (productName) => {
    if (typeof window.fbq === 'function') {
        window.fbq('track', 'ViewContent', {
            content_name: productName,
            content_category: 'Insurance Product',
        });
    }
};
