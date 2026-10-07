import { CMS_URL } from './cmsCache';

const EMPTY_SELECT = 'Select at least one option';
const clean = (v) => (v && v !== EMPTY_SELECT ? v : null);

// Posts the contact form (as laid out in PurpleContact/RedContact) to the CMS,
// which stores the message and emails the team. Field names are mapped from the
// form's input names to the CMS contact_form_messages columns.
export async function submitContactMessage(formEl) {
    const data = Object.fromEntries(new FormData(formEl));
    const payload = {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.user_email,
        phone_number: data.user_phone,
        request_related: clean(data.user_request),
        enquiry_related: clean(data.user_enquiry),
        company_related: clean(data.user_complaint),
        message: data.message,
        preferred_date_time: clean(data.time),
    };

    let response;
    try {
        response = await fetch(`${CMS_URL}/api/contact/form`, {
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
    throw new Error(result.message || 'Failed to send message. Please try again.');
}
