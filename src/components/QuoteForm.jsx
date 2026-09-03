/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { trackQuoteRequest } from '../utils/metaPixel';

// Short lead-capture form embedded on product pages.
// Submits to the CMS quote endpoint, which emails the request over SMTP —
// staging submissions are routed to the test inbox server-side.
const QuoteForm = ({ product, accent = '#B580D1' }) => {
    const form = useRef();
    const [sending, setSending] = useState(false);

    const sendQuoteRequest = async (e) => {
        e.preventDefault();
        setSending(true);
        const formData = new FormData(form.current);
        try {
            const response = await fetch(
                'https://coronation-cms.interactivedigital.com.gh/api/quote/request',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify(Object.fromEntries(formData)),
                }
            );
            const result = await response.json().catch(() => ({}));
            if (response.ok && result.status === 'Success') {
                trackQuoteRequest(product);
                toast.success('Thank you! Our team will contact you with your quote shortly.');
                e.target.reset();
            } else {
                toast.error(result.message || 'Failed to send your request. Please try again.');
            }
        } catch {
            toast.error('Failed to send your request. Please try again.');
        } finally {
            setSending(false);
        }
    };

    const inputClass =
        'w-full border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-opacity-50';

    return (
        <section className="w-full lg:px-20 md:px-6 px-4 py-10 bg-[#F7F7F8]">
            <ToastContainer />
            <div className="max-w-[700px] mx-auto">
                <h2 className="lg:text-[32px] text-[24px] font-semibold lg:leading-[40px] leading-8 text-[#141415]">
                    Get a Free {product} Quote
                </h2>
                <p className="text-[#56575d] text-[14px] lg:text-[16px] mt-2 mb-6">
                    Fill in your details and our team will get back to you with a personalised quote.
                </p>
                <form ref={form} onSubmit={sendQuoteRequest} className="flex flex-col gap-4">
                    <input type="hidden" name="product" value={product} />
                    <div className="flex flex-col md:flex-row gap-4">
                        <input type="text" name="first_name" placeholder="First name" required className={inputClass} />
                        <input type="text" name="last_name" placeholder="Last name" required className={inputClass} />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input type="email" name="email" placeholder="Email address" required className={inputClass} />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone number"
                            required
                            pattern="^[+0-9 ()-]{7,}$"
                            className={inputClass}
                        />
                    </div>
                    <textarea
                        name="message"
                        rows="3"
                        placeholder="Tell us what you need covered (optional)"
                        className={inputClass}
                    />
                    <button
                        type="submit"
                        disabled={sending}
                        style={{ backgroundColor: accent }}
                        className="w-full md:w-[200px] h-[48px] rounded-lg text-white font-semibold disabled:opacity-60"
                    >
                        {sending ? 'Sending...' : 'Get a Quote'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default QuoteForm;
