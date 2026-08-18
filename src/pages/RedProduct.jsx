/* eslint-disable react/no-unescaped-entities */
// import productbg from "../assets/purpleproduct/productbg.png"
// import product1 from "../assets/redmotor/redmotor.png"
// import product2 from "../assets/engineer/engineerbg.png"
// import product3 from "../assets/marine/marinebg.png"
import product4 from "../assets/purpleproduct/redprodbg.png"
import product5 from "../assets/purpleproduct/redbanner.png"
import fireImg from "../assets/redhome/redhero2.png"
import burglaryImg from "../assets/engineer/engineer6.png"
import interruptionImg from "../assets/purplehomeIns/homeIns2.png"

import productmob from "../assets/purpleproduct/productmob.png"
import product44 from "../assets/purpleproduct/redprodmob.png"


import { Link } from "react-router-dom"
import { useEffect, useState } from "react"


const RedProduct = () => {
    const [productData, setProductData] = useState(null);
    const [showLoader, setShowLoader] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);


    useEffect(() => {
        const fetchproductData = async () => {
            try {
                const response = await fetch('https://coronation-cms.interactivedigital.com.gh/api/institute/pns/fetch');
                const data = await response.json();
                console.log('purple redproduct Data:', data);
                setProductData(data[0]);
                // Start 2-second loader timer only after data arrives
                setTimeout(() => {
                    setFadeOut(true); // start fade
                    setTimeout(() => setShowLoader(false), 500); // hide after fade
                }, 2000);
            } catch (error) {
                console.error('Error fetching redproduct data:', error);
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
                    src={productData?.header_image ? `https://coronation-cms.interactivedigital.com.gh/${productData.header_image}` : "assets/purpleproduct/productbg.png"}
                    className="hidden lg:max-h-[570px] lg:block w-full bg-cover lg:w-full"
                    loading="lazy" />
                <img src={productmob} alt="about" className="lg:hidden block bg-cover w-full md:h-[800px]" loading="lazy" />
                <div className="absolute lg:top-1/2 lg:-translate-y-1/2 md:top-[500px] top-[470px] lg:left-20 left-4 lg:w-[858px] md:w-[600px] w-[347px] lg:h-[152px] h-[172px]">
                    <h2 className="lg:text-[56px] text-[32px] lg:font-bold font-semibold lg:leading-[64px] leading-10 text-white"
                        dangerouslySetInnerHTML={{ __html: productData.header_caption }} />
                    <span className="w-full h-[72px] lg:text-[18px] md:text-[24px] text-[14px] font-normal lg:leading-[24px] leading-5 text-white"
                        dangerouslySetInnerHTML={{ __html: productData.header_body }} />
                </div>
                <div className="absolute lg:top-1/2 lg:-translate-y-1/2 top-0 lg:right-20 right-0 lg:w-[300px] w-[225px] lg:h-[174px] h-[160px] bg-[#FF0226] bg-opacity-70 shadow-md">
                    <div className="lg:p-6 p-4">
                        <span className="text-white lg:w-[232px] lg:h-[32px] h-[24px] lg:text-[24px] text-[16px] lg:leading-[32px] leading-6 font-semibold">My Insurance Account</span>
                        <p className="text-white lg:text-[16px] text-[14px] lg:leading-[24px] leading-5 font-normal lg:mt-2 mt-0">
                            Want to know more about our services? Let's talk
                        </p>
                        <div className="flex mt-5 w-[90px] h-[35px] bg-black text-white items-center justify-center">
                            Contact Us
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="lg:p-20 p-6 bg-black">
                    <div className="w-full lg:h-auto">
                        <div className="hidden md:block lg:block md:mb-4 lg:mb-0 mb-0">
                            <h2 className="text-[48px] font-bold leading-[56px] text-white w-[790px] h-[112px]">
                                Looking for The <br />Right Insurance Cover for You?
                            </h2>
                            <span className="text-[16px] font-normal leading-[24px] text-[#888991] w-[846px] h-[48px]">
                                Life doesn't wait, neither should your insurance coverage. Coronation Insurance Ghana Ltd offers<br /> comprehensive plans for car, home,
                                business, and life. One call, and Total protection. Get a quote now!
                            </span>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-6 lg:mt-10 md:px-40 lg:px-0 px-0 w-full lg:h-[524px] h-auto">
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
                                    <div className="text-[#FF0226] font-medium text-[14px] leading-[20px]">
                                        <Link to="/corporate/business-insurance/motor">Read More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[436px] h-full">
                                <img
                                    src={productData?.eng_image ? `https://coronation-cms.interactivedigital.com.gh/${productData.eng_image}` : "https://loremflickr.com/600/400/engineering"}
                                    alt="pic"
                                    className="lg:w-full w-[343px] lg:h-[295px] h-[220px] object-cover rounded-[12px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="w-full lg:h-[204px] h-[150px] mt-4">
                                    <h2 className="w-[394px] h-[32px] lg:text-[32px] text-[20px] lg:leading-[32px] leading-[28px] font-semibold text-white"
                                        dangerouslySetInnerHTML={{ __html: productData.eng_caption }} />
                                    <p className="lg:w-[370px] w-[347px] lg:h-[120px] h-[70px] lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-normal text-[#888991] mt-4"
                                        dangerouslySetInnerHTML={{ __html: productData.eng_body }} />
                                    <div className="text-[#FF0226] font-medium text-[14px] leading-[20px]">
                                        <Link to="/corporate/business-insurance/engineering">Read More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[436px] h-full">
                                <img
                                    src={productData?.marine_image ? `https://coronation-cms.interactivedigital.com.gh/${productData.marine_image}` : "https://loremflickr.com/600/400/ship"}
                                    alt="pic"
                                    className="lg:w-full w-[343px] lg:h-[295px] h-[220px] object-cover rounded-[12px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                                    loading="lazy" />
                                <div className="w-full h-[204px] mt-4">
                                    <h2 className="w-[394px] h-[32px] lg:text-[32px] text-[20px] lg:leading-[32px] leading-[28px] font-semibold text-white"
                                        dangerouslySetInnerHTML={{ __html: productData.marine_caption }} />

                                    <p className="lg:w-[370px] w-[347px] lg:h-auto h-auto lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-normal text-[#888991] mt-4"
                                        dangerouslySetInnerHTML={{ __html: productData.marine_body }} />

                                    <div className="text-[#FF0226] font-medium text-[14px] leading-[20px]">
                                        <Link to="/corporate/business-insurance/marine">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Row of Products */}
                        <div className="flex lg:flex-row flex-col gap-6 lg:mt-10 md:mt-10 mt-6 md:px-40 lg:px-0 px-0 w-full lg:h-auto h-auto">
                            <div className="w-[436px] h-full">
                                <img
                                    src="https://loremflickr.com/600/400/liability"
                                    alt="Liability Insurance"
                                    className="lg:w-full w-[343px] lg:h-[295px] h-[220px] rounded-[12px] object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="w-full lg:h-[204px] h-[150px] mt-4">
                                    <h2 className="w-[394px] h-[32px] lg:text-[32px] text-[20px] lg:leading-[32px] leading-[28px] font-semibold text-white">
                                        Liability Insurance
                                    </h2>
                                    <p className="lg:w-[370px] w-[347px] lg:h-[120px] h-[100px] lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-normal text-[#888991] lg:mt-4 mt-0">
                                        Helps take care of losses triggered by injuries and damages caused by you or your business to other people or their property.
                                    </p>
                                    <div className="text-[#FF0226] font-medium text-[14px] leading-[20px]">
                                        <Link to="/corporate/business-protection-insurance">Read More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[436px] h-full">
                                <img
                                    src={fireImg}
                                    alt="Fire & Special Perils Insurance"
                                    className="lg:w-full w-[343px] lg:h-[295px] h-[220px] object-cover rounded-[12px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="w-full lg:h-[204px] h-[150px] mt-4">
                                    <h2 className="w-[394px] h-[32px] lg:text-[32px] text-[20px] lg:leading-[32px] leading-[28px] font-semibold text-white">
                                        Fire Insurance
                                    </h2>
                                    <p className="lg:w-[370px] w-[347px] lg:h-[120px] h-[70px] lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-normal text-[#888991] mt-4">
                                        Protects your business property, buildings, and contents against fire, lightning, explosion, and other special perils.
                                    </p>
                                    <div className="text-[#FF0226] font-medium text-[14px] leading-[20px]">
                                        <Link to="/corporate/business-protection-insurance">Read More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[436px] h-full">
                                <img
                                    src={burglaryImg}
                                    alt="Burglary Insurance"
                                    className="lg:w-full w-[343px] lg:h-[295px] h-[220px] object-cover rounded-[12px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                                    loading="lazy" />
                                <div className="w-full h-[204px] mt-4">
                                    <h2 className="w-[394px] h-[32px] lg:text-[32px] text-[20px] lg:leading-[32px] leading-[28px] font-semibold text-white">
                                        Burglary Insurance
                                    </h2>
                                    <p className="lg:w-[370px] w-[347px] lg:h-auto h-auto lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-normal text-[#888991] mt-4">
                                        Comprehensive protection against loss or damage to your business property caused by burglary, theft, or attempted theft.
                                    </p>
                                    <div className="text-[#FF0226] font-medium text-[14px] leading-[20px]">
                                        <Link to="/corporate/business-protection-insurance">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Third Row of Products */}
                        <div className="flex lg:flex-row flex-col gap-6 lg:mt-10 md:mt-10 mt-6 md:px-40 lg:px-0 px-0 w-full lg:h-auto h-auto">
                            <div className="w-[436px] h-full">
                                <img
                                    src={interruptionImg}
                                    alt="Business Interruption"
                                    className="lg:w-full w-[343px] lg:h-[295px] h-[220px] rounded-[12px] object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="w-full lg:h-[204px] h-[150px] mt-4">
                                    <h2 className="w-[394px] h-[32px] lg:text-[32px] text-[20px] lg:leading-[32px] leading-[28px] font-semibold text-white">
                                        Business Interruption
                                    </h2>
                                    <p className="lg:w-[370px] w-[347px] lg:h-[120px] h-[100px] lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-normal text-[#888991] lg:mt-4 mt-0">
                                        Covers loss of income suffered by a business after a disaster, helping you navigate financial losses during recovery.
                                    </p>
                                    <div className="text-[#FF0226] font-medium text-[14px] leading-[20px]">
                                        <Link to="/corporate/business-protection-insurance">Read More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[436px] h-full">
                                <img
                                    src="https://loremflickr.com/600/400/transport"
                                    alt="Goods in Transit"
                                    className="lg:w-full w-[343px] lg:h-[295px] h-[220px] object-cover rounded-[12px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="w-full lg:h-[204px] h-[150px] mt-4">
                                    <h2 className="w-[394px] h-[32px] lg:text-[32px] text-[20px] lg:leading-[32px] leading-[28px] font-semibold text-white">
                                        Goods in Transit
                                    </h2>
                                    <p className="lg:w-[370px] w-[347px] lg:h-[120px] h-[70px] lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-normal text-[#888991] mt-4">
                                        Protects goods while being transported by road, rail, or air within Ghana and beyond against damage, theft, or loss.
                                    </p>
                                    <div className="text-[#FF0226] font-medium text-[14px] leading-[20px]">
                                        <Link to="/corporate/business-protection-insurance">Read More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[436px] h-full">
                                <img
                                    src="https://loremflickr.com/600/400/money"
                                    alt="Money Insurance"
                                    className="lg:w-full w-[343px] lg:h-[295px] h-[220px] object-cover rounded-[12px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                                    loading="lazy" />
                                <div className="w-full h-[204px] mt-4">
                                    <h2 className="w-[394px] h-[32px] lg:text-[32px] text-[20px] lg:leading-[32px] leading-[28px] font-semibold text-white">
                                        Money Insurance
                                    </h2>
                                    <p className="lg:w-[370px] w-[347px] lg:h-auto h-auto lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-normal text-[#888991] mt-4">
                                        Comprehensive coverage for loss of money in transit, on your business premises, or in a safe. Ideal for daily cash handlers.
                                    </p>
                                    <div className="text-[#FF0226] font-medium text-[14px] leading-[20px]">
                                        <Link to="/corporate/business-protection-insurance">Read More</Link>
                                    </div>
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
                            src={product4} alt="about"
                            className="hidden lg:block bg-cover object-cover w-[662px] h-[442px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                            loading="lazy" />
                        <img
                            src={product44} alt="about"
                            className="lg:hidden block object-cover bg-cover w-[662px] md:w-full h-[350px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                            loading="lazy" />
                    </div>
                    <div className="flex-1 flex-col flex items-center justify-center">
                        <div className="p-4 lg:p-0">
                            <h2 className="lg:w-[558px] lg:h-[112px] lg:text-[48px] text-[24px] lg:leading-[56px] leading-[32px] font-bold">Get Insurance From CORONATION Today</h2>
                            <p className="lg:w-[560px] md:w-[400px] lg:text-[16px] text-[14px] leading-[20px] font-medium text-[#56575D] mt-4">
                                No one should have to wait more than 48 hours for their claims to be paid. That’s why we do it in less.
                            </p>
                            <div className="w-[125px] h-[44px] text-[16px] leading-[24px] font-semibold text-white bg-[#FF0226] flex items-center justify-center mt-10 rounded-lg">
                                <Link>Make a Claim</Link>
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
                    <div className="bg-[#FF0226] absolute top-[48%] right-[7%] w-[108px] h-[44px] text-white flex rounded-lg items-center justify-center text-[16px] leading-[24px] font-semibold">
                        <Link to="https://ecoronation.com/" target='_blank' rel='noopener noreferrer'>Get a Quote</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RedProduct