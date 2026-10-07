import { CMS_URL } from './cmsCache';

// Sends a quote request to the CMS, which stores it and emails the sales team.
// Resolves on success; rejects with an Error carrying a user-facing message.
export async function submitQuoteRequest({ product, firstName, lastName, email, phone, message }) {
    let response;
    try {
        response = await fetch(`${CMS_URL}/api/quote/request`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
                product,
                first_name: firstName,
                last_name: lastName,
                email,
                phone,
                message: message || null,
                page_url: typeof window !== 'undefined' ? window.location.href : null,
            }),
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

// "Ama Mensah" -> { firstName: "Ama", lastName: "Mensah" }; single word -> lastName "-"
export function splitFullName(fullName) {
    const parts = fullName.trim().split(/\s+/);
    const firstName = parts.shift() || '';
    const lastName = parts.join(' ') || '-';
    return { firstName, lastName };
}
