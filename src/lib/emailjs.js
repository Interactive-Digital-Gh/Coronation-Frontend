// EmailJS stays in place as the outgoing-email channel until the in-house SMTP
// credentials are configured on the CMS. Every form submits to the CMS first
// (stored, visible in the CMS inbox pages) and also sends through EmailJS.
//
// Service / template IDs are the ones the live site already used.
export const EMAILJS_PUBLIC_KEY = 'od2vIhbdFel9_otjO';
export const EMAILJS_SERVICE = 'service_vpuym4k';
export const EMAILJS_CONTACT_TEMPLATE = 'template_0vf2k2b';
// Quote requests reuse the contact template (same service) until a dedicated
// quote template exists; swap this ID when one is created.
export const EMAILJS_QUOTE_TEMPLATE = 'template_0vf2k2b';

// Feedback modal has its own service/template.
export const EMAILJS_FEEDBACK_PUBLIC_KEY = '6aG8jxTKE39zz493J';
export const EMAILJS_FEEDBACK_SERVICE = 'service_8o5f2xd';
export const EMAILJS_FEEDBACK_TEMPLATE = 'template_e0khrmr';

// Lazy-loads the EmailJS SDK so it is not in the initial bundle.
export async function sendEmailJs(serviceId, templateId, params, publicKey = EMAILJS_PUBLIC_KEY) {
    const emailjs = await import('@emailjs/browser');
    return emailjs.send(serviceId, templateId, params, { publicKey });
}

// Runs the CMS save and the EmailJS send side by side. Resolves when at least
// one succeeded (the submission is not lost); rejects only when both failed.
export async function submitToCmsAndEmail({ cms, email, label }) {
    const [cmsResult, emailResult] = await Promise.allSettled([cms(), email()]);

    if (cmsResult.status === 'rejected') {
        console.error(`${label}: CMS save failed`, cmsResult.reason);
    }
    if (emailResult.status === 'rejected') {
        console.error(`${label}: EmailJS send failed`, emailResult.reason);
    }

    if (cmsResult.status === 'rejected' && emailResult.status === 'rejected') {
        throw cmsResult.reason instanceof Error ? cmsResult.reason : new Error('Failed to send your request. Please try again.');
    }
}
