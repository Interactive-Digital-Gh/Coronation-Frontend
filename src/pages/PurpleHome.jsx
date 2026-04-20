/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
// import homebg from "../assets/purplehome/purplehomebg.png"
// import hero1 from "../assets/purplehome/hero1.png"
// import hero2 from "../assets/purplehome/hero2.png"
import bannerbg from "../assets/purplehome/bannerbg.png"


// import heroInsight from "../assets/purplehome/homeInsight1.png"
// import heroIns2 from "../assets/purplehome/heroIns2.jpg"
// import heroInsight3 from "../assets/purplehome/homeInsight3.png"
import { useEffect, useState } from "react"
import Articles from "../components/Articles"




const PurpleHome = () => {
    const [homeData, setHomeData] = useState(null);
    const [showLoader, setShowLoader] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://coronation-cms.interactivedigital.com.gh/api/home/fetch');
                const data = await response.json();
                console.log(data);
                setHomeData(data[0]);

                // Start 2-second loader timer only after data arrives
                setTimeout(() => {
                    setFadeOut(true); // start fade
                    setTimeout(() => setShowLoader(false), 500); // hide after fade
                }, 2000);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    if (!homeData || showLoader) {
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
            <div id="pruplehome_section1" className="w-full flex flex-col-reverse lg:flex-row">
                <div className="flex flex-1 bg-black items-center lg:pl-20 pl-4 md:pl-6">
                    <div className="w-[545px] lg:h-[228px] md:h-[188px] h-[180px]">
                        <h1
                            className="text-white lg:w-[522px] w-[266px] lg:h-[128px] md:w-[500px] h-[80px] lg:text-[56px] md:text-[40px] text-[32px] lg:leading-[64px] leading-[40px] font-semibold"
                            dangerouslySetInnerHTML={{ __html: homeData.header_caption }}
                        />

                        <p
                            className="lg:w-[543px] md:w-[400px] w-[319px] text-white lg:h-[84px] h-[80px] text-opacity-80 lg:text-[20px] text-[14px] font-medium lg:leading-[28px] leading-[20px] mt-2"
                            dangerouslySetInnerHTML={{ __html: homeData.header_body }}
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <img
                        src={homeData?.header_image ? `https://coronation-cms.interactivedigital.com.gh/${homeData.header_image}` : "assets/purplehome/purplehomebg.png"}
                        alt="home"
                        className="w-full lg:h-[540px] md:h-[450px] h-[458px] bg-cover"
                        loading="lazy"
                    />

                </div>
            </div>

            <div id="pruplehome_section2" className="flex w-full lg:h-[120px] h-[112px] bg-[#B580D1] items-center justify-between lg:px-20 px-4 md:px-6">
                <div className="lg:text-[32px] text-[24px] font-semibold lg:leading-[40px] leading-8 text-white">
                    My Insurance Account
                </div>
                <div className="flex text-[16px] leading-[30px] font-semibold w-[120px] h-10 bg-white rounded-lg items-center justify-center">
                    <Link to="https://ecoronation.com/" target='_blank' rel='noopener noreferrer' >Request & Pay</Link>
                </div>
            </div>
            <section id="pruplehome_section3">
                <div className="w-full lg:h-[800px] md:h-[530px] h-[900px] lg:px-20 md:px-6 px-4 small:p-10 lg:py-20 py-8">
                    <div className="lg:flex md:flex lg:gap-20 gap-6  lg:w-[1340px] w-full">
                        <div className="w-[630px] lg:h-[640px] h-[436px]">
                            <img
                                src={homeData?.tile1_image ? `https://coronation-cms.interactivedigital.com.gh/${homeData.tile1_image}` : "assets/purplehome/purplehomebg.png"}
                                alt="hero"
                                className="w-[347px] h-[220px] lg:w-full lg:h-[420px] rounded-lg object-cover bg-cover"
                                loading="lazy" />
                            <div>
                                <h3 className="w-full lg:h-[40px] md:h-[32px] h-[28px] font-semibold lg:text-[32px] text-[20px] lg:leading-[40px] md:leading-[24px] leading-[28px] mt-2"
                                    dangerouslySetInnerHTML={{
                                        __html: homeData.tile1_caption
                                    }}
                                />
                                <p className="lg:w-full w-[347px] lg:h-[72px] h-[80px] font-normal lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] text-[#56575d] lg:mt-6 md:mt-4 mt-2"
                                    dangerouslySetInnerHTML={{
                                        __html: homeData.tile1_text

                                    }}
                                />
                                <div className="w-[111px] h-[44px] bg-[#B580D1] shadow-md text-white flex items-center justify-center rounded-xl lg:mt-8 mt-4">
                                    <Link to={homeData?.tile1_btn_link || "/purpleabout"}>
                                        {homeData?.tile1_btn_text || "Learn More"}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-[630px] h-[640px]">
                            <img
                                src={homeData?.tile2_image ? `https://coronation-cms.interactivedigital.com.gh/${homeData.tile2_image}` : "assets/purplehome/purplehomebg.png"}
                                alt="hero"
                                className="w-[347px] h-[220px] lg:w-full lg:h-[420px] rounded-lg object-cover bg-cover"
                                loading="lazy" />
                            <div>
                                <h3 className="w-full lg:h-[40px] md:h-[32px] h-[28px] font-semibold lg:text-[32px] text-[20px] lg:leading-[40px] leading-[28px] mt-2"
                                    dangerouslySetInnerHTML={{
                                        __html: homeData.tile2_caption
                                    }}
                                />
                                <p className="lg:w-full w-[347px] lg:h-[72px] md:h-[100px] h-[80px] font-normal lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] text-[#56575d] lg:mt-6 md:mt-4 mt-2"
                                    dangerouslySetInnerHTML={{
                                        __html: homeData.tile2_text

                                    }}
                                />
                                <div className="flex gap-6">
                                    <div className="w-[111px] h-[44px] bg-[#B580D1] shadow-md text-white flex items-center justify-center rounded-xl lg:mt-8 mt-0">
                                        <Link to={homeData?.tile2_btn_link || "/"} target='_blank' rel='noopener noreferrer'>
                                            {homeData?.tile2_btn_text || "Make a Claim"}
                                        </Link>
                                    </div>
                                    <div className="w-[111px] h-[44px] bg-[#F7F7F8] shadow-md text-[#141415] flex items-center justify-center rounded-xl lg:mt-8 mt-0">
                                        <Link to="/purpleabout">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section id="purplehome_section4">
                <div className="w-full lg:h-[700px] h-[500px] bg-[#F4F5F7] lg:p-20 p-4">
                    <div className="flex flex-col w-full h-[588px]">
                        <div className="w-full lg:h-[88px] h-[100px]">
                            <h3 className="lg:text-[40px] text-[24px] font-semibold lg:leading-[44px] leading-[32px] text-[#141415]">
                                Our Insights
                            </h3>
                            <div className="lg:flex flex-col lg:flex-row items-center justify-between ">
                                <span className="lg:text-[20px] text-[14px] lg:font-medium font-normal lg:leading-[28px] leading-[20px] text-[#888991]">
                                    Hear the latest trends from our industry experts
                                </span>
                                <div className="w-[97px] h-[44px] bg-[#B580D1] rounded-md shadow-md text-[16px] leading-[24px] font-semibold flex items-center justify-center">
                                    <Link to="/purpleinsights">See more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:gap-10 gap-10 mt-4 lg:pl-3 pl-0 overflow-x-auto">
                            <div className="lg:w-[416px] w-[300px] h-[316px] lg:h-[452px] shadow-lg rounded-md bg-white p-4">
                                <img src={heroInsight} alt="heroins" className="bg-cover w-[276px] h-[160px] lg:w-[384px] lg:h-[280px]" loading="lazy" />
                                <h3 className="lg:w-[384px] w-[276px] lg:h-[32px] h-[24px] lg:text-[24px] text-[16px] lg:leading-[32px] leading-[24px] font-semibold mt-2">
                                    Staying Ahead of the Storm
                                </h3>
                                <p className="lg:w-[384px] w-[276px] lg:h-[48px] h-[48px] lg:text-[18px] text-[14px] lg:leading-[24px] leading-[20px] font-normal text-[#56575D] mt-2">
                                    In today's age of global warming, characterised by a rise in the frequency and severity of flood...
                                </p>
                                <div className="mt-6 text-[14px] text-[#B580D1]">
                                    <Link to="/purpledetailone">Read More</Link>
                                </div>
                            </div>
                            <div className="lg:w-[416px] w-[300px] h-[316px] lg:h-[452px] shadow-lg rounded-md bg-white p-4">
                                <img src={heroIns2} alt="heroins" className="bg-cover rounded-md w-[276px] h-[160px] lg:w-[384px] lg:h-[280px]" loading="lazy" />
                                <h3 className="lg:w-[384px] w-[276px] lg:h-[32px] h-[24px] lg:text-[22px] text-[16px] lg:leading-[32px] leading-[20px] font-semibold mt-2">
                                    Revolutionising Customer Experience
                                </h3>
                                <p className="lg:w-[384px] w-[276px] lg:h-[48px] h-[48px] lg:text-[18px] text-[14px] lg:leading-[24px] leading-5 font-normal text-[#56575D] mt-2">
                                    Regardless of industry or sector, almost all businesses today are seeking to digitalise their...
                                </p>
                                <div className="mt-6 text-[14px] text-[#B580D1]">
                                    <Link to="/">Read More</Link>
                                </div>
                            </div>
                            <div className="lg:w-[416px] w-[300px] h-[316px] lg:h-[452px] shadow-lg rounded-md bg-white p-4">
                                <img src={heroInsight3} alt="heroins" className="bg-cover w-[276px] h-[160px] lg:w-[384px] lg:h-[280px]" loading="lazy" />
                                <h3 className="lg:w-[384px] w-[276px] lg:h-[32px] h-[24px] lg:text-[24px] text-[16px] lg:leading-[32px] leading-5 font-semibold mt-2">
                                    A Strategy For Resilience
                                </h3>
                                <p className="lg:w-[384px] w-[276px] lg:h-[48px] lg:text-[18px] text-[14px] lg:leading-[24px] leading-5 font-normal text-[#56575D] mt-2">
                                    The Role of Insurance in Your Retail Business's Long-Term Plan
                                </p>
                                <div className="mt-6 text-[14px] text-[#B580D1]">
                                    <Link to="/">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section>
                <div className="lg:p-20">
                    <div className="w-full lg:h-[88px] h-[100px]">
                        <h3 className="lg:text-[40px] text-[24px] font-semibold lg:leading-[44px] leading-[32px] text-[#141415]">
                            Our Insights
                        </h3>
                        <div className="lg:flex flex-col lg:flex-row items-center justify-between ">
                            <span className="lg:text-[20px] text-[14px] lg:font-medium font-normal lg:leading-[28px] leading-[20px] text-[#888991]">
                                Hear the latest trends from our industry experts
                            </span>
                            <div className="w-[97px] h-[44px] bg-[#B580D1] rounded-md shadow-md text-[16px] leading-[24px] font-semibold flex items-center justify-center">
                                <Link to="/purpleinsights">See more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-[1280px] md:w-full lg:pl-[40px]">
                        <Articles />
                    </div>
                </div>
            </section>

            <section id="purplehome_section5">
                <div className="w-full lg:h-[248px] h-[336px] bg-black lg:px-28 px-5 items-center lg:py-20 md:py-32 py-5">
                    <div className="flex flex-col">
                        <h3 className="text-white lg:w-[700px] md:w-[550px] lg:h-[50px] md:h-[60px] w-[248px] h-[130px] lg:text-[40px] text-[32px] lg:leading-[44px] leading-[40px] font-bold">
                            WE ARE AFFILIATED TO THE GROUP
                        </h3>
                        <div className="flex md:flex-row lg:flex-row flex-col lg:items-center justify-between">
                            <span className="text-white text-[20px] leading-[28px] font-medium">
                                We are affiliated to our mother company in Nigeria
                            </span>
                            <div className="w-[97px] h-[44px] bg-white rounded-md shadow-md text-[16px] leading-[24px] font-semibold flex items-center justify-center mt-8 lg:mt-0 md:mt-0">
                                <Link to="https://coronation.ng/institutional/about-us/" target='_blank' rel='noopener noreferrer'>About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="purplehome_section6">
                <div className="relative">
                    <img src={bannerbg} alt="banner" className="w-full bg-cover lg:h-full h-[200px]" />
                    <div className="absolute lg:top-[48%] top-[50%] lg:left-[7%] left-8 lg:text-[56px] text-[32px] font-semibold leading-[64px] text-white">
                        Get Insured Today
                    </div>
                </div>
            </section>

        </div>
    )
}

export default PurpleHome