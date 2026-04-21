/* eslint-disable react/no-unescaped-entities */
import "./global.css"
// import homebg from "../assets/purplehomeIns/homebg.png"
// import homeIns1 from "../assets/purplehomeIns/homeIns1.png"
// import homeIns2 from "../assets/purplehomeIns/homeIns2.png"
import homeIns3 from "../assets/purplehomeIns/homeIns3.png"
import homeInsbg from "../assets/purplehomeIns/homeInsbg.png"
import { useEffect, useState } from "react"
import HomeOwnerFeature from "../features/HomeOwnerFeature"
import HouseHolderFeature from "../features/HouseHolderFeature"
import { Link } from "react-router-dom"
import ProductFlyer from "../assets/Product_Flyers  .pdf"


const PurpleHomeInsurance = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHouseModalOpen, setIsHouseModalOpen] = useState(false);

    const [homeInsData, setHomeInsData] = useState(null);
    const [showLoader, setShowLoader] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);


    useEffect(() => {
        const fetchhomeData = async () => {
            try {
                const response = await fetch('https://coronation-cms.interactivedigital.com.gh/api/home/individual/fetch');
                const data = await response.json();
                console.log('purple homeIns Data:', data);
                setHomeInsData(data[0]);
                // Start 2-second loader timer only after data arrives
                setTimeout(() => {
                    setFadeOut(true); // start fade
                    setTimeout(() => setShowLoader(false), 500); // hide after fade
                }, 2000);
            } catch (error) {
                console.error('Error fetching homeIns data:', error);
            }
        };
        fetchhomeData();
    }, []);

    // Check if either aboutData or bodData is still loading
    if (!homeInsData || showLoader) {
        return (
            <div
                className={`
                w-full h-screen flex flex-col items-center justify-center
                bg-white transition-opacity duration-500
                ${fadeOut ? "opacity-0" : "opacity-100"}
            `}
            >
                <div className="w-16 h-16 border-4 border-[#B580D1] border-t-transparent rounded-full animate-spin"></div>

                <p className="mt-4 text-[#B580D1] font-semibold text-lg animate-pulse">
                    Loading content...
                </p>
            </div>
        );
    }


    return (
        <div className="overflow-hidden">
            <div className="relative">
                <img
                    src={homeInsData?.header_image ? `https://coronation-cms.interactivedigital.com.gh/${homeInsData.header_image}` : "assets/purplemotor/motorbg.png"}
                    className="hidden lg:block w-full bg-cover lg:w-full h-[600px]"
                    loading="lazy" />
                <img src={homeInsbg} alt="about" className="block lg:hidden w-full bg-cover lg:w-full h-[678px]" loading="lazy" />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute lg:top-[360px] md:top-[450px] top-[370px] lg:left-20 left-4 lg:w-[858px] md:w-[600px] w-[347px] lg:h-[152px] h-[172px]">
                    <h2 className="lg:text-[56px] text-[32px] lg:font-bold font-semibold lg:leading-[64px] leading-10 text-white"
                        dangerouslySetInnerHTML={{ __html: homeInsData.header_caption }} />
                    <span className="w-full h-[72px] lg:text-[18px] md:text-[16px] text-[14px] font-normal lg:leading-[24px] leading-5 text-white"
                        dangerouslySetInnerHTML={{ __html: homeInsData.header_body }} />
                </div>
                <div className="absolute lg:top-[380px] top-0 lg:right-20 right-0 lg:w-[300px] w-[225px] lg:h-[174px] h-[160px] bg-black bg-opacity-40 rounded-lg shadow-md">
                    <div className="lg:p-6 p-4">
                        <span className="text-white lg:w-[232px] lg:h-[32px] h-[24px] lg:text-[24px] text-[16px] lg:leading-[32px] leading-6 font-semibold">My Insurance Account</span>
                        <p className="text-white lg:text-[16px] text-[14px] lg:leading-[24px] leading-5 font-normal lg:mt-2 mt-0">
                            Want to know more about our services? Let's talk
                        </p>
                        <div className="flex mt-5 w-[90px] h-[35px] bg-[#B580D1] text-white rounded-lg items-center justify-center">
                            <Link to="https://coronation.ng/contact-us/" target='_blank' rel='noopener noreferrer'>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="w-full lg:h-[300px] h-[220px] bg-black lg:px-28 px-4 items-center lg:py-20 md:py-20 py-10">
                    <div className="flex flex-col">
                        <h3 className="text-white lg:text-[40px] text-[24px] lg:leading-[44px] leading-[32px] font-bold lg:w-[572px]"
                            dangerouslySetInnerHTML={{ __html: homeInsData.sec1_caption }} />
                        <div className="flex items-center mt-4">
                            <span className="text-white lg:text-[18px] md:text-[16px] text-[14px] leading-[24px] font-normal w-[703px] h-[48px]"
                                dangerouslySetInnerHTML={{ __html: homeInsData.sec1_body }} />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="">
                    <div className="flex lg:flex-row flex-col-reverse w-full">
                        <div className=" flex-1 flex-col bg-[#EFEFF0] flex items-center justify-center lg:h-[430px] h-[500px]">
                            <div className="p-4 lg:p-0">
                                <div className="lg:h-[156px] md:h-[125px] h-[160px] ">
                                    <h2 className="lg:text-[32px] text-[20px] lg:leading-[40px] leading-[24px] font-semibold">HOMEOWNERS</h2>
                                    <p className="lg:w-[560px] w-full lg:text-[16px] md:text-[14px] text-[12px] leading-[20px] font-medium text-[#56575D] mt-4"
                                        dangerouslySetInnerHTML={{ __html: homeInsData.homeowner_ins_body }} />
                                </div>
                                <div className="flex gap-4 mt-2">
                                    <span onClick={() => setIsModalOpen(true)} className="text-white bg-[#B580D1] p-2 rounded-md cursor-pointer">Featured Insurance</span>
                                    <a href={ProductFlyer} download="Product_Flyers.pdf" className="text-white bg-[#B580D1] p-2 rounded-md cursor-pointer">Download Flyer</a>
                                </div>
                            </div>
                            {isModalOpen && (
                                <HomeOwnerFeature closeModal={() => setIsModalOpen(false)} /> // Pass close function to the modal
                            )}
                        </div>
                        <div className="flex-1">
                            <img
                                src={homeInsData?.homeowner_ins_image ? `https://coronation-cms.interactivedigital.com.gh/${homeInsData.homeowner_ins_image}` : "assets/purplehomeIns/homeIns1.png"}
                                className="bg-cover w-full lg:h-[430px] object-cover"
                                loading="lazy" />
                        </div>
                    </div>

                    <div className="flex lg:flex-row flex-col w-full">
                        <div className="flex-1">
                            <img
                                src={homeInsData?.householder_ins_image ? `https://coronation-cms.interactivedigital.com.gh/${homeInsData.householder_ins_image}` : "assets/purplehomeIns/homeIns1.png"}
                                className="bg-cover w-full lg:h-[430px] object-cover"
                                loading="lazy" />
                        </div>
                        <div className="flex-1 flex-col flex items-center justify-center h-[430px]">
                            <div className="p-4 lg:p-0">
                                <div className="lg:h-[156px] md:h-[110px] h-[160px]">
                                    <h2 className="lg:text-[32px] text-[20px] lg:leading-[40px] leading-[24px] font-semibold">HOUSEHOLDERS</h2>
                                    <p className="lg:w-[560px] w-full lg:text-[16px] md:text-[14px] text-[12px] leading-[20px] font-medium text-[#56575D] mt-4"
                                        dangerouslySetInnerHTML={{ __html: homeInsData.householder_ins_body }} />

                                </div>
                                <div className="flex gap-4 mt-2">
                                    <span onClick={() => setIsHouseModalOpen(true)} className="text-white bg-[#B580D1] p-2 rounded-md cursor-pointer">Featured Insurance</span>
                                    <a href={ProductFlyer} download="Product_Flyers.pdf" className="text-white bg-[#B580D1] p-2 rounded-md cursor-pointer">Download Flyer</a>
                                </div>
                            </div>
                            {isHouseModalOpen && (
                                <HouseHolderFeature closeModal={() => setIsHouseModalOpen(false)} /> // Pass close function to the modal
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex lg:flex-row md:flex-row flex-col-reverse w-full mb-8 lg:mb-0">
                    <div className="flex-1 flex-col flex lg:items-center justify-center">
                        <div className="lg:w-[604px] md:pl-4 lg:pl-0 pl-0 w-[347px]">
                            <h2 className="w-[558px] lg:h-[44px] lg:text-[48px] leading-[24px] lg:leading-[56px] font-bold">BENEFITS</h2>
                            <p className="lg:w-[518px] lg:h-[48px] lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-medium text-[#56575D] mt-4">
                                The product has been designed with a combination of Enhanced term life which gives you an additional benefit.
                            </p>
                            <div className="pl-6 mt-2">
                                <ul className="list-disc flex flex-col gap-2">
                                    <li className="lg:text-[16px] text-[12px] text-[#56575D]">Indemnifies in the event of damage to the structures of the house.</li>
                                    <li className="lg:text-[16px] text-[12px] text-[#56575D]">Indemnifies in the event of loss due to burglary (theft) or fire</li>
                                    <li className="lg:text-[16px] text-[12px] text-[#56575D]">The policy will also cover you against liability for accidental injury to third parties or damage to their property that occurs on your premises</li>
                                    <li className="lg:text-[16px] text-[12px] text-[#56575D]">Can be extended to cover larceny (Theft not involving violence or forcible entry/exit is covered</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative flex items-end justify-end">
                        <div className="lg:w-[571px] w-[258px] lg:h-[600px] h-[320px] bg-[#B580D1] ">
                        </div>
                        <img
                            src={homeIns3} alt="about"
                            className="bg-cover w-[354px] lg:w-[628px] lg:h-[400px] h-[302px] absolute lg:top-[100px] top-[10px] right-[90px] md:right-5 lg:right-[150px]"
                            loading="lazy" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PurpleHomeInsurance