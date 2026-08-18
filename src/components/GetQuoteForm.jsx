/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { trackQuoteRequest } from '../utils/metaPixel';

const GetQuoteForm = ({ productType = 'General Insurance', accentColor = '#B580D1' }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        insuranceType: productType,
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const insuranceOptions = [
        'Motor Insurance',
        'Marine Insurance',
        'Travel Insurance',
        'Home Insurance',
        'Engineering Insurance',
        'Fire & Special Perils',
        'Liability Insurance',
        'Burglary & Theft Insurance',
        'Business Interruption Insurance',
        'Goods in Transit Insurance',
        'Money Insurance',
        'Personal Accident',
        'Other',
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Basic validation
        if (!formData.fullName || !formData.email || !formData.phone) {
            setError('Please fill in all required fields.');
            return;
        }

        setIsSubmitting(true);

        try {
            // Send via EmailJS (using existing project dependency)
            const emailjs = await import('@emailjs/browser');
            await emailjs.send(
                'service_coronation', // Replace with your EmailJS service ID
                'template_quote',     // Replace with your EmailJS template ID
                {
                    from_name: formData.fullName,
                    from_email: formData.email,
                    phone: formData.phone,
                    insurance_type: formData.insuranceType,
                    message: formData.message,
                },
                'YOUR_EMAILJS_PUBLIC_KEY' // Replace with your EmailJS public key
            );

            // Track conversion
            trackQuoteRequest(formData.insuranceType);
            setIsSubmitted(true);
        } catch (err) {
            console.error('Quote form submission error:', err);
            setError('Something went wrong. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div id="quote-form-success" className="w-full bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: accentColor + '20' }}>
                    <svg className="w-8 h-8" style={{ color: accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#141415] mb-2">Thank You!</h3>
                <p className="text-[#56575D]">
                    We've received your quote request. Our team will get back to you within 24 hours.
                </p>
                <button
                    onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                            fullName: '',
                            email: '',
                            phone: '',
                            insuranceType: productType,
                            message: '',
                        });
                    }}
                    className="mt-6 text-sm font-semibold underline"
                    style={{ color: accentColor }}
                >
                    Submit another request
                </button>
            </div>
        );
    }

    return (
        <div id="quote-form" className="w-full bg-white rounded-xl shadow-lg p-6 lg:p-8">
            <h3 className="text-xl lg:text-2xl font-bold text-[#141415] mb-1">
                Get a Free Quote
            </h3>
            <p className="text-[#56575D] text-sm mb-6">
                Fill in your details and we'll get back to you within 24 hours.
            </p>

            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="quote-fullName" className="block text-sm font-medium text-[#141415] mb-1">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="quote-fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full h-[44px] px-4 border border-[#E9EAEC] rounded-lg text-sm focus:outline-none focus:border-2"
                        style={{ focusBorderColor: accentColor }}
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="quote-email" className="block text-sm font-medium text-[#141415] mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="quote-email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full h-[44px] px-4 border border-[#E9EAEC] rounded-lg text-sm focus:outline-none focus:border-2"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="quote-phone" className="block text-sm font-medium text-[#141415] mb-1">
                            Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="quote-phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+233 XX XXX XXXX"
                            className="w-full h-[44px] px-4 border border-[#E9EAEC] rounded-lg text-sm focus:outline-none focus:border-2"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="quote-insuranceType" className="block text-sm font-medium text-[#141415] mb-1">
                        Insurance Type
                    </label>
                    <select
                        id="quote-insuranceType"
                        name="insuranceType"
                        value={formData.insuranceType}
                        onChange={handleChange}
                        className="w-full h-[44px] px-4 border border-[#E9EAEC] rounded-lg text-sm focus:outline-none focus:border-2 bg-white"
                    >
                        {insuranceOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="quote-message" className="block text-sm font-medium text-[#141415] mb-1">
                        Message (Optional)
                    </label>
                    <textarea
                        id="quote-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your insurance needs..."
                        rows="3"
                        className="w-full px-4 py-3 border border-[#E9EAEC] rounded-lg text-sm focus:outline-none focus:border-2 resize-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-[48px] rounded-lg text-white font-semibold text-base transition-all duration-300 hover:opacity-90 disabled:opacity-50"
                    style={{ backgroundColor: accentColor }}
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            Sending...
                        </span>
                    ) : (
                        'Get My Free Quote'
                    )}
                </button>
            </form>
        </div>
    );
};

export default GetQuoteForm;
