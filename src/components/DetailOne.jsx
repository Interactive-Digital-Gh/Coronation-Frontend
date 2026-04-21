/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unescaped-entities */
import { Link, useParams } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

import { MdOutlineFileDownload } from "react-icons/md";


// import Insight13 from "../assets/purpleinsight/insight13.png"
// import Insight6 from "../assets/purpleinsight/insight6.png"
// import strate from "../assets/purpleinsight/strate.png"

import insightbanner from "../assets/purpleinsight/insightbanner.png"
import { useEffect, useState } from "react";

// import ReactMarkdown from 'react-markdown';
// import rehypeSanitize from 'rehype-sanitize';
import DOMPurify from 'dompurify';




const DetailOne = () => {

    const { id } = useParams(); // Get the blog id from the URL
    const [articleDetails, setArticleDetails] = useState(null);
    const [loading, setLoading] = useState(true);

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
            } catch (error) {
                console.error('Error fetching card latest data:', error);
            }
        };
        fetchCardLatestData();
    }, []);

    useEffect(() => {
        const fetchArticleDetails = async () => {
            try {
                const response = await fetch(`https://coronation-cms.interactivedigital.com.gh/api/blog/${id}/details`);
                const data = await response.json();
                setArticleDetails(data[0]);
                console.log(data)
                setLoading(false);
                // Start 2-second loader timer only after data arrives
                setTimeout(() => {
                    setFadeOut(true); // start fade
                    setTimeout(() => setShowLoader(false), 500); // hide after fade
                }, 2000);
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
                <div className="w-16 h-16 border-4 border-[#B580D1] border-t-transparent rounded-full animate-spin"></div>

                <p className="mt-4 text-[#B580D1] font-semibold text-lg animate-pulse">
                    Loading content...
                </p>
            </div>
        );
    }

    if (!articleDetails) {
        return <div>No details available for this article.</div>;
    }

    // Sanitize the content to remove the `style` attributes
    const sanitizedCaption = DOMPurify.sanitize(articleDetails.caption, {
        ALLOWED_TAGS: ['h1', 'h2', 'h3', 'p', 'a', 'strong', 'em', 'ul', 'li'],  // Allow specific tags
        ALLOWED_ATTR: ['href', 'target'],  // Allow only necessary attributes, excluding `style`
    });

    return (
        <div className="overflow-hidden">
            <div className="relative">
                <img
                    src={articleDetails?.main_image ? `https://coronation-cms.interactivedigital.com.gh/${articleDetails.main_image}` : "assets/purplemotor/motorbg.png"}
                    alt="about"
                    className="w-full h-[300px] md:h-[450px] lg:h-[600px] object-cover bg-center"
                    loading="lazy" />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-[20px] lg:left-20 left-4 right-4 md:w-auto">
                    <div className="text-white flex items-center gap-1 mb-2"><IoIosArrowBack /><Link to="/purpleinsights">Back</Link></div>
                    <div
                        className="lg:max-w-[800px] lg:text-[40px] text-[20px] font-bold leading-tight text-[#ffffff]"
                        dangerouslySetInnerHTML={{ __html: sanitizedCaption }}
                    />

                    <div className="flex gap-8 mt-3">
                        <h3 className="text-[12px] text-[#888991]"
                            dangerouslySetInnerHTML={{ __html: articleDetails.category }} />
                        <ul className="list-disc">
                            <li className="text-[12px] text-[#888991]">
                                {new Date(articleDetails.created_at).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                })}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="absolute lg:top-[50px] top-0 lg:right-20 md:right-[82%] right-[16px] rounded-lg shadow-md">

                    <a href={articleDetails?.pdf_file ? `https://coronation-cms.interactivedigital.com.gh/${articleDetails.pdf_file}` : ""}
                        download
                        target="_blank"
                        className="flex mt-5 w-[120px] h-[35px] text-[12px] gap-2 bg-white text-black rounded-lg items-center justify-center">
                        <MdOutlineFileDownload size={20} />
                        Download
                    </a>

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
                            <div className="w-full p-6 bg-[#F7F7F8] flex flex-col gap-4 rounded-md">
                                <h3 className="text-[16px] font-normal leading-[24px] text-[#56575D]">Connect with us</h3>
                                <ul className="flex gap-4">
                                    <a href="https://www.facebook.com/coronationghana" target="_blank" rel="noopener noreferrer"><li className="text-white lg:w-[48px] w-[40px] lg:h-[48px] h-[40px] bg-[#B580D1] flex items-center justify-center rounded-full"><FaFacebook size={24} /></li></a>
                                    <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHMuoEM6XPSiAAAAZrfHLGYn-DS8LzqjPiWMDWe82Qq14Hv-bXom2vIuCF4s-Cv_HTCQYFWyc9hqx5_P8m3gHSy5t2V_Vvx6Lkk-sp6YHY4YPY--ALn61dPZffzByp9eNypqOw=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F76524378%2Fadmin%2Fpage-posts%2Fpublished%2F" target="_blank" rel="noopener noreferrer"><li className="text-white lg:w-[48px] w-[40px] lg:h-[48px] h-[40px] bg-[#B580D1] flex items-center justify-center rounded-full"><FaLinkedin size={24} /></li></a>
                                    <a href="https://www.instagram.com/coronationgh/" target="_blank" rel="noopener noreferrer"><li className="text-white lg:w-[48px] w-[40px] lg:h-[48px] h-[40px] bg-[#B580D1] flex items-center justify-center rounded-full"><FaInstagram size={24} /></li></a>
                                    <a href="https://x.com/coronationghana" target="_blank" rel="noopener noreferrer"><li className="text-white lg:w-[48px] w-[40px] lg:h-[48px] h-[40px] bg-[#B580D1] flex items-center justify-center rounded-full"><FaTwitter size={24} /></li></a>
                                </ul>
                            </div>

                            <div className="w-full flex flex-col gap-5 overflow-x-auto lg:overflow-x-visible">
                                {insightLatestData.slice(0, 2).map((article, index) => (
                                    <div key={index} className="w-full bg-[#f4f4f2] max-w-sm flex-shrink-0">
                                        <img
                                            src={article?.main_image ? `https://coronation-cms.interactivedigital.com.gh/${article.main_image}` : "assets/purplemotor/motorbg.png"}
                                            alt="heading"
                                            className="w-full h-[200px] object-cover rounded-lg"
                                        />
                                        <div className="p-4 h-auto">
                                            <div className="text-sm text-[#999881] flex gap-8 mb-2">
                                                <h3 className="text-[12px] text-[#888991]">
                                                    {article.category}
                                                </h3>
                                                <span className="text-[12px]">
                                                    {new Date(article.created_at).toLocaleDateString("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric"
                                                    })}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2 text-gray-800"
                                                dangerouslySetInnerHTML={{ __html: article.caption }} />
                                            <p className="text-gray-600 text-sm mb-4"
                                                dangerouslySetInnerHTML={{ __html: article.excerpt }} />
                                            {/* <Link to={`/purpleinsights/${article.id}`} className="text-[#B580D1] font-semibold">
                                                Read More
                                            </Link> */}
                                        </div>
                                    </div>
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

export default DetailOne