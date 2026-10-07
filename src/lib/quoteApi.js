import { CMS_URL } from './cmsCache';
import { EMAILJS_SERVICE, EMAILJS_QUOTE_TEMPLATE, sendEmailJs, submitToCmsAndEmail } from './emailjs';

async function postQuoteToCms(payload) {
    let response;
    try {
        response = await fetch(`${CMS_URL}/api/quote/request`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(payload),
        });
    } catch {
        throw new Error('We could not reach our servers. Please check your connection and try again.');
    }

    const result = await response.json().catch(() => ({}));
    if (response.ok && result.status === 'Success') {
        return result;
    }
    throw new Error(result.message || 'Failed to send your request. Please try again.');
}

// Stores the quote request in the CMS and emails it through EmailJS.
// Resolves when at least one channel succeeded; rejects with a user-facing Error when both fail.
export async function submitQuoteRequest({ product, firstName, lastName, email, phone, message }) {
    const pageUrl = typeof window !== 'undefined' ? window.location.href : null;

    const cmsPayload = {
        product,
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        message: message || null,
        page_url: pageUrl,
    };

    // Field names follow the contact template until a dedicated quote template exists.
    const emailParams = {
        first_name: firstName,
        last_name: lastName,
        user_email: email,
        user_phone: phone,
        user_request: 'Request for Quote',
        user_enquiry: product,
        user_complaint: '',
        message: `${product} quote request${pageUrl ? ` (from ${pageUrl})` : ''}${message ? `\n\n${message}` : ''}`,
        time: '',
    };

    await submitToCmsAndEmail({
        label: 'Quote request',
        cms: () => postQuoteToCms(cmsPayload),
        email: () => sendEmailJs(EMAILJS_SERVICE, EMAILJS_QUOTE_TEMPLATE, emailParams),
    });
}

// "Ama Mensah" -> { firstName: "Ama", lastName: "Mensah" }; single word -> lastName "-"
export function splitFullName(fullName) {
    const parts = fullName.trim().split(/\s+/);
    const firstName = parts.shift() || '';
    const lastName = parts.join(' ') || '-';
    return { firstName, lastName };
}
