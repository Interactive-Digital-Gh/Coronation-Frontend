/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import { fetchCms } from '../lib/cmsCache';
import aboutbg from "../assets/purplehome/instbg.webp"
import purplehomebg from "../assets/purplehome/purplehomebg.png"
// import hero1 from "../assets/redhome/redhero1.png"
// import hero2 from "../assets/redhome/redhero2.png"
import bannerbg from "../assets/purplehome/bannerbg.png"
import RedArticles from "../components/RedArticles"


// import heroInsight from "../assets/purplehome/homeInsight1.png"
// import heroIns2 from "../assets/purplehome/heroIns2.jpg"

// import heroInsight3 from "../assets/purplehome/homeInsight3.png"
import { useEffect, useState } from "react"
import { trackBuyInsurance } from '../utils/metaPixel';




const RedHome = () => {
    const [homeData, setHomeData] = useState(null);
    const [showLoader, setShowLoader] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCms('https://coronation-cms.interactivedigital.com.gh/api/home/fetch');
                console.log(data);
                setHomeData(data[0]);
                setShowLoader(false);
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
                <img src={aboutbg} alt="about" className="w-full object-cover bg-cover lg:w-full h-[600px]" fetchpriority="high" />
                <div className="absolute lg:top-[370px] md:top-[430px] top-[370px] lg:left-20 left-4 lg:w-[858px] md:w-[600px] bg-[#FF0226] bg-opacity-70 px-4 w-[347px] lg:h-[152px] md:h-[120px] h-[172px]">
                    <h2 className="lg:text-[56px] text-[32px] lg:font-bold font-semibold lg:leading-[64px] leading-10 text-white">Coronation</h2>
                    <span className="w-full h-[72px] lg:text-[18px] text-[14px] font-normal lg:leading-[24px] leading-5 text-white">
                        We are a leading African financial services partner that helps build financial independence and enduring legacies that lead to sustainable wealth creation in Africa
                    </span>
                </div>
            </div>

            <div className="flex w-full lg:h-[120px] h-[112px] bg-[#141415] items-center justify-between lg:px-20 px-4">
                <div className="lg:text-[32px] text-[24px] font-semibold lg:leading-[40px] leading-8 text-white">
                    My Insurance Account
                </div>
                <div className="flex text-[16px] leading-[30px] font-semibold w-[120px] text-white h-10 bg-[#FF0226] items-center justify-center">
                    <Link to="https://ecoronation.com/" target='_blank' rel='noopener noreferrer' onClick={() => trackBuyInsurance('Corporate Insurance')}>Buy Insurance</Link>
                </div>
            </div>
            <section id="redhome_section3">
                <div className="w-full lg:h-[800px] md:h-[530px] h-[900px] lg:px-20 md:px-6 px-4 small:p-10 lg:py-20 py-8">
                    <div className="lg:flex md:flex lg:gap-20 gap-6  lg:w-[1340px] w-full">
                        <div className="w-[630px] lg:h-[640px] h-[436px]">
                            <img
                                src={homeData?.tile1_image ? `https://coronation-cms.interactivedigital.com.gh/${homeData.tile1_image}` : purplehomebg}
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
                                <div className="w-[111px] h-[44px] bg-[#FF0226] shadow-md text-white flex items-center justify-center rounded-xl lg:mt-8 mt-4">
                                    <Link to="/corporate/about">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-[630px] h-[640px]">
                            <img
                                src={homeData?.tile2_image ? `https://coronation-cms.interactivedigital.com.gh/${homeData.tile2_image}` : purplehomebg}
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
                                    <div className="w-[111px] h-[44px] bg-[#FF0226] shadow-md text-white flex items-center justify-center rounded-xl lg:mt-8 mt-0">
                                        <Link to="https://ecoronation.com/" target='_blank' rel='noopener noreferrer'>
                                            Get a Quote
                                        </Link>
                                    </div>
                                    <div className="w-[111px] h-[44px] bg-[#F7F7F8] shadow-md text-[#141415] flex items-center justify-center rounded-xl lg:mt-8 mt-0">
                                        <Link to="/corporate/about">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section>
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
                                <div className="w-[97px] h-[44px] bg-[#FF0226] text-white rounded-md shadow-md text-[16px] leading-[24px] font-semibold flex items-center justify-center">
                                    <Link>See more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-10 mt-4 lg:pl-3 pl-0 overflow-x-auto">
                            <div className="lg:w-[416px] w-[300px] h-[316px] lg:h-[452px] shadow-lg rounded-md bg-white p-4">
                                <img src={heroInsight} alt="heroins" className="bg-cover w-[276px] h-[160px] lg:w-[384px] lg:h-[280px]" loading="lazy" />
                                <h3 className="lg:w-[384px] w-[276px] lg:h-[32px] h-[24px] lg:text-[24px] text-[16px] lg:leading-[32px] leading-[24px] font-semibold mt-2">
                                    Staying Ahead of the Storm
                                </h3>
                                <p className="lg:w-[384px] w-[276px] lg:h-[48px] h-[48px] lg:text-[18px] text-[14px] lg:leading-[24px] leading-[20px] font-normal text-[#56575D] mt-2">
                                    In today's age of global warming, characterised by a rise in the frequency and severity of flood...
                                </p>
                                <div className="mt-6 text-[14px] text-[#FF0226]">
                                    <Link to="/">Read More</Link>
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
                                <div className="mt-6 text-[14px] text-[#FF0226]">
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
                                <div className="mt-6 text-[14px] text-[#FF0226]">
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
                            <div className="w-[97px] h-[44px] bg-[#FF0226] text-white rounded-md shadow-md text-[16px] leading-[24px] font-semibold flex items-center justify-center">
                                <Link to="/corporate/insights">See more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-[1280px] md:w-full lg:pl-[40px]">
                        <RedArticles />
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full lg:h-[248px] h-[336px] bg-black lg:px-28 px-5 items-center lg:py-20 py-5">
                    <div className="flex flex-col">
                        <h3 className="text-white lg:w-[580px] lg:h-[50px] w-[248px] h-[130px] lg:text-[40px] text-[32px] lg:leading-[44px] leading-[40px] font-bold">
                            We are affiliated to the Group
                        </h3>
                        <div className="flex lg:flex-row flex-col lg:items-center justify-between">
                            <span className="text-white text-[20px] leading-[28px] font-medium">
                                We are affiliated to our mother company in Nigeria
                            </span>
                            <div className="w-[97px] h-[44px] bg-[#FF0226] text-white rounded-md shadow-md text-[16px] leading-[24px] font-semibold flex items-center justify-center mt-8 lg:mt-0">
                                <Link to="https://coronation.ng/institutional/about-us/">About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="relative">
                    <img src={bannerbg} alt="banner" className="w-full bg-cover lg:h-full h-[200px]" loading="lazy" />
                    <div className="absolute lg:top-[48%] top-[50%] lg:left-[7%] left-8 lg:text-[56px] text-[32px] font-semibold leading-[64px] text-white">
                        <Link to="/corporate/products">Get Insured Today</Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default RedHome