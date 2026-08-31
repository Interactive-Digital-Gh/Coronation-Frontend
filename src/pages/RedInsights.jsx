/* eslint-disable react/no-unescaped-entities */
import insightmainbg from "../assets/purpleinsight/insightmain.png"
import { fetchCms } from '../lib/cmsCache';
// import insight3 from "../assets/purpleinsight/insight3.png"
// import insight4 from "../assets/purpleinsight/insight4.png"
import RedArticles from "../components/RedArticles"
import insightbanner from "../assets/purpleinsight/insightbanner.png"
import { Link } from "react-router-dom"
import "./global.css"
import { useEffect, useState } from "react"
const RedInsights = () => {

    const [insightLatestData, setInsightLatestData] = useState([]);
    const [showLoader, setShowLoader] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fetchCardLatestData = async () => {
            try {
                const data = await fetchCms('https://coronation-cms.interactivedigital.com.gh/api/published-blogs/cards/latest-two');
                console.log('purple cardlatest Data:', data);
                setInsightLatestData(data); // Set the entire data array
                // Start 2-second loader timer only after data arrives
                setShowLoader(false);
            } catch (error) {
                console.error('Error fetching card latest data:', error);
            }
        };
        fetchCardLatestData();
    }, []);

    if (!insightLatestData || insightLatestData.length === 0 || showLoader) {
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
                    src={insightmainbg} alt="about"
                    className="w-full bg-cover h-[600px]"
                    loading="lazy" />
                <div className="absolute lg:top-[350px] top-[350px] lg:left-20 left-4 lg:w-[858px] md:w-[600px] h-[152px] ">
                    <h2 className="lg:text-[56px] text-[32px] lg:w-[720px] md:w-[500px] w-[328px] lg:h-[128px] md:h-[100px] h-[120px] font-bold lg:leading-[64px] leading-10 mb-4 md:mb-0 lg:mb-4 text-white">We guarantee the future of the things you care about!</h2>
                    <span className="lg:w-[681px] w-[100px] lg:h-[48px] h-[60px] lg:text-[18px] md:text-[20px] text-[14px] font-normal lg:leading-[24px] leading-5 text-white">
                        Our award winning content provides research and insights that enables<br className="hidden lg:block" /> you navigate Africa's unique challenges.
                    </span>
                </div>
                <div className="glass absolute bg-opacity-70 lg:top-[360px] top-5 lg:right-20 right-5 lg:w-[300px] w-[250px] bg-[#FF0226] lg:h-[174px] h-[160px] rounded-lg shadow-md">
                    <div className="lg:p-4 p-4">
                        <span className="text-white w-[232px] h-[32px] lg:text-[24px] text-[18px] lg:leading-[32px] leading-[24px] font-semibold">My Insurance Account</span>
                        <p className="text-white lg:text-[16px] text-[14px] lg:leading-[24px] leading-5 font-normal mt-2">
                            Want to know more about our services? Let's talk
                        </p>
                        <div className="flex mt-5 w-[111px] h-[35px] bg-black text-white items-center justify-center">
                            <Link to="/corporate/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="lg:p-20 p-4">
                    <div className="w-[1280px] lg:h-[800px] flex flex-col lg:gap-12">
                        <h2 className="w-full h-[44px] lg:text-[40px] text-[24px] font-bold lg:leading-[44px] leading-[32px]">
                            Read all our articles
                        </h2>

                        <div className="w-full lg:h-[708px] md:h-[500px] h-[380px] flex flex-col lg:gap-6 md:gap-10 gap-4">
                            {insightLatestData.slice(0, 2).map((article, index) => (
                                <div key={index} className="w-full lg:h-[342px] h-[200px] flex flex-row">
                                    <div className="lg:flex-1">
                                        <img
                                            src={article?.main_image ? `https://coronation-cms.interactivedigital.com.gh/${article.main_image}` : "assets/purplemotor/motorbg.png"}
                                            className="object-cover rounded-md lg:w-[630px] md:w-[400px] w-[167px] lg:h-[342px] md:h-[220px] h-[170px]"
                                            loading="lazy"
                                            alt={article.caption}
                                        />
                                    </div>
                                    <div className="lg:flex-1 h-[170px] lg:h-[342px] md:h-[220px] w-[167px] flex flex-col gap-2 lg:items-center md:items-center md:justify-center lg:justify-center px-2">
                                        <div className="lg:pl-8 md:pl-64 pl-0 py-2 lg:py-0">
                                            <div className="flex lg:flex-row  md:flex-row flex-col lg:gap-10 md:gap-8">
                                                <h3 className="text-[12px] text-[#888991]">
                                                    {article.category}
                                                </h3>
                                                <ul className="lg:list-disc md:list-disc">
                                                    <li className="text-[12px] text-[#888991]">
                                                        {new Date(article.created_at).toLocaleDateString("en-US", {
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric"
                                                        })}
                                                    </li>
                                                </ul>
                                            </div>
                                            <h2 className="lg:w-[512px] md:w-[400px] w-[160px] h-auto text-left md:text-left"
                                                dangerouslySetInnerHTML={{ __html: article.caption }} />
                                            <span className="hidden lg:flex lg:w-[512px] w-[347px] h-auto text-[#888991] text-[12px] lg:text-[16px] text-center md:text-left"
                                                dangerouslySetInnerHTML={{ __html: article.excerpt }} />

                                            {article.excerpt && article.excerpt.length > 30 && (
                                                <Link to={`/corporate/insights/${article.id}`} className="text-[#FF0226] font-semibold hover:underline mt-4">
                                                    Read More
                                                </Link>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="lg:p-20">
                    <div className="w-[1280px] md:w-full">
                        <RedArticles />
                    </div>
                </div>
            </section>

            <section>
                <div className="relative">
                    <img src={insightbanner} alt="banner" className="w-full lg:h-[284px] h-[120px] bg-cover" />
                    <div className="absolute lg:top-[25%] top-2 left-[7%] lg:text-[56px] text-[24px] font-semibold leading-[64px] text-white">
                        Get Insured Today
                    </div>
                    <div className="bg-[#FF0226] text-white absolute lg:top-[60%] top-16 left-[7%] w-[108px] h-[44px] flex rounded-lg items-center justify-center text-[16px] leading-[24px] font-semibold">
                        <Link to="https://coronation.ng/contact-us/" target='_blank' rel='noopener noreferrer'>Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RedInsights