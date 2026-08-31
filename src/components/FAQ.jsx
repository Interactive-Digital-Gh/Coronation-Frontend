import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoIosArrowDown } from "react-icons/io";

const faqData = [
    {
        question: "What types of insurance does Coronation Insurance Ghana offer?",
        answer: "Coronation Insurance Ghana offers a wide range of insurance products for individuals and businesses. Our personal insurance covers motor, travel, and home. For businesses, we offer motor fleet, engineering, marine, and business protection insurance including fire, burglary, and business interruption coverage.",
    },
    {
        question: "How do I purchase an insurance policy?",
        answer: "You can purchase insurance easily through our online portal at ecoronation.com, by visiting any of our agency offices across Ghana, or by contacting us directly via phone or email on 0302 772 606 / 0308 249 068/ infoghana@coronationinsurance.com.ng Our team will guide you through selecting the right coverage for your needs.",
    },
    {
        question: "How do I file an insurance claim?",
        answer: "To file a claim, visit our Self Service portal on ecoronation.com or contact our claims team directly on 0302772606 / 0308249068 or claims@coronationinsurance.com.gh . You will need to provide your policy number, details of the incident, and any supporting documents such as a police report (for motor claims) or medical reports (for travel claims). Our team processes claims promptly to ensure fast settlement.",
    },
    {
        question: "What does motor insurance cover in Ghana?",
        answer: "Our motor insurance offers three tiers of protection: Comprehensive (covers accidental damage, fire, theft, and third-party liability), Third Party Fire & Theft (covers fire, theft, and third-party liability), and Third Party Only (covers liability to other road users). All policies comply with Ghana\u2019s mandatory motor insurance requirements.",
    },
    {
        question: "Can I get a quote before purchasing a policy?",
        answer: "Yes! You can request a free, no-obligation quote by visiting our contact page, calling our office, or using our online portal. Simply provide basic details about what you want to insure, and our team will prepare a personalised quote for you.",
    },
    {
        question: "How do I renew my insurance policy?",
        answer: "Policy renewal is quick and easy. You can renew through our Self Service portal online on ecoronation.com or visit any of our agency offices, or contact our customer service team. We recommend renewing before your policy expires to ensure continuous coverage.",
    },
    {
        question: "Is Coronation Insurance Ghana a licensed and regulated insurer?",
        answer: "Yes, Coronation Insurance Ghana is a fully licensed and regulated general insurance company operating under the supervision of the National Insurance Commission (NIC) of Ghana. We are affiliated with the Coronation Group in Nigeria, one of Africa\u2019s leading financial services providers with over 18 years of experience.",
    },
];

const FAQ = ({ theme = "purple" }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const accentColor = theme === "red" ? "#FF0226" : "#B580D1";

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // JSON-LD structured data for SEO rich results
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqData.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };

    return (
        <section className="w-full lg:px-20 md:px-6 px-4 lg:py-20 py-10 bg-[#F7F7F8]">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            <div className="max-w-[900px] mx-auto">
                <h2
                    className="lg:text-[40px] text-[28px] font-bold lg:leading-[48px] leading-[36px] text-[#141415] mb-2"
                >
                    Frequently Asked Questions
                </h2>
                <p className="lg:text-[18px] text-[14px] text-[#56575D] mb-10">
                    Find answers to common questions about our insurance products and services.
                </p>

                <div className="flex flex-col gap-3">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-md"
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between lg:px-8 px-5 lg:py-6 py-4 text-left cursor-pointer group"
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${index}`}
                                    id={`faq-question-${index}`}
                                >
                                    <span className="lg:text-[18px] text-[15px] font-semibold text-[#141415] pr-4 leading-[24px] group-hover:opacity-80 transition-opacity">
                                        {item.question}
                                    </span>
                                    <span
                                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                                        style={{
                                            backgroundColor: isOpen ? accentColor : "#F4F5F7",
                                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                        }}
                                    >
                                        <IoIosArrowDown
                                            className="text-[18px]"
                                            style={{ color: isOpen ? "#fff" : "#56575D" }}
                                        />
                                    </span>
                                </button>
                                <div
                                    id={`faq-answer-${index}`}
                                    role="region"
                                    aria-labelledby={`faq-question-${index}`}
                                    className="overflow-hidden transition-all duration-400 ease-in-out"
                                    style={{
                                        maxHeight: isOpen ? "500px" : "0px",
                                        opacity: isOpen ? 1 : 0,
                                    }}
                                >
                                    <div className="lg:px-8 px-5 pb-6">
                                        <div
                                            className="w-full h-[1px] mb-4"
                                            style={{ backgroundColor: accentColor, opacity: 0.2 }}
                                        />
                                        <p className="lg:text-[16px] text-[14px] leading-[24px] text-[#56575D]">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
