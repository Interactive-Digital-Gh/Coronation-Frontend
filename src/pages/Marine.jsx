/* eslint-disable react/no-unescaped-entities */
import "./global.css"
// import marinemainbg from "../assets/marine/marinemainbg.png"
import mariners from "../assets/marine/mariners.png"
import marinersmob from "../assets/marine/marinersmob.png"
import { Link } from "react-router-dom"
import CargoFeature from "../features/CargoFeature"
import { useEffect, useState } from "react"
import MarinehullFeature from "../features/MarinehullFeature"
import ProductFlyer from "../assets/Product_Flyers  .pdf"



const Marine = () => {
    const [cargoOpen, setCargoOpen] = useState(false);
    const [marinehullOpen, setMarinehullOpen] = useState(false);

    const [marineData, setMarineData] = useState(null);
    const [showLoader, setShowLoader] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);


    useEffect(() => {
        const fetchmarineData = async () => {
            try {
                const response = await fetch('https://coronation-cms.interactivedigital.com.gh/api/institute/marine/fetch');
                const data = await response.json();
                console.log('purple marine Data:', data);
                setMarineData(data[0]);
                // Start 2-second loader timer only after data arrives
                setTimeout(() => {
                    setFadeOut(true); // start fade
                    setTimeout(() => setShowLoader(false), 500); // hide after fade
                }, 2000);
            } catch (error) {
                console.error('Error fetching marine data:', error);
            }
        };
        fetchmarineData();
    }, []);

    // Check if either aboutData or bodData is still loading
    if (!marineData || showLoader) {
        return (
            <div
                className={`
                w-full h-screen flex flex-col items-center justify-center
                bg-white transition-opacity duration-500
                ${fadeOut ? "opacity-0" : "opacity-100"}
            `}
            >
                <div className="w-16 h-16 border-4 border-[#FF0226] border-t-transparent rounded-full animate-spin"></div>

                <p className="mt-4 text-[#FF0226] font-semibold text-lg animate-pulse">
                    Loading content...
                </p>
            </div>
        );
    }


    return (
        <div className="overflow-hidden">
            <div className="relative">
                {/* Background images */}
                <img
                    src={marineData?.header_image ? `https://coronation-cms.interactivedigital.com.gh/${marineData.header_image}` : "assets/purplemotor/motorbg.png"}
                    alt="about"
                    className="hidden lg:block w-full h-[600px] object-cover"
                    loading="lazy"
                />
                <img
                    src={marinersmob}
                    alt="about"
                    className="block lg:hidden w-full h-[678px] object-cover"
                    loading="lazy"
                />

                {/* Black overlay */}
                <div className="absolute inset-0 bg-black opacity-40"></div>

                {/* Content on top of the image */}
                <div className="absolute lg:top-[380px] top-[500px] lg:left-20 left-4 lg:w-[681px] w-[347px] lg:h-[152px] h-[172px]">
                    <h2 className="lg:text-[56px] text-[32px] lg:font-bold font-semibold lg:leading-[64px] leading-10 text-white"
                        dangerouslySetInnerHTML={{ __html: marineData.header_caption }} />

                    <span className="w-[681px] h-[48px] lg:text-[18px] text-[14px] font-normal lg:leading-[24px] leading-5 text-white"
                        dangerouslySetInnerHTML={{ __html: marineData.header_body }} />
                </div>

                {/* Contact Us Box */}
                <div className="absolute lg:top-[340px] top-0 lg:right-20 right-0 lg:w-[300px] w-[225px] lg:h-[174px] h-[160px] bg-[#FF0226] bg-opacity-70 shadow-md">
                    <div className="lg:p-6 p-4">
                        <span className="text-white lg:w-[232px] lg:h-[32px] h-[24px] lg:text-[24px] text-[16px] lg:leading-[32px] leading-6 font-semibold">
                            My Insurance Account
                        </span>
                        <p className="text-white lg:text-[16px] text-[14px] lg:leading-[24px] leading-5 font-normal lg:mt-2 mt-0">
                            Want to know more about our services? Let's talk
                        </p>
                        <div className="flex mt-5 w-[90px] h-[35px] bg-black text-white items-center justify-center">
                            Contact Us
                        </div>
                    </div>
                </div>
            </div>

            {/* Ensure the following sections are not overlapping */}
            <section>
                <div className="w-full lg:h-[300px] h-[280px] bg-black lg:px-20 px-4 items-center lg:py-20 md:py-20 py-10">
                    <div className="flex flex-col">
                        <h3 className="text-white lg:text-[40px] text-[24px] lg:leading-[44px] leading-[32px] font-bold lg:w-[772px]">
                            MARINE INSURANCE THAT IS FOR YOU
                        </h3>
                        <div className="flex items-center mt-4">
                            <span className="text-white lg:text-[18px] md:text-[16px] text-[14px] leading-[24px] font-normal w-[703px] h-[48px]">
                                It can cover damage to the vessel, liability for injuries or property damage, and even loss of personal belongings. Having marine insurance gives boat owners peace of mind knowing they are covered in case of unexpected events on the water.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex lg:flex-row md:flex-row flex-col py-5 lg:px-20 lg:gap-0 gap-8 px-4 bg-[#E9EAEC]">
                    <div className="lg:w-[720px] w-full lg:h-[292px] flex flex-col items-start justify-center">
                        <h3 className="text-[24px] font-semibold leading-8">
                            Marine Cargo
                        </h3>
                        <span className="text-[18px] font-normal leading-6 text-[#888991]"
                            dangerouslySetInnerHTML={{ __html: marineData.marine_cargo_body }} />

                        <div className="flex gap-4">
                            <div onClick={() => setCargoOpen(true)} className="w-[142px] h-[36px] bg-[#FF0226] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-white flex items-center justify-center mt-6">
                                Insurance Features
                            </div>
                            <div className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                <Link to="https://ecoronation.com/marine" target='_blank' rel='noopener noreferrer'>Request & Pay</Link>
                            </div>
                            <a href={ProductFlyer} download="Product_Flyers.pdf" className="w-[142px] h-[36px] bg-[#FF0226] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer rounded-lg shadow-md text-white flex items-center justify-center mt-6">
                                Download Flyer
                            </a>
                        </div>
                    </div>
                    {cargoOpen && (
                        <CargoFeature closeModal={() => setCargoOpen(false)} /> // Pass close function to the modal
                    )}
                    <div className="lg:w-[720px] w-full lg:h-[292px] flex flex-col items-start justify-center">
                        <h3 className="text-[24px] font-semibold leading-8">
                            Marine hull
                        </h3>
                        <span className="text-[18px] font-normal leading-6 text-[#888991]"
                            dangerouslySetInnerHTML={{ __html: marineData.marine_hull_body }} />

                        <div className="flex gap-4">
                            <div onClick={() => setMarinehullOpen(true)} className="w-[142px] h-[36px] bg-[#FF0226] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-white flex items-center justify-center mt-6">
                                Insurance Features
                            </div>
                            <div className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                <Link to="https://ecoronation.com/marine" target='_blank' rel='noopener noreferrer'>Request & Pay</Link>
                            </div>
                            <a href={ProductFlyer} download="Product_Flyers.pdf" className="w-[142px] h-[36px] bg-[#FF0226] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer rounded-lg shadow-md text-white flex items-center justify-center mt-6">
                                Download Flyer
                            </a>
                        </div>
                    </div>
                    {marinehullOpen && (
                        <MarinehullFeature closeModal={() => setMarinehullOpen(false)} /> // Pass close function to the modal
                    )}
                </div>
            </section>

            <section>
                <div className="flex lg:flex-row md:flex-row flex-col w-full mb-8 lg:mb-0">
                    <div className="flex-1 relative flex mb-2">
                        <div className="lg:w-[383px] w-[258px] lg:h-[600px] md:h-full h-[320px] bg-[#FF0226] ">
                        </div>
                        <img
                            src={mariners} alt="about"
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
                                    <li className="lg:text-[16px] text-[12px] text-[#56575D]">Payment of medical assistance for illness or accident sustained while travelling</li>
                                    <li className="lg:text-[16px] text-[12px] text-[#56575D]">Provides transport or repatriation for medical reasons for the insured and/or family members travelling with the insured</li>
                                    <li className="lg:text-[16px] text-[12px] text-[#56575D]">Provides transport or repatriation of mortal remains of insured</li>
                                    <li className="lg:text-[16px] text-[12px] text-[#56575D]">Communication of urgent messages related to any event covered in the policy</li>
                                    <li className="lg:text-[16px] text-[12px] text-[#56575D]">Payment of compensation for in-flight loss of checked-in luggage</li>
                                    <li className="lg:text-[16px] text-[12px] text-[#56575D]">Payment of compensation for delay of flight and delay of luggage.</li>
                                    <li className="lg:text-[16px] text-[12px] text-[#56575D]">Emergency return home following the death of a close family member</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Marine