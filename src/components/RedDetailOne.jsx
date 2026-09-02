/* eslint-disable react/no-unescaped-entities */
import { Link, useParams } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

import { MdOutlineFileDownload } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";

import insightbanner from "../assets/purpleinsight/insightbanner.png"
import { useEffect, useState } from "react";


import DOMPurify from 'dompurify';
import SEO from "./SEO";


const RedDetailOne = () => {

    const { id } = useParams(); // Get the blog id from the URL
    const [articleDetails, setArticleDetails] = useState(null);
    const [showLoader, setShowLoader] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    const [loading, setLoading] = useState(true);

    const [insightLatestData, setInsightLatestData] = useState([]);

    useEffect(() => {
        const fetchCardLatestData = async () => {
            try {
                const response = await fetch('https://coronation-cms.interactivedigital.com.gh/api/published-blogs/cards/latest-two');
                const data = await response.json();
                console.log('purple cardlatest Data:', data);
                setInsightLatestData(data); // Set the entire data array
            } catch (error) {
                console.error('Error fetching card latest data:', error);
            }
        };
        fetchCardLatestData();
    }, []);



    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchArticleDetails = async () => {
            try {
                const response = await fetch(`https://coronation-cms.interactivedigital.com.gh/api/blog/${id}/details`);
                const data = await response.json();
                setArticleDetails(data[0]);
                console.log(data)
                setLoading(false);
                setShowLoader(false);
            } catch (error) {
                console.error('Error fetching article details:', error);
                setLoading(false);
            }
        };

        fetchArticleDetails();
    }, [id]);

    if (loading || showLoader) {
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

    if (!articleDetails) {
        return <div>No details available for this article.</div>;
    }

    const sanitizedCaption = DOMPurify.sanitize(articleDetails.caption, {
        ALLOWED_TAGS: ['h1', 'h2', 'h3', 'p', 'a', 'strong', 'em', 'ul', 'li'],  // Allow specific tags
        ALLOWED_ATTR: ['href', 'target'],  // Allow only necessary attributes, excluding `style`
    });

    const bannerImage = articleDetails?.main_image
        ? `https://coronation-cms.interactivedigital.com.gh/${articleDetails.main_image}`
        : "assets/purplemotor/motorbg.png";

    return (
        <div className="overflow-hidden">
            <SEO
                title="Corporate Insurance Insights | Coronation Insurance Ghana"
                description="Read in-depth corporate insurance articles, business news and expert insights from Coronation Insurance Ghana."
                keywords="corporate insurance article, business insurance insights Ghana"
            />
            <div className="relative">
                <div className="relative w-full h-[300px] md:h-[450px] lg:h-[600px] overflow-hidden bg-black">
                    {/* Blurred backdrop fills the space around the uncropped image */}
                    <img
                        src={bannerImage}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-70"
                        loading="lazy" />
                    <img
                        src={bannerImage}
                        alt="about"
                        className="relative w-full h-full object-contain"
                        loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20"></div>

                {/* Back — glass pill */}
                <Link
                    to="/corporate/insights"
                    className="absolute top-5 lg:left-20 left-4 inline-flex items-center gap-1.5 backdrop-blur-md bg-white/15 border border-white/30 text-white text-sm font-medium rounded-full pl-3 pr-4 py-2 shadow-md hover:bg-white/25 transition-colors duration-300"
                >
                    <IoIosArrowBack /> Back
                </Link>

                {/* Download — glass pill (only when the article has a PDF) */}
                {articleDetails?.pdf_file && (
                    <a
                        href={`https://coronation-cms.interactivedigital.com.gh/${articleDetails.pdf_file}`}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-5 lg:right-20 right-4 inline-flex items-center gap-2 backdrop-blur-md bg-white/15 border border-white/30 text-white text-sm font-medium rounded-full px-4 py-2 shadow-md hover:bg-white/25 transition-colors duration-300"
                    >
                        <MdOutlineFileDownload size={20} />
                        Download
                    </a>
                )}

                {/* Title — frosted glass panel */}
                <div className="absolute inset-x-0 bottom-0 lg:mx-20 mx-4 mb-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/25 lg:p-8 p-4 shadow-lg">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                        {articleDetails.category && (
                            <span
                                className="backdrop-blur-md bg-white/15 border border-white/30 text-white text-[11px] font-semibold tracking-wider uppercase rounded-full px-3 py-1.5"
                                dangerouslySetInnerHTML={{ __html: articleDetails.category }}
                            />
                        )}
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF0226]" />
                            <span className="text-white/80 text-[12px] font-medium">
                                {new Date(articleDetails.created_at).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                })}
                            </span>
                        </span>
                    </div>
                    <div
                        className="lg:max-w-[900px] lg:text-[36px] md:text-[28px] text-[18px] font-bold leading-tight text-white line-clamp-3 lg:line-clamp-none"
                        dangerouslySetInnerHTML={{ __html: sanitizedCaption }}
                    />
                </div>
            </div>

            <section className="bg-white">
                <div className="max-w-7xl mx-auto lg:p-20 p-4">
                    <div className="flex lg:flex-row flex-col gap-10">
                        <div className="lg:flex-1 flex flex-col gap-4">
                            <div className="flex flex-col gap-6">
                                <div className="font-normal text-[16px] leading-[1.6] text-[#56575D] article-body"
                                    dangerouslySetInnerHTML={{ __html: articleDetails.body }} />
                            </div>
                            {/* <div>
                                <img src={storm} alt="about" className="lg:w-[803px] h-[320px] bg-cover" loading="lazy" />
                            </div> */}
                        </div>
                        <div className="lg:w-[413px] flex flex-col gap-10">
                            <div className="w-full p-6 bg-gradient-to-br from-[#F7F7F8] to-[#FDE9EC] border border-[#FF0226]/20 flex flex-col gap-4 rounded-2xl shadow-sm">
                                <h3 className="text-[16px] font-normal leading-[24px] text-[#56575D]">Connect with us</h3>
                                <ul className="flex gap-4">
                                    <a href="https://www.facebook.com/coronationghana" target="_blank" rel="noopener noreferrer"><li className="text-white lg:w-[48px] w-[40px] lg:h-[48px] h-[40px] bg-[#FF0226] flex items-center justify-center rounded-full shadow-lg shadow-[#FF0226]/30 transition-transform duration-300 hover:scale-110"><FaFacebook size={24} /></li></a>
                                    <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHMuoEM6XPSiAAAAZrfHLGYn-DS8LzqjPiWMDWe82Qq14Hv-bXom2vIuCF4s-Cv_HTCQYFWyc9hqx5_P8m3gHSy5t2V_Vvx6Lkk-sp6YHY4YPY--ALn61dPZffzByp9eNypqOw=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F76524378%2Fadmin%2Fpage-posts%2Fpublished%2F" target="_blank" rel="noopener noreferrer"><li className="text-white lg:w-[48px] w-[40px] lg:h-[48px] h-[40px] bg-[#FF0226] flex items-center justify-center rounded-full shadow-lg shadow-[#FF0226]/30 transition-transform duration-300 hover:scale-110"><FaLinkedin size={24} /></li></a>
                                    <a href="https://www.instagram.com/coronationgh/" target="_blank" rel="noopener noreferrer"><li className="text-white lg:w-[48px] w-[40px] lg:h-[48px] h-[40px] bg-[#FF0226] flex items-center justify-center rounded-full shadow-lg shadow-[#FF0226]/30 transition-transform duration-300 hover:scale-110"><FaInstagram size={24} /></li></a>
                                    <a href="https://x.com/coronationghana" target="_blank" rel="noopener noreferrer"><li className="text-white lg:w-[48px] w-[40px] lg:h-[48px] h-[40px] bg-[#FF0226] flex items-center justify-center rounded-full shadow-lg shadow-[#FF0226]/30 transition-transform duration-300 hover:scale-110"><FaTwitter size={24} /></li></a>
                                </ul>
                            </div>

                            <div className="w-full flex flex-col gap-5">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-[3px] rounded-full bg-[#FF0226]" />
                                    <span className="text-[#FF0226] text-xs font-semibold tracking-widest uppercase">Latest Insights</span>
                                </div>
                                {insightLatestData.filter((article) => String(article.id) !== String(id)).slice(0, 2).map((article, index) => (
                                    <Link
                                        to={`/corporate/insights/${article.id}`}
                                        key={index}
                                        className="group relative block h-[240px] w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#FF0226]/40 transition-all duration-500 hover:-translate-y-1.5"
                                    >
                                        <img
                                            src={article?.main_image ? `https://coronation-cms.interactivedigital.com.gh/${article.main_image}` : "assets/purplemotor/motorbg.png"}
                                            alt="Insight article"
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
                                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20 group-hover:ring-2 group-hover:ring-[#FF0226]/70 transition-all duration-500" />
                                        {article.category && (
                                            <span className="absolute top-3 left-3 backdrop-blur-md bg-white/15 border border-white/30 text-white text-[10px] font-semibold tracking-wider uppercase rounded-full px-2.5 py-1 shadow-md">
                                                {article.category}
                                            </span>
                                        )}
                                        <div className="absolute inset-x-0 bottom-0 m-2.5 rounded-xl backdrop-blur-xl bg-white/10 border border-white/25 p-3 transition-colors duration-500 group-hover:bg-white/20">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF0226]" />
                                                <span className="text-white/80 text-[11px] font-medium">
                                                    {new Date(article.created_at).toLocaleDateString("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric"
                                                    })}
                                                </span>
                                            </div>
                                            <h3 className="text-white text-[15px] font-semibold leading-snug line-clamp-2"
                                                dangerouslySetInnerHTML={{ __html: article.caption }} />
                                            <span className="mt-1.5 inline-flex items-center gap-1.5 text-[#FF9FAC] text-[13px] font-semibold">
                                                Read More <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="relative">
                    <img src={insightbanner} alt="banner" className="w-full lg:h-[284px] h-[120px] bg-cover" />
                    <div className="absolute lg:top-[25%] top-2 left-[7%] lg:text-[56px] text-[24px] font-semibold leading-[64px] text-white">
                        Get Insured Today
                    </div>
                    <div className="bg-white absolute lg:top-[60%] top-16 left-[7%] w-[108px] h-[44px] flex rounded-lg items-center justify-center text-[16px] leading-[24px] font-semibold">
                        <Link>Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RedDetailOne