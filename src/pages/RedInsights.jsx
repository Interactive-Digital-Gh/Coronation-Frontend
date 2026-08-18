/* eslint-disable react/no-unescaped-entities */
import insightmainbg from "../assets/purpleinsight/insightmain.png"
// import insight3 from "../assets/purpleinsight/insight3.png"
// import insight4 from "../assets/purpleinsight/insight4.png"
import RedArticles from "../components/RedArticles"
import insightbanner from "../assets/purpleinsight/insightbanner.png"
import { Link } from "react-router-dom"
import { HiArrowRight } from "react-icons/hi"
import "./global.css"
import { useEffect, useState } from "react"
const RedInsights = () => {

    const [insightLatestData, setInsightLatestData] = useState([]);
    const [showLoader, setShowLoader] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fetchCardLatestData = async () => {
            try {
                const response = await fetch('https://coronation-cms.interactivedigital.com.gh/api/published-blogs/cards/latest-two');
                const data = await response.json();
                console.log('purple cardlatest Data:', data);
                setInsightLatestData(data); // Set the entire data array
                // Start 2-second loader timer only after data arrives
                setTimeout(() => {
                    setFadeOut(true); // start fade
                    setTimeout(() => setShowLoader(false), 500); // hide after fade
                }, 2000);
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
                            <Link to="/corporate/contact-us">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="lg:px-20 lg:pt-16 px-4 pt-8">
                    <div className="w-full flex flex-col gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="w-10 h-[3px] rounded-full bg-[#FF0226]" />
                                <span className="text-[#FF0226] text-sm font-semibold tracking-widest uppercase">Latest Insights</span>
                            </div>
                            <h2 className="lg:text-[40px] text-[24px] font-bold lg:leading-[44px] leading-[32px]">
                                Read all our articles
                            </h2>
                        </div>

                        {/* Featured glass cards — two most recent articles */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {insightLatestData.slice(0, 2).map((article, index) => (
                                <Link
                                    to={`/corporate/insights/${article.id}`}
                                    key={index}
                                    className="group relative block lg:h-[440px] md:h-[400px] h-[340px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#FF0226]/40 transition-all duration-500 hover:-translate-y-2"
                                >
                                    <img
                                        src={article?.main_image ? `https://coronation-cms.interactivedigital.com.gh/${article.main_image}` : "assets/purplemotor/motorbg.png"}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        loading="lazy"
                                        alt="Insight article"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20 group-hover:ring-2 group-hover:ring-[#FF0226]/70 transition-all duration-500" />

                                    {article.category && (
                                        <span className="absolute top-5 left-5 backdrop-blur-md bg-white/15 border border-white/30 text-white text-[11px] font-semibold tracking-wider uppercase rounded-full px-3 py-1.5 shadow-md">
                                            {article.category}
                                        </span>
                                    )}

                                    <div className="absolute inset-x-0 bottom-0 m-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/25 lg:p-6 p-4 shadow-lg transition-colors duration-500 group-hover:bg-white/20">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF0226]" />
                                            <span className="text-white/80 text-[12px] font-medium">
                                                {new Date(article.created_at).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric"
                                                })}
                                            </span>
                                        </div>
                                        <h2 className="text-white lg:text-[24px] text-[18px] font-semibold leading-snug line-clamp-2 mb-2"
                                            dangerouslySetInnerHTML={{ __html: article.caption }} />
                                        <span className="hidden md:line-clamp-2 text-white/75 lg:text-[15px] text-[13px] leading-relaxed mb-3"
                                            dangerouslySetInnerHTML={{ __html: article.excerpt }} />
                                        <span className="inline-flex items-center gap-2 text-[#FF9FAC] text-sm font-semibold">
                                            Read More
                                            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="lg:px-20 lg:py-16 px-4 py-8">
                    <div className="w-full">
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