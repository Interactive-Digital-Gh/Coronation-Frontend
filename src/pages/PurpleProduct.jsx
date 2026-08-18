/* eslint-disable react/no-unescaped-entities */
import product5 from "../assets/purpleproduct/product5.png"

import productmob from "../assets/purpleproduct/productmob.png"



import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import SEO from "../components/SEO"


const PurpleProduct = () => {
    const [productData, setProductData] = useState(null);
    const [showLoader, setShowLoader] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);


    useEffect(() => {
        const fetchproductData = async () => {
            try {
                const response = await fetch('https://coronation-cms.interactivedigital.com.gh/api/pns/fetch');
                const data = await response.json();
                console.log('purple product Data:', data);
                setProductData(data[0]);
                // Start 2-second loader timer only after data arrives
                setTimeout(() => {
                    setFadeOut(true); // start fade
                    setTimeout(() => setShowLoader(false), 500); // hide after fade
                }, 2000);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };
        fetchproductData();
    }, []);

    // Check if either aboutData or bodData is still loading
    if (!productData || showLoader) {
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
            <SEO
                title="Insurance Products & Solutions | Coronation Ghana"
                description="Explore Coronation's full range of insurance products – motor, travel, home, marine, and business protection. Find the right cover for you."
                keywords="insurance products Ghana, motor insurance, travel insurance, home insurance, marine insurance, business insurance Ghana"
            />
            <div className="relative">
                <img
                    src={productData?.header_image ? `https://coronation-cms.interactivedigital.com.gh/${productData.header_image}` : "https://loremflickr.com/1200/600/insurance"}
                    alt="about"
                    className="hidden lg:block w-full object-cover h-auto bg-cover lg:w-full"
                    loading="lazy" />
                <img
                    src={productmob} alt="about"
                    className="lg:hidden block bg-cover w-full md:h-[800px]"
                    loading="lazy" />
                <div className="absolute lg:top-1/2 lg:-translate-y-1/2 md:top-[500px] top-[470px] lg:left-20 left-4 lg:w-[858px] md:w-[600px] w-[347px] lg:h-[152px] h-[172px]">
                    <h2 className="lg:text-[56px] md:text-[40px] text-[32px] lg:font-bold font-semibold lg:leading-[64px] leading-10 text-white"
                        dangerouslySetInnerHTML={{ __html: productData.header_caption }} />
                    <span className="w-full h-[72px] lg:text-[18px] md:text-[24px] text-[14px] font-normal lg:leading-[24px] leading-5 text-white"
                        dangerouslySetInnerHTML={{ __html: productData.header_body }} />
                </div>
                <div className="absolute lg:top-1/2 lg:-translate-y-1/2 top-0 lg:right-20 right-0 lg:w-[300px] w-[225px] lg:h-[174px] h-[160px] bg-black bg-opacity-40 rounded-lg shadow-md">
                    <div className="lg:p-4 p-4">
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
                <div className="lg:p-20 p-6 bg-black">
                    <div className="w-full lg:h-[748px]">
                        <div className="hidden md:block lg:block md:mb-4 lg:mb-0 mb-0">
                            <h2 className="text-[48px] font-bold leading-[56px] text-white w-[790px] h-[112px]">
                                Looking for The <br />Right Insurance Cover for You?
                            </h2>
                            <span className="text-[16px] font-normal leading-[24px] text-[#888991] w-[846px] h-[48px]">
                                Life doesn't wait, neither should your insurance coverage. Coronation Insurance Ghana Ltd offers<br /> comprehensive plans for car, home,
                                business, and life. One call, and Total protection. Get a quote now!
                            </span>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-6 lg:mt-10 md:px-40 lg:px-0 px-0 w-full lg:h-[524px] h-[1204px]">
                            <div className="w-[436px] h-full">
                                <img
                                    src={productData?.motor_image ? `https://coronation-cms.interactivedigital.com.gh/${productData.motor_image}` : "https://loremflickr.com/600/400/car"}
                                    alt="pic"
                                    className="lg:w-full w-[343px] lg:h-[295px] h-[220px] rounded-[12px] object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="w-full lg:h-[204px] h-[150px] mt-4">
                                    <h2 className="w-[394px] h-[32px] lg:text-[32px] text-[20px] lg:leading-[32px] leading-[28px] font-semibold text-white"
                                        dangerouslySetInnerHTML={{ __html: productData.motor_caption }} />

                                    <p className="lg:w-[370px] w-[347px] lg:h-[120px] h-[100px] lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-normal text-[#888991] lg:mt-4 mt-0"
                                        dangerouslySetInnerHTML={{ __html: productData.motor_body }} />
                                    <div className="text-[#B580D1] font-medium text-[14px] leading-[20px]">
                                        <Link to="/personal-insurance/motor">Read More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[436px] h-full">
                                <img
                                    src={productData?.travel_image ? `https://coronation-cms.interactivedigital.com.gh/${productData.travel_image}` : "https://loremflickr.com/600/400/travel"}
                                    alt="pic"
                                    className="lg:w-full w-[343px] lg:h-[295px] h-[220px] object-cover rounded-[12px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="w-full lg:h-[204px] h-[150px] mt-4">
                                    <h2 className="w-[394px] h-[32px] lg:text-[32px] text-[20px] lg:leading-[32px] leading-[28px] font-semibold text-white"
                                        dangerouslySetInnerHTML={{ __html: productData.travel_caption }} />

                                    <p className="lg:w-[370px] w-[347px] lg:h-[120px] h-[70px] lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-normal text-[#888991] mt-4"
                                        dangerouslySetInnerHTML={{ __html: productData.travel_body }} />
                                    <div className="text-[#B580D1] font-medium text-[14px] leading-[20px]">
                                        <Link to="/personal-insurance/travel">Read More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[436px] h-full">
                                <img
                                    src={productData?.house_image ? `https://coronation-cms.interactivedigital.com.gh/${productData.house_image}` : "https://loremflickr.com/600/400/house"}
                                    alt="pic"
                                    className="lg:w-full w-[343px] lg:h-[295px] h-[220px] object-cover rounded-[12px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                                    loading="lazy" />
                                <div className="w-full h-[204px] mt-4">
                                    <h2 className="w-[394px] h-[32px] lg:text-[32px] text-[20px] lg:leading-[32px] leading-[28px] font-semibold text-white"
                                        dangerouslySetInnerHTML={{ __html: productData.house_caption }} />
                                    <p className="lg:w-[370px] w-[347px] lg:h-[120px] h-[70px] lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-normal text-[#888991] mt-4"
                                        dangerouslySetInnerHTML={{ __html: productData.house_body }} />
                                    <div className="text-[#B580D1] font-medium text-[14px] leading-[20px]">
                                        <Link to="/personal-insurance/home">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        {/* Second Row of Products */}
                        <div className="flex lg:flex-row flex-col gap-6 lg:mt-10 md:mt-10 mt-6 md:px-40 lg:px-0 px-0 w-full lg:h-auto h-auto">
                            <div className="w-[436px] h-full">
                                <img
                                    src="https://loremflickr.com/600/400/ship"
                                    alt="Marine Insurance"
                                    className="lg:w-full w-[343px] lg:h-[295px] h-[220px] rounded-[12px] object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="w-full lg:h-[204px] h-[150px] mt-4">
                                    <h2 className="w-[394px] h-[32px] lg:text-[32px] text-[20px] lg:leading-[32px] leading-[28px] font-semibold text-white">
                                        Marine Insurance
                                    </h2>
                                    <p className="lg:w-[370px] w-[347px] lg:h-[120px] h-[100px] lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-normal text-[#888991] lg:mt-4 mt-0">
                                        Comprehensive protection for goods in transit by sea and marine vessels. Protect your cargo today.
                                    </p>
                                    <div className="text-[#B580D1] font-medium text-[14px] leading-[20px]">
                                        <Link to="/marine-insurance-ghana">Read More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[436px] h-full">
                                <img
                                    src="https://loremflickr.com/600/400/business"
                                    alt="Business Protection Insurance"
                                    className="lg:w-full w-[343px] lg:h-[295px] h-[220px] object-cover rounded-[12px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="w-full lg:h-[204px] h-[150px] mt-4">
                                    <h2 className="w-[394px] h-[32px] lg:text-[32px] text-[20px] lg:leading-[32px] leading-[28px] font-semibold text-white">
                                        Business Protection
                                    </h2>
                                    <p className="lg:w-[370px] w-[347px] lg:h-[120px] h-[70px] lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-normal text-[#888991] mt-4">
                                        Comprehensive insurance solutions tailored for Ghanaian businesses — from SMEs to large corporations.
                                    </p>
                                    <div className="text-[#B580D1] font-medium text-[14px] leading-[20px]">
                                        <Link to="/business-protection-insurance">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            <section>
                <div className="flex lg:flex-row flex-col w-full lg:p-20">
                    <div className="flex-1">
                        <img
                            src={productData?.sec2_image ? `https://coronation-cms.interactivedigital.com.gh/${productData.sec2_image}` : "https://loremflickr.com/600/400/meeting"}
                            alt="about"
                            className="hidden lg:block object-cover bg-cover w-[662px] h-[442px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                            loading="lazy" />
                        <img
                            src={productData?.sec2_image ? `https://coronation-cms.interactivedigital.com.gh/${productData.sec2_image}` : "https://loremflickr.com/600/400/meeting"}
                            alt="about"
                            className="lg:hidden block object-cover bg-cover w-[662px] md:w-full md:h-[400px] h-[350px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                            loading="lazy" />
                    </div>
                    <div className="flex-1 flex-col flex items-center justify-center">
                        <div className="p-4 lg:p-0">
                            <h2 className="lg:w-[558px] lg:h-[112px] lg:text-[48px] md:text-[32px] text-[24px] lg:leading-[56px] leading-[32px] font-bold"
                                dangerouslySetInnerHTML={{ __html: productData.sec2_caption }} />
                            <p className="lg:w-[560px] md:w-[400px] lg:text-[16px] text-[14px] leading-[20px] font-medium text-[#56575D] mt-4"
                                dangerouslySetInnerHTML={{ __html: productData.sec2_body }} />

                            <div className="w-[125px] h-[44px] text-[16px] leading-[24px] font-semibold text-white bg-[#B580D1] flex items-center justify-center mt-10 rounded-lg">
                                <Link to="https://claims-gh.coronation.ng/" target='_blank' rel='noopener noreferrer'>Make a Claim</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="relative hidden lg:block">
                    <img src={product5} alt="banner" className="w-full bg-cover" />
                    <div className="absolute top-[48%] left-[7%] text-[56px] font-semibold leading-[64px] text-white">
                        Get Insured Today
                    </div>
                    <div className="bg-white absolute top-[48%] right-[7%] w-[108px] h-[44px] flex rounded-lg items-center justify-center text-[16px] leading-[24px] font-semibold">
                        <Link to="https://ecoronation.com/" target='_blank' rel='noopener noreferrer'>Get a Quote</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PurpleProduct