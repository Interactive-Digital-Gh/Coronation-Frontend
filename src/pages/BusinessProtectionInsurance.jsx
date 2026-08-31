/* eslint-disable react/no-unescaped-entities */
import "./global.css"
import product5 from "../assets/purpleproduct/product5.png"
import productmob from "../assets/purpleproduct/productmob.png"
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import SEO from "../components/SEO"
import GetQuoteForm from "../components/GetQuoteForm"
import { trackProductView, trackBuyInsurance } from "../utils/metaPixel"


const BusinessProtectionInsurance = () => {
    // Corporate visitors reach this page via /corporate/business-protection-insurance and get the red theme
    const { pathname } = useLocation();
    const isCorporate = pathname.startsWith("/corporate");
    const accentColor = isCorporate ? "#FF0226" : "#B580D1";
    const accentBg = isCorporate ? "bg-[#FF0226]" : "bg-[#B580D1]";
    const accentBorderB = isCorporate ? "border-b-[#FF0226]" : "border-b-[#B580D1]";
    const contactPath = isCorporate ? "/corporate/contact-us" : "/contact-us";
    const marinePath = isCorporate ? "/corporate/marine-insurance-ghana" : "/marine-insurance-ghana";

    const [showLoader, setShowLoader] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        trackProductView('Business Protection Insurance');
        // Static page — no data to wait for, show content immediately
        setShowLoader(false);
    }, []);

    if (showLoader) {
        return (
            <div
                className={`
                w-full h-screen flex flex-col items-center justify-center
                bg-white transition-opacity duration-500
                ${fadeOut ? "opacity-0" : "opacity-100"}
            `}
            >
                <div className={`w-16 h-16 border-4 ${isCorporate ? "border-[#FF0226]" : "border-[#B580D1]"} border-t-transparent rounded-full animate-spin`}></div>
                <p className={`mt-4 ${isCorporate ? "text-[#FF0226]" : "text-[#B580D1]"} font-semibold text-lg animate-pulse`}>
                    Loading content...
                </p>
            </div>
        );
    }

    const products = [
        {
            title: "Fire & Special Perils Insurance",
            description: "Protects your business property, buildings, and contents against fire, lightning, explosion, and other special perils. Covers loss or damage caused by natural disasters, riots, and malicious acts.",
            link: "https://ecoronation.com/",
            features: [
                "Building and content cover",
                "Loss of rent protection",
                "Natural disaster coverage",
                "Malicious damage cover"
            ]
        },
        {
            title: "Liability Insurance",
            description: "Our Liability Insurance helps you take care of losses triggered by injuries and damages caused by you or your business to other people or their property. Covers public liability, product liability, and employers' liability.",
            link: "https://ecoronation.com/",
            features: [
                "Public liability protection",
                "Product liability cover",
                "Employers' liability",
                "Professional indemnity"
            ]
        },
        {
            title: "Burglary & Theft Insurance",
            description: "Comprehensive protection against loss or damage to your business property caused by burglary, theft, or attempted theft. Includes coverage for stock, equipment, and cash on premises.",
            link: "https://ecoronation.com/",
            features: [
                "Stock and inventory cover",
                "Equipment protection",
                "Cash on premises",
                "Forcible entry coverage"
            ]
        },
        {
            title: "Business Interruption Insurance",
            description: "Covers loss of income suffered by a business after a disaster. This policy helps cover financial losses during the period a business must close or operate at reduced capacity while damage is being repaired.",
            link: "https://ecoronation.com/",
            features: [
                "Revenue loss protection",
                "Fixed costs coverage",
                "Temporary relocation costs",
                "Extended indemnity periods"
            ]
        },
        {
            title: "Goods in Transit Insurance",
            description: "Protects goods while being transported by road, rail, or air within Ghana and beyond. Covers the risk of damage, theft, or loss during transportation from warehouse to final destination.",
            link: "https://ecoronation.com/",
            features: [
                "Inland transit coverage",
                "Door-to-door protection",
                "Loading/unloading cover",
                "All-risk options available"
            ]
        },
        {
            title: "Money Insurance",
            description: "Provides comprehensive coverage for loss of money in transit, on your business premises, or in a safe. Ideal for businesses that handle significant cash transactions daily.",
            link: "https://ecoronation.com/",
            features: [
                "Cash in transit protection",
                "Money in safe coverage",
                "Personal accident for carriers",
                "Crossed cheques cover"
            ]
        },
        {
            title: "Engineering Insurance",
            description: "Covers risks associated with engineering projects including machinery breakdown, plant all-risk, contractors all-risk, erection all-risk, and electronic equipment damage.",
            link: "/corporate/business-insurance/engineering",
            isInternal: true,
            features: [
                "Machinery breakdown",
                "Plant all-risk cover",
                "Contractors all-risk",
                "Electronic equipment"
            ]
        },
        {
            title: "Marine Insurance",
            description: "Comprehensive protection for goods in transit by sea and marine vessels. Covers marine cargo insurance and marine hull insurance for businesses involved in maritime trade.",
            link: marinePath,
            isInternal: true,
            features: [
                "Marine cargo protection",
                "Hull & machinery cover",
                "War & strikes coverage",
                "Warehouse-to-warehouse"
            ]
        },
    ];

    return (
        <div className="overflow-hidden">
            <SEO
                title="Business & Corporate Insurance in Ghana | SME Protection | Coronation"
                description="Comprehensive business insurance for Ghanaian SMEs and corporations. Engineering, liability, fire & more. Protect your business with Coronation today."
                keywords="corporate insurance, SME business insurance Ghana, business protection insurance, commercial insurance Ghana, liability insurance Ghana, fire insurance Ghana"
                canonicalUrl="https://coronationghana.com/business-protection-insurance"
            />

            {/* Hero Section */}
            <div className="relative">
                <img
                    src={product5}
                    alt="Business protection insurance Ghana"
                    className="hidden lg:block w-full object-cover h-auto bg-cover lg:w-full"
                    loading="lazy" />
                <img
                    src={productmob} alt="Corporate insurance Ghana"
                    className="lg:hidden block bg-cover w-full md:h-[800px]"
                    loading="lazy" />
                <div className="absolute lg:top-1/2 lg:-translate-y-1/2 md:top-[500px] top-[470px] lg:left-20 left-4 lg:w-[858px] md:w-[600px] w-[347px] lg:h-[152px] h-[172px]">
                    <h1 className="lg:text-[56px] md:text-[40px] text-[32px] lg:font-bold font-semibold lg:leading-[64px] leading-10 text-white">
                        Business Protection <br />Insurance
                    </h1>
                    <span className="w-full h-[72px] lg:text-[18px] md:text-[24px] text-[14px] font-normal lg:leading-[24px] leading-5 text-white">
                        Comprehensive insurance solutions tailored for Ghanaian businesses — from SMEs to large corporations. Protect what you've built.
                    </span>
                </div>
                <div className="absolute lg:top-1/2 lg:-translate-y-1/2 top-0 lg:right-20 right-0 lg:w-[300px] w-[225px] lg:h-[174px] h-[160px] bg-black bg-opacity-40 rounded-lg shadow-md">
                    <div className="lg:p-4 p-4">
                        <span className="text-white lg:w-[232px] lg:h-[32px] h-[24px] lg:text-[24px] text-[16px] lg:leading-[32px] leading-6 font-semibold">My Insurance Account</span>
                        <p className="text-white lg:text-[16px] text-[14px] lg:leading-[24px] leading-5 font-normal lg:mt-2 mt-0">
                            Want to know more about our services? Let's talk
                        </p>
                        <div className={`flex mt-5 w-[90px] h-[35px] ${accentBg} text-white rounded-lg items-center justify-center`}>
                            <Link to={contactPath}>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Section */}
            <section>
                <div className="w-full bg-black lg:px-20 px-4 items-center lg:py-20 md:py-20 py-10">
                    <div className="flex flex-col">
                        <h2 className="text-white lg:text-[40px] text-[24px] lg:leading-[44px] leading-[32px] font-bold lg:w-[772px]">
                            PROTECTING YOUR BUSINESS IS OUR BUSINESS
                        </h2>
                        <div className="flex items-center mt-4">
                            <span className="text-white lg:text-[18px] md:text-[16px] text-[14px] leading-[24px] font-normal lg:w-[846px]">
                                No matter the size of your business, we offer tailored insurance solutions that protect your assets, employees, and operations. From liability coverage to fire protection, our comprehensive plans ensure you can focus on growing your business while we handle the risks.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Cards Grid */}
            <section>
                <div className="lg:px-20 px-4 py-16 bg-[#F4F5F7]">
                    <div className="mb-10">
                        <h2 className="lg:text-[40px] text-[28px] font-bold lg:leading-[48px] leading-[36px] text-[#141415]">
                            Our Business Insurance Products
                        </h2>
                        <p className="text-[#56575D] lg:text-[18px] text-[14px] mt-3 lg:w-[700px]">
                            Explore our comprehensive range of non-life insurance products designed to protect every aspect of your business operations in Ghana.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {products.map((product, index) => (
                            <div key={index} className={`bg-white rounded-lg shadow-md border border-b-4 ${accentBorderB} p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300`}>
                                <div>
                                    <h3 className="lg:text-[24px] text-[20px] font-semibold lg:leading-[32px] leading-[28px] text-[#141415] mb-3">
                                        {product.title}
                                    </h3>
                                    <p className="text-[14px] leading-[20px] text-[#56575D] mb-4">
                                        {product.description}
                                    </p>
                                    <div className="pl-4 mb-4">
                                        <ul className="list-disc flex flex-col gap-1">
                                            {product.features.map((feature, idx) => (
                                                <li key={idx} className="text-[13px] text-[#56575D]">{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-4">
                                    {product.isInternal ? (
                                        <Link to={product.link}
                                            className={`w-[130px] h-[36px] ${accentBg} font-semibold text-[14px] leading-[20px] cursor-pointer rounded-lg shadow-md text-white flex items-center justify-center`}>
                                            Learn More
                                        </Link>
                                    ) : (
                                        <Link to={product.link} target='_blank' rel='noopener noreferrer'
                                            onClick={() => trackBuyInsurance(product.title)}
                                            className={`w-[130px] h-[36px] ${accentBg} font-semibold text-[14px] leading-[20px] cursor-pointer rounded-lg shadow-md text-white flex items-center justify-center`}>
                                            Buy Insurance
                                        </Link>
                                    )}
                                    <Link to={contactPath}
                                        className="w-[130px] h-[36px] bg-[#F7F7F8] font-semibold text-[14px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center rounded-lg">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Get a Quote Form Section */}
            <section>
                <div className="bg-white lg:px-20 px-4 py-16">
                    <div className="flex lg:flex-row flex-col gap-10 items-center">
                        <div className="flex-1">
                            <h2 className="lg:text-[40px] text-[28px] font-bold lg:leading-[48px] leading-[36px] text-[#141415]">
                                Protect Your Business Today
                            </h2>
                            <p className="text-[#56575D] lg:text-[18px] text-[14px] mt-4 lg:w-[500px]">
                                Get a tailored insurance quote for your business. Our expert team will assess your needs and recommend the best coverage options — all within 24 hours.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-center gap-3 text-[#56575D]">
                                    <span className={`w-6 h-6 ${accentBg} rounded-full flex items-center justify-center text-white text-xs`}>✓</span>
                                    Tailored solutions for SMEs and corporates
                                </li>
                                <li className="flex items-center gap-3 text-[#56575D]">
                                    <span className={`w-6 h-6 ${accentBg} rounded-full flex items-center justify-center text-white text-xs`}>✓</span>
                                    Competitive premium rates
                                </li>
                                <li className="flex items-center gap-3 text-[#56575D]">
                                    <span className={`w-6 h-6 ${accentBg} rounded-full flex items-center justify-center text-white text-xs`}>✓</span>
                                    Fast claims settlement
                                </li>
                                <li className="flex items-center gap-3 text-[#56575D]">
                                    <span className={`w-6 h-6 ${accentBg} rounded-full flex items-center justify-center text-white text-xs`}>✓</span>
                                    Dedicated relationship manager
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 w-full max-w-[500px]">
                            <GetQuoteForm productType="Business Protection Insurance" accentColor={accentColor} />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section>
                <div className="relative hidden lg:block">
                    <img src={product5} alt="Get insured today" className="w-full bg-cover" />
                    <div className="absolute top-[48%] left-[7%] text-[56px] font-semibold leading-[64px] text-white">
                        Get Insured Today
                    </div>
                    <div className="bg-white absolute top-[48%] right-[7%] w-[130px] h-[44px] flex rounded-lg items-center justify-center text-[16px] leading-[24px] font-semibold">
                        <Link to="https://ecoronation.com/" target='_blank' rel='noopener noreferrer'
                            onClick={() => trackBuyInsurance('Business Protection')}>
                            Buy Insurance
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BusinessProtectionInsurance
