/* eslint-disable react/no-unescaped-entities */
import "./global.css"
import mariners from "../assets/marine/mariners.png"
import marinersmob from "../assets/marine/marinersmob.png"
import { Link, useLocation } from "react-router-dom"
import CargoFeature from "../features/CargoFeature"
import { useEffect, useState } from "react"
import MarinehullFeature from "../features/MarinehullFeature"
import ProductFlyer from "../assets/Product_Flyers  .pdf"
import SEO from "../components/SEO"
import GetQuoteForm from "../components/GetQuoteForm"
import { trackProductView, trackBuyInsurance } from "../utils/metaPixel"


const MarineInsuranceGhana = () => {
    // Corporate visitors reach this page via /corporate/marine-insurance-ghana and get the red theme
    const { pathname } = useLocation();
    const isCorporate = pathname.startsWith("/corporate");
    const accentColor = isCorporate ? "#FF0226" : "#B580D1";
    const accentBg = isCorporate ? "bg-[#FF0226]" : "bg-[#B580D1]";
    const accentBorder = isCorporate ? "border-[#FF0226]" : "border-[#B580D1]";
    const accentText = isCorporate ? "text-[#FF0226]" : "text-[#B580D1]";
    const contactPath = isCorporate ? "/corporate/contact-us" : "/contact-us";

    const [cargoOpen, setCargoOpen] = useState(false);
    const [marinehullOpen, setMarinehullOpen] = useState(false);

    const [marineData, setMarineData] = useState(null);
    const [showLoader, setShowLoader] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        trackProductView('Marine Insurance Ghana');
        const fetchmarineData = async () => {
            try {
                const response = await fetch('https://coronation-cms.interactivedigital.com.gh/api/institute/marine/fetch');
                const data = await response.json();
                setMarineData(data[0]);
                setShowLoader(false);
            } catch (error) {
                console.error('Error fetching marine data:', error);
            }
        };
        fetchmarineData();
    }, []);

    if (!marineData || showLoader) {
        return (
            <div
                className={`
                w-full h-screen flex flex-col items-center justify-center
                bg-white transition-opacity duration-500
                ${fadeOut ? "opacity-0" : "opacity-100"}
            `}
            >
                <div className={`w-16 h-16 border-4 ${accentBorder} border-t-transparent rounded-full animate-spin`}></div>
                <p className={`mt-4 ${accentText} font-semibold text-lg animate-pulse`}>
                    Loading content...
                </p>
            </div>
        );
    }

    return (
        <div className="overflow-hidden">
            <SEO
                title="Marine Insurance Brokers in Ghana | Cargo & Hull Cover | Coronation"
                description="Protect your goods in transit and marine vessels with Coronation's marine insurance in Ghana. Expert brokers, competitive rates. Get a quote today."
                keywords="marine insurance brokers, goods in transit insurance, marine cargo insurance Ghana, marine hull insurance, shipping insurance Ghana"
                canonicalUrl="https://coronationghana.com/marine-insurance-ghana"
            />

            {/* Hero Section */}
            <div className="relative">
                <img
                    src={marineData?.header_image ? `https://coronation-cms.interactivedigital.com.gh/${marineData.header_image}` : "assets/purplemotor/motorbg.png"}
                    alt="Marine insurance in Ghana - Coronation Insurance"
                    className="hidden lg:block w-full h-[600px] object-cover"
                    loading="lazy"
                />
                <img
                    src={marinersmob}
                    alt="Marine cargo insurance Ghana"
                    className="block lg:hidden w-full h-[678px] object-cover"
                    loading="lazy"
                />

                <div className="absolute inset-0 bg-black opacity-40"></div>

                <div className="absolute lg:top-[380px] top-[500px] lg:left-20 left-4 lg:w-[681px] w-[347px] lg:h-[152px] h-[172px]">
                    <h1 className="lg:text-[56px] text-[32px] lg:font-bold font-semibold lg:leading-[64px] leading-10 text-white"
                        dangerouslySetInnerHTML={{ __html: marineData.header_caption }} />
                    <span className="w-[681px] h-[48px] lg:text-[18px] text-[14px] font-normal lg:leading-[24px] leading-5 text-white"
                        dangerouslySetInnerHTML={{ __html: marineData.header_body }} />
                </div>

                <div className={`absolute lg:top-[340px] top-0 lg:right-20 right-0 lg:w-[300px] w-[225px] lg:h-[174px] h-[160px] ${accentBg} bg-opacity-70 shadow-md`}>
                    <div className="lg:p-6 p-4">
                        <span className="text-white lg:w-[232px] lg:h-[32px] h-[24px] lg:text-[24px] text-[16px] lg:leading-[32px] leading-6 font-semibold">
                            My Insurance Account
                        </span>
                        <p className="text-white lg:text-[16px] text-[14px] lg:leading-[24px] leading-5 font-normal lg:mt-2 mt-0">
                            Want to know more about our services? Let's talk
                        </p>
                        <div className="flex mt-5 w-[90px] h-[35px] bg-black text-white items-center justify-center">
                            <Link to={contactPath}>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Marine Info Section */}
            <section>
                <div className="w-full lg:h-[300px] h-[280px] bg-black lg:px-20 px-4 items-center lg:py-20 md:py-20 py-10">
                    <div className="flex flex-col">
                        <h2 className="text-white lg:text-[40px] text-[24px] lg:leading-[44px] leading-[32px] font-bold lg:w-[772px]">
                            MARINE INSURANCE THAT IS FOR YOU
                        </h2>
                        <div className="flex items-center mt-4">
                            <span className="text-white lg:text-[18px] md:text-[16px] text-[14px] leading-[24px] font-normal w-[703px] h-[48px]">
                                It can cover damage to the vessel, liability for injuries or property damage, and even loss of personal belongings. Having marine insurance gives boat owners peace of mind knowing they are covered in case of unexpected events on the water.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marine Cargo & Hull Section */}
            <section>
                <div className="flex lg:flex-row md:flex-row flex-col py-5 lg:px-20 lg:gap-0 gap-8 px-4 bg-[#E9EAEC]">
                    <div className="lg:w-[720px] w-full lg:h-[292px] flex flex-col items-start justify-center">
                        <h3 className="text-[24px] font-semibold leading-8">
                            Marine Cargo
                        </h3>
                        <span className="text-[18px] font-normal leading-6 text-[#888991]"
                            dangerouslySetInnerHTML={{ __html: marineData.marine_cargo_body }} />

                        <div className="flex gap-4">
                            <div onClick={() => setCargoOpen(true)} className={`w-[142px] h-[36px] ${accentBg} font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-white flex items-center justify-center mt-6`}>
                                Insurance Features
                            </div>
                            <div className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                <Link to="https://ecoronation.com/marine" target='_blank' rel='noopener noreferrer'
                                    onClick={() => trackBuyInsurance('Marine Cargo')}>
                                    Buy Insurance
                                </Link>
                            </div>
                            <a href={ProductFlyer} download="Product_Flyers.pdf" className={`w-[142px] h-[36px] ${accentBg} font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer rounded-lg shadow-md text-white flex items-center justify-center mt-6`}>
                                Download Flyer
                            </a>
                        </div>
                    </div>
                    {cargoOpen && (
                        <CargoFeature closeModal={() => setCargoOpen(false)} />
                    )}
                    <div className="lg:w-[720px] w-full lg:h-[292px] flex flex-col items-start justify-center">
                        <h3 className="text-[24px] font-semibold leading-8">
                            Marine Hull
                        </h3>
                        <span className="text-[18px] font-normal leading-6 text-[#888991]"
                            dangerouslySetInnerHTML={{ __html: marineData.marine_hull_body }} />

                        <div className="flex gap-4">
                            <div onClick={() => setMarinehullOpen(true)} className={`w-[142px] h-[36px] ${accentBg} font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-white flex items-center justify-center mt-6`}>
                                Insurance Features
                            </div>
                            <div className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                <Link to="https://ecoronation.com/marine" target='_blank' rel='noopener noreferrer'
                                    onClick={() => trackBuyInsurance('Marine Hull')}>
                                    Buy Insurance
                                </Link>
                            </div>
                            <a href={ProductFlyer} download="Product_Flyers.pdf" className={`w-[142px] h-[36px] ${accentBg} font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer rounded-lg shadow-md text-white flex items-center justify-center mt-6`}>
                                Download Flyer
                            </a>
                        </div>
                    </div>
                    {marinehullOpen && (
                        <MarinehullFeature closeModal={() => setMarinehullOpen(false)} />
                    )}
                </div>
            </section>

            {/* Benefits Section */}
            <section>
                <div className="flex lg:flex-row md:flex-row flex-col w-full mb-8 lg:mb-0">
                    <div className="flex-1 relative flex mb-2">
                        <div className={`lg:w-[383px] w-[258px] lg:h-[600px] md:h-full h-[320px] ${accentBg}`}>
                        </div>
                        <img
                            src={mariners} alt="Marine insurance benefits"
                            className="bg-cover w-[354px] lg:w-[628px] lg:h-[400px] h-[302px] absolute lg:top-[100px] md:top-[60px] top-[10px] lg:left-20 left-4"
                            loading="lazy" />
                    </div>
                    <div className="flex-1 flex-col flex p-4 lg:items-center justify-center">
                        <div className="lg:w-[604px] w-[347px]">
                            <h2 className="w-[558px] lg:h-[44px] lg:text-[40px] text-[24px] leading-[24px] lg:leading-[56px] font-bold">BENEFITS</h2>
                            <p className="lg:w-[518px] lg:h-[48px] lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-medium text-[#56575D] mt-4">
                                The product has been designed with a combination of Enhanced term life which gives you an additional benefit.
                            </p>
                            <div className="pl-6 mt-2">
                                <ul className="list-disc flex flex-col gap-2">
                                    <li className="lg:text-[16px] text-[12px] text-[#56575D]">Coverage for goods in transit across international waters</li>
                                    <li className="lg:text-[16px] text-[12px] text-[#56575D]">Hull and machinery protection for vessels</li>
                                    <li className="lg:text-[16px] text-[12px] text-[#56575D]">Protection against perils of the sea, fire, and theft</li>
                                    <li className="lg:text-[16px] text-[12px] text-[#56575D]">General average and salvage charges coverage</li>
                                    <li className="lg:text-[16px] text-[12px] text-[#56575D]">Third party liability protection</li>
                                    <li className="lg:text-[16px] text-[12px] text-[#56575D]">Warehouse-to-warehouse coverage for cargo</li>
                                    <li className="lg:text-[16px] text-[12px] text-[#56575D]">War and strikes risk coverage available</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get a Quote Form Section */}
            <section>
                <div className="bg-[#F4F5F7] lg:px-20 px-4 py-16">
                    <div className="flex lg:flex-row flex-col gap-10 items-center">
                        <div className="flex-1">
                            <h2 className="lg:text-[40px] text-[28px] font-bold lg:leading-[48px] leading-[36px] text-[#141415]">
                                Get Your Marine Insurance Quote
                            </h2>
                            <p className="text-[#56575D] lg:text-[18px] text-[14px] mt-4 lg:w-[500px]">
                                Whether you're shipping goods across borders or protecting your marine vessel, Coronation's marine insurance has you covered with competitive rates and expert service.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-center gap-3 text-[#56575D]">
                                    <span className={`w-6 h-6 ${accentBg} rounded-full flex items-center justify-center text-white text-xs`}>✓</span>
                                    Comprehensive cargo protection
                                </li>
                                <li className="flex items-center gap-3 text-[#56575D]">
                                    <span className={`w-6 h-6 ${accentBg} rounded-full flex items-center justify-center text-white text-xs`}>✓</span>
                                    Warehouse-to-warehouse coverage
                                </li>
                                <li className="flex items-center gap-3 text-[#56575D]">
                                    <span className={`w-6 h-6 ${accentBg} rounded-full flex items-center justify-center text-white text-xs`}>✓</span>
                                    Expert marine insurance brokers
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 w-full max-w-[500px]">
                            <GetQuoteForm productType="Marine Insurance" accentColor={accentColor} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MarineInsuranceGhana
