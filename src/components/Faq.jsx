/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

// FAQ accordion + FAQPage JSON-LD generated from the same items,
// so the visible content and the schema markup can never drift apart.
const Faq = ({ items, accent = '#B580D1' }) => {
    const [openIndex, setOpenIndex] = useState(null);

    // Head tags are managed by hand in this project (see Seo.jsx) — helmet
    // failed to update on client-side navigation, so the schema is too.
    useEffect(() => {
        if (!items?.length) return;
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: items.map(({ question, answer }) => ({
                '@type': 'Question',
                name: question,
                acceptedAnswer: { '@type': 'Answer', text: answer },
            })),
        };
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);
        return () => script.remove();
    }, [items]);

    if (!items?.length) return null;

    return (
        <section className="w-full lg:px-20 md:px-6 px-4 py-10">
            <div className="max-w-[800px] mx-auto">
                <h2 className="lg:text-[32px] text-[24px] font-semibold lg:leading-[40px] leading-8 text-[#141415] mb-6">
                    Frequently Asked Questions
                </h2>
                <div>
                    {items.map(({ question, answer }, i) => {
                        const open = openIndex === i;
                        return (
                            <div key={question} className="border-b border-gray-200">
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(open ? null : i)}
                                    aria-expanded={open}
                                    className="w-full flex items-center justify-between gap-4 text-left py-4"
                                >
                                    <span className="font-semibold lg:text-[16px] text-[14px] text-[#141415]">
                                        {question}
                                    </span>
                                    <span
                                        className="text-[22px] leading-none shrink-0 transition-transform duration-200"
                                        style={{ color: accent, transform: open ? 'rotate(45deg)' : 'none' }}
                                        aria-hidden="true"
                                    >
                                        +
                                    </span>
                                </button>
                                {open && (
                                    <p className="text-[#56575d] lg:text-[15px] text-[14px] leading-[24px] pb-4">
                                        {answer}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Faq;
