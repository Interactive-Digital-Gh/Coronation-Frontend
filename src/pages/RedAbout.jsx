/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import { fetchCms } from '../lib/cmsCache';
import SlickSlider from "../components/SlickSlider"
import { useEffect, useState } from "react"
import Executive from "../components/Executive";

const RedAbout = () => {
    const [aboutData, setAboutData] = useState(null);
    const [showLoader, setShowLoader] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCms('https://coronation-cms.interactivedigital.com.gh/api/about/fetch');
                console.log(data);
                setAboutData(data[0]);
                // Start 2-second loader timer only after data arrives
                setShowLoader(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    if (!aboutData || showLoader) {
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
                <img
                    src={aboutData?.header_image ? `https://coronation-cms.interactivedigital.com.gh/${aboutData.header_image}` : "assets/purplehome/purplehomebg.png"}
                    className="w-full bg-cover object-cover lg:w-full h-[600px]"
                    loading="lazy" />
                <div className="absolute lg:top-[293px] top-[370px] lg:left-20 left-4 lg:w-[858px] md:w-[500px] w-[347px] lg:h-[152px] h-[172px]">
                    <h2 className="lg:text-[56px] text-[32px] lg:font-bold font-semibold lg:leading-[64px] leading-10 text-white"
                        dangerouslySetInnerHTML={{ __html: aboutData.header_caption }} />
                    <span className="w-full h-[72px] lg:text-[18px] text-[14px] font-normal lg:leading-[24px] leading-5 text-white"
                        dangerouslySetInnerHTML={{ __html: aboutData.header_body }} />
                </div>
                <div className="absolute lg:top-[280px] top-0 lg:right-20 right-0 lg:w-[300px] w-[225px] lg:h-[174px] h-[160px] bg-[#FF0226] bg-opacity-70 rounded-lg shadow-md">
                    <div className="lg:p-4 p-4">
                        <span className="text-white lg:w-[232px] lg:h-[32px] h-[24px] lg:text-[24px] text-[16px] lg:leading-[32px] leading-6 font-semibold">My Insurance Account</span>
                        <p className="text-white lg:text-[16px] text-[14px] lg:leading-[24px] leading-5 font-normal lg:mt-2 mt-0">
                            Want to know more about our services? Let's talk
                        </p>
                        <Link to="/corporate/contact" className="flex mt-5 w-[90px] h-[35px] bg-black text-white items-center justify-center">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
            <section>
                <div className="lg:p-20 p-4">
                    <div className="w-[560px] lg:h-[188px] h-[150px]">
                        <h2 className="w-[347px] md:w-[450px] lg:w-[500px] lg:h-[90px] h-[64px] lg:text-[40px] text-[24px] lg:leading-[44px] leading-[32px] font-semibold">ABOUT CORONATION INSURANCE GHANA LTD</h2>
                        <p className="w-[347px] md:w-[550px] h-[80px] lg:text-[16px] text-[14px] leading-[20px] lg:font-medium font-normal text-[#56575D] mt-4">
                            Coronation Insurance Group stands as a pinnacle in West Africa,
                            a dynamic multi-line insurance company committed to securing the life, general, and special risks of our valued partners.
                        </p>
                    </div>

                    <div className="flex lg:flex-row md:flex-row flex-col lg:gap-10 gap-4 lg:w-[1280px] lg:h-[254px] md:h-[400px] h-[500px] mt-8">
                        <div className="">
                            <span className="h-[32px] lg:text-[24px] text-[20px] lg:font-semibold font-medium leading-[32px]"
                                dangerouslySetInnerHTML={{
                                    __html: aboutData.sec1_caption_left
                                }}
                            />

                            <p className="lg:w-[600px] w-[347px] h-[180px] lg:h-[168px] lg:text-[16px] text-[12px] font-semibold lg:leading-[24px] leading-5 text-[#56575D]"
                                dangerouslySetInnerHTML={{
                                    __html: aboutData.sec1_body_left
                                }} />
                        </div>
                        <div>
                            <span className="h-[32px] lg:text-[24px] text-[20px] lg:font-semibold font-medium leading-[32px]"
                                dangerouslySetInnerHTML={{
                                    __html: aboutData.sec1_caption_right
                                }} />
                            <p className="lg:w-[600px] w-[347px] h-[200px] lg:h-[168px] lg:text-[16px] text-[12px] font-semibold lg:leading-[24px] leading-5 text-[#56575D]">
                                Our experienced underwriting and strong risk management expertise developed over the last 16 years has prepared us to serve as your lead underwriter. Coronation is not just an insurance provider; we are architects of a unique value proposition.
                                Built upon the pillars of robust corporate governance,
                                a formidable capital base, exceptional customer service, and a winning suite of product solutions, we envision a future where your risks are not just managed but transformed into opportunities for growth and success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <sction>
                <div className="h-[1720px] lg:h-full">
                    <div className="flex lg:flex-row flex-col-reverse w-full h-[488px]">
                        <div className=" flex-1 flex-col lg:h-[400px] px-4 lg:px-20 bg-[#EFEFF0] flex items-start justify-center">
                            <div>
                                <h2 className="lg:text-[32px] text-[24px] leading-[40px] font-semibold"
                                    dangerouslySetInnerHTML={{
                                        __html: aboutData.sec2_caption
                                    }} />
                                <p className="lg:w-[560px] md:h-[100px] lg:text-[16px] text-[12px] leading-[20px] font-medium text-[#56575D] mt-4"
                                    dangerouslySetInnerHTML={{
                                        __html: aboutData.sec2_body

                                    }} />

                            </div>
                        </div>
                        <div className="">
                            <img
                                src={aboutData?.sec2_image ? `https://coronation-cms.interactivedigital.com.gh/${aboutData.sec2_image}` : "assets/purplehome/purplehomebg.png"}
                                className="bg-cover w-full h-full md:h-[400px]"
                                loading="lazy" />
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col w-full h-[488px] ">
                        <div className="">
                            <img
                                src={aboutData?.sec3_image ? `https://coronation-cms.interactivedigital.com.gh/${aboutData.sec3_image}` : "assets/purplehome/purplehomebg.png"}
                                className="bg-cover w-full h-full md:h-[400px]"
                                loading="lazy" />
                        </div>
                        <div className="flex-1 flex-col px-4 lg:h-[400px] lg:px-0 flex items-center justify-center">
                            <div>

                                <h2 className="lg:text-[32px] text-[24px] leading-[40px] font-semibold"
                                    dangerouslySetInnerHTML={{
                                        __html: aboutData.sec3_caption
                                    }}
                                />
                                <p className="lg:w-[560px] lg:text-[16px] text-[12px] leading-[20px] font-medium text-[#56575D] mt-4"
                                    dangerouslySetInnerHTML={{
                                        __html: aboutData.sec3_body

                                    }} />
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col-reverse lg:mt-0 mt-32 bg-[#EFEFF0] w-full lg:h-[400px] h-[600px]">
                        <div className="flex-1 lg:flex-row md:flex-col-reverse flex-col-reverse lg:py-20 py-4 md:mt-12 lg:mt-0 mt-0 lg:px-20 px-4">
                            <div className="">
                                <h2 className="text-[32px] leading-[40px] font-semibold"
                                    dangerouslySetInnerHTML={{
                                        __html: aboutData.sec4_caption
                                    }} />
                                <p className="lg:w-[560px] lg:text-[16px] text-[12px] leading-[20px] font-medium text-[#56575D] mt-4"
                                    dangerouslySetInnerHTML={{
                                        __html: aboutData.sec4_body

                                    }} />
                            </div>
                        </div>
                        <div className="">
                            <img
                                src={aboutData?.sec4_image ? `https://coronation-cms.interactivedigital.com.gh/${aboutData.sec4_image}` : "assets/purplehome/purplehomebg.png"}
                                className="bg-cover lg:w-full md:w-full h-full md:h-[400px]" loading="lazy" />
                        </div>
                    </div>
                </div>
            </sction>

            <section>
                <SlickSlider />
            </section>

            <section>
                <Executive />
            </section>

            <section>
                <div className="w-full h-[248px] bg-black lg:px-20 px-4 items-center lg:py-20 md:py-20 py-4">
                    <div className="flex flex-col">
                        <h3 className="text-white lg:text-[40px] text-[32px] lg:leading-[44px] leading-[40px] font-bold">
                            WE ARE AFFILIATED TO THE GROUP
                        </h3>
                        <div className="flex md:flex-row lg:flex-row flex-col lg:items-center justify-between">
                            <span className="text-white text-[20px] leading-[28px] font-medium">
                                We are affiliated to our mother company in Nigeria
                            </span>
                            <div className="w-[97px] h-[44px] bg-[#FF0226] text-white rounded-md shadow-md text-[16px] leading-[24px] font-semibold flex items-center justify-center">
                                <Link to="https://coronation.ng/institutional/about-us/">About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RedAbout