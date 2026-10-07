/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { trackQuoteRequest } from '../utils/metaPixel';
import { submitQuoteRequest } from '../lib/quoteApi';

// Short lead-capture section embedded at the bottom of each product page.
// Submits to the CMS quote endpoint, which stores the request and emails the team.
const QuoteForm = ({ product, accent = '#B580D1' }) => {
    const form = useRef();
    const [sending, setSending] = useState(false);

    const sendQuoteRequest = async (e) => {
        e.preventDefault();
        setSending(true);
        const data = Object.fromEntries(new FormData(form.current));
        try {
            await submitQuoteRequest({
                product,
                firstName: data.first_name,
                lastName: data.last_name,
                email: data.email,
                phone: data.phone,
                message: data.message,
            });
            trackQuoteRequest(product);
            toast.success('Thank you! Our team will contact you with your quote shortly.');
            e.target.reset();
        } catch (error) {
            toast.error(error.message);
        } finally {
            setSending(false);
        }
    };

    const inputClass =
        'w-full border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-opacity-50';

    return (
        <section id="quote" className="w-full lg:px-20 md:px-6 px-4 py-10 bg-[#F7F7F8]">
            <ToastContainer />
            <div className="max-w-[700px] mx-auto">
                <h2 className="lg:text-[32px] text-[24px] font-semibold lg:leading-[40px] leading-8 text-[#141415]">
                    Get a Free {product} Quote
                </h2>
                <p className="text-[#56575d] text-[14px] lg:text-[16px] mt-2 mb-6">
                    Fill in your details and our team will get back to you with a personalised quote.
                </p>
                <form ref={form} onSubmit={sendQuoteRequest} className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input type="text" name="first_name" placeholder="First name" required maxLength={100} className={inputClass} />
                        <input type="text" name="last_name" placeholder="Last name" required maxLength={100} className={inputClass} />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input type="email" name="email" placeholder="Email address" required className={inputClass} />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone number"
                            required
                            pattern="^[+0-9 ()-]{7,}$"
                            maxLength={30}
                            className={inputClass}
                        />
                    </div>
                    <textarea
                        name="message"
                        rows="3"
                        maxLength={2000}
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
