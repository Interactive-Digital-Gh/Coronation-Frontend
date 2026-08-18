/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const PurpleCareers = () => {
    const [careerData, setCareerData] = useState(null);
    const [showLoader, setShowLoader] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);


    useEffect(() => {
        const fetchmotorData = async () => {
            try {
                const response = await fetch('https://coronation-cms.interactivedigital.com.gh/api/careerspage/fetch');
                const data = await response.json();
                console.log('purple career Data:', data);
                setCareerData(data[0]);
                // Start 2-second loader timer only after data arrives
                setTimeout(() => {
                    setFadeOut(true); // start fade
                    setTimeout(() => setShowLoader(false), 500); // hide after fade
                }, 2000);
            } catch (error) {
                console.error('Error fetching career data:', error);
            }
        };
        fetchmotorData();
    }, []);

    // Check if either aboutData or bodData is still loading
    if (!careerData || showLoader) {
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
                    src={careerData?.header_image ? `https://coronation-cms.interactivedigital.com.gh/${careerData.header_image}` : "assets/purpleinsight/insightbg.png"}
                    className="hidden lg:block w-full object-cover bg-cover lg:w-full h-[600px]"
                    loading="lazy" />
                <img
                    src={careerData?.header_image ? `https://coronation-cms.interactivedigital.com.gh/${careerData.header_image}` : "assets/purpleinsight/insightbg.png"}
                    alt="about"
                    className="block lg:hidden w-full bg-cover lg:w-full lg:h-[600px] md:h-[800px]" loading="lazy" />
                <div className="absolute lg:top-[370px] md:top-[520px] top-[500px] xsm:top-[450px] lg:left-20 left-4 lg:w-[858px] md:w-[600px] w-[347px] lg:h-[152px] h-[172px]">
                    <h2 className="lg:text-[56px] text-[32px] lg:font-bold font-semibold lg:leading-[64px] leading-10 text-white"
                        dangerouslySetInnerHTML={{ __html: careerData.header_caption }} />
                    <span className="w-full h-[72px] lg:text-[18px] md:text-[16px] text-[14px] font-normal lg:leading-[24px] leading-5 text-white"
                        dangerouslySetInnerHTML={{ __html: careerData.header_body }} />
                </div>
                <div className="absolute lg:top-[350px] top-0 lg:right-20 right-0 lg:w-[300px] w-[225px] lg:h-[174px] h-[160px] bg-black bg-opacity-40 rounded-lg shadow-md">
                    <div className="lg:p-6 p-4">
                        <span className="text-white lg:w-[232px] lg:h-[32px] h-[24px] lg:text-[24px] text-[16px] lg:leading-[32px] leading-6 font-semibold">My Insurance Account</span>
                        <p className="text-white lg:text-[16px] text-[14px] lg:leading-[24px] leading-5 font-normal lg:mt-2 mt-0">
                            Want to know more about our services? Let's talk
                        </p>
                        <div className="flex mt-5 w-[90px] h-[35px] text-[12px] bg-[#B580D1] text-white rounded-lg items-center justify-center">
                            <Link to="https://ecoronation.com/" target='_blank' rel='noopener noreferrer'>GET A QUOTE</Link>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div>
                    <div className="flex lg:flex-row flex-col-reverse w-full">
                        <div className="flex-1 flex-col flex items-center justify-center h-[430px]">
                            <div>
                                <div className="lg:h-[156px] h-[350px] md:w-[600px] w-[347px] lg:w-full md:pt-14 lg:pt-0 pt-0">
                                    <h2 className="lg:text-[40px] md:text-[32px] text-[24px] lg:w-[494px] md:w-[380px] w-[267px]
                                    lg:h-[88px] lg:leading-[44px] leading-[32px] font-semibold mb-2"
                                        dangerouslySetInnerHTML={{ __html: careerData.sec1_caption }} />
                                    {/* <span className="lg:text-[16px] text-[18px] leading-[20px] font-semibold text-black">
                                        CORONATION ACADAMICS
                                    </span> */}
                                    <p className="lg:w-[560px] text-[16px] leading-[20px] font-medium text-[#56575D]"
                                        dangerouslySetInnerHTML={{ __html: careerData.sec1_body }} />
                                </div>
                            </div>

                        </div>
                        <div className="flex-1 lg:p-10 p-0">
                            <img
                                src={careerData?.sec1_image ? `https://coronation-cms.interactivedigital.com.gh/${careerData.sec1_image}` : "assets/purplehome/purplehomebg.png"}
                                className="bg-cover lg:w-[640px] w-full lg:h-[410px] h-[320px] lg:rounded-lg object-cover"
                                loading="lazy" />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row w-full mt-4 lg:mt-0 h-[570px]">
                        <div className="flex-1 py-10 lg:pl-20 pl-0">
                            <img
                                src={careerData?.sec2_image ? `https://coronation-cms.interactivedigital.com.gh/${careerData.sec2_image}` : "assets/purplehome/purplehomebg.png"}
                                className="bg-cover lg:w-[640px] w-full lg:h-[410px] h-[320px] lg:rounded-lg object-cover"
                                loading="lazy" />
                        </div>
                        <div className="flex-1 flex-col flex lg:items-center justify-center lg:h-[430px]">
                            <div className="pl-4 md:pl-20 lg:pl-0">
                                <div className="lg:h-[156px] h-[350px] w-[200px] lg:w-full">
                                    <h2 className="text-[32px] leading-[40px] font-semibold"
                                        dangerouslySetInnerHTML={{ __html: careerData.sec2_caption }} />
                                    <p className="lg:w-[500px] md:w-[520px] w-[347px] text-[16px] leading-[20px] font-medium text-[#56575D] mt-4"
                                        dangerouslySetInnerHTML={{ __html: careerData.sec2_body }} />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>

            <section>
                <div className="bg-black w-full lg:h-[1169px] h-[400px] lg:p-20">
                    <div className="lg:w-[1280px] w-full lg:h-[1008px] h-[400px] flex flex-row py-8 lg:py-0 lg:flex-col gap-6 overflow-x-scroll overflow-y-hidden lg:overflow-hidden">
                        <div className="flex w-full h-[492px] gap-6">
                            <div className="bg-[#1D1E20] hidden lg:h-full h-[336px] rounded-lg shadow-lg lg:flex">
                                <div className="flex-1 hidden lg:flex">
                                    <img
                                        src={careerData?.card1_image ? `https://coronation-cms.interactivedigital.com.gh/${careerData.card1_image}` : "assets/purplehome/purplehomebg.png"}
                                        className="bg-cover w-[631px] h-full rounded-l-md"
                                        loading="lazy" />
                                </div>
                                <div className="flex-1 border-b-4 border-b-[#B580D1] flex items-center justify-center">
                                    <div className="lg:w-[357px] h-[220px] lg:pt-10 pt-0">
                                        <div className="mb-4 pl-4 lg:pl-0">
                                            <h2 className="text-white lg:text-[24px] text-[20px] font-semibold lg:leading-[32px] leading-[20px]"
                                                dangerouslySetInnerHTML={{ __html: careerData.card1_caption }} />
                                            <p className="text-[#888991] lg:text-[16px] text-[10px] font-normal lg:leading-[24px] leading-[18px]"
                                                dangerouslySetInnerHTML={{ __html: careerData.card1_body }} />
                                        </div>
                                        <Link to="https://www.instagram.com/coronationgh/" target='_blank' rel='noopener noreferrer' className="text-[#B580D1] pl-4 lg:pl-0">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#1D1E20] hidden lg:block lg:w-[424px] w-[300px] h-[336px] p-4 lg:p-0 lg:h-full border-b-4 border-b-[#B580D1] rounded-md shadow-md">
                                <img
                                    src={careerData?.card2_image ? `https://coronation-cms.interactivedigital.com.gh/${careerData.card2_image}` : "assets/purplehome/purplehomebg.png"}
                                    className="bg-cover rounded-t-md lg:h-[280px] h-[160px] w-[276px] lg:w-full"
                                    loading="lazy" />
                                <div className="p-4">
                                    <div className="lg:mt-4 mt-0">
                                        <h2 className="text-white lg:text-[24px] text-[20px] font-semibold lg:leading-[32px] leading-[20px]"
                                            dangerouslySetInnerHTML={{ __html: careerData.card2_caption }} />
                                        <p className="text-[#888991] lg:text-[16px] text-[10px] font-normal lg:leading-[24px] leading-[20px] mt-2"
                                            dangerouslySetInnerHTML={{ __html: careerData.card2_body }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="lg:hidden flex gap-6">
                                <div className="bg-[#1D1E20] lg:w-[410px] w-[276px] lg:h-[492px] h-[336px] border-b-4 border-b-[#B580D1] rounded-md shadow-md">
                                    <img
                                        src={careerData?.card1_image ? `https://coronation-cms.interactivedigital.com.gh/${careerData.card3_image}` : "assets/purplehome/purplehomebg.png"}
                                        className="bg-cover rounded-t-md lg:h-[280px] h-[160px] w-[276px] lg:w-full"
                                        loading="lazy" />
                                    <div className="p-4">
                                        <div className="mt-4 mb-1">
                                            <h2 className="text-white lg:text-[24px] text-[20px] font-semibold lg:leading-[32px] leading-[20px]"
                                                dangerouslySetInnerHTML={{ __html: careerData.card1_caption }} />
                                            <p className="text-[#888991] lg:text-[16px] text-[10px] font-normal lg:leading-[24px] leading-[20px] mt-2"
                                                dangerouslySetInnerHTML={{ __html: careerData.card1_body }} />
                                        </div>
                                        <Link to="https://www.instagram.com/coronationgh/" target='_blank' rel='noopener noreferrer' className="text-[#B580D1]">Learn More</Link>

                                    </div>
                                </div>
                                <div className="bg-[#1D1E20] lg:w-[410px] w-[276px] lg:h-[492px] h-[336px] border-b-4 border-b-[#B580D1] rounded-md shadow-md">
                                    <img
                                        src={careerData?.card1_image ? `https://coronation-cms.interactivedigital.com.gh/${careerData.card4_image}` : "assets/purplehome/purplehomebg.png"}
                                        className="bg-cover rounded-t-md lg:h-[280px] h-[160px] w-[276px] lg:w-full"
                                        loading="lazy" />
                                    <div className="p-4">
                                        <div className="mt-4">
                                            <h2 className="text-white lg:text-[24px] text-[20px] font-semibold lg:leading-[32px] leading-[20px]"
                                                dangerouslySetInnerHTML={{ __html: careerData.card2_caption }} />
                                            <p className="text-[#888991] lg:text-[16px] text-[10px] font-normal lg:leading-[24px] leading-[20px] mt-2"
                                                dangerouslySetInnerHTML={{ __html: careerData.card2_body }} />                                       </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#1D1E20] lg:w-[410px] w-[276px] lg:h-[492px] h-[336px] border-b-4 border-b-[#B580D1] rounded-md shadow-md">
                                <img
                                    src={careerData?.card3_image ? `https://coronation-cms.interactivedigital.com.gh/${careerData.card3_image}` : "assets/purplehome/purplehomebg.png"}
                                    className="bg-cover rounded-t-md lg:h-[280px] h-[160px] w-[276px] lg:w-full"
                                    loading="lazy" />
                                <div className="p-4">
                                    <div className="mt-4">
                                        <h2 className="text-white lg:text-[24px] text-[20px] font-semibold lg:leading-[32px] leading-[20px]"
                                            dangerouslySetInnerHTML={{ __html: careerData.card3_caption }} />
                                        <p className="text-[#888991] lg:text-[16px] text-[10px] font-normal lg:leading-[24px] leading-[20px] mt-2"
                                            dangerouslySetInnerHTML={{ __html: careerData.card3_body }} />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#1D1E20] lg:w-[410px] w-[276px] lg:h-[492px] h-[336px] border-b-4 border-b-[#B580D1] rounded-md shadow-md">
                                <img
                                    src={careerData?.card4_image ? `https://coronation-cms.interactivedigital.com.gh/${careerData.card4_image}` : "assets/purplehome/purplehomebg.png"}
                                    className="bg-cover rounded-t-md lg:h-[280px] h-[160px] w-[276px] lg:w-full"
                                    loading="lazy" />
                                <div className="p-4">
                                    <div className="mt-4">
                                        <h2 className="text-white lg:text-[24px] text-[20px] font-semibold lg:leading-[32px] leading-[20px]"
                                            dangerouslySetInnerHTML={{ __html: careerData.card4_caption }} />
                                        <p className="text-[#888991] lg:text-[16px] text-[10px] font-normal lg:leading-[24px] leading-[20px] mt-2"
                                            dangerouslySetInnerHTML={{ __html: careerData.card4_body }} />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#1D1E20] lg:w-[410px] w-[276px] lg:h-[492px] h-[336px] border-b-4 border-b-[#B580D1] rounded-md shadow-md">
                                <img
                                    src={careerData?.card5_image ? `https://coronation-cms.interactivedigital.com.gh/${careerData.card5_image}` : "assets/purplehome/purplehomebg.png"}
                                    className="bg-cover rounded-t-md lg:h-[280px] h-[160px] w-[276px] lg:w-full"
                                    loading="lazy" />
                                <div className="p-4">
                                    <div className="mt-4">
                                        <h2 className="text-white lg:text-[24px] text-[20px] font-semibold lg:leading-[32px] leading-[20px]"
                                            dangerouslySetInnerHTML={{ __html: careerData.card5_caption }} />
                                        <p className="text-[#888991] lg:text-[16px] text-[10px] font-normal lg:leading-[24px] leading-[20px] mt-2"
                                            dangerouslySetInnerHTML={{ __html: careerData.card5_body }} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full h-[164px] bg-[#B580D1] flex lg:flex-row flex-col lg:items-center lg:justify-between lg:pr-40 lg:pl-20 pr-0 pl-4 py-14 lg:py-0 gap-2 lg:gap-0">
                    <h2 className="text-white w-[343px] lg:w-full h-[40px]  font-bold lg:text-[40px] text-[32px] lg:leading-[44px] leading-[40px]">Get Insured Today</h2>
                    <div className="w-[110px] h-[44px]  bg-white flex items-center justify-center p-2 lg:p-2 rounded-lg text-[16px] leading-[24px] font-semibold">
                        <Link to="/contact-us">Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PurpleCareers