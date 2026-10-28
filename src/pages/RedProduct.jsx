/* eslint-disable react/no-unescaped-entities */
// import productbg from "../assets/purpleproduct/productbg.png"
// import product1 from "../assets/redmotor/redmotor.png"
// import product2 from "../assets/engineer/engineerbg.png"
// import product3 from "../assets/marine/marinebg.png"
import product4 from "../assets/purpleproduct/redprodbg.png"
import product5 from "../assets/purpleproduct/redbanner.png"
import fireImg from "../assets/product_artwork/fire-special-perils.webp"
import goodsInTransitImg from "../assets/product_artwork/goods-in-transit.webp"
import burglaryImg from "../assets/engineer/engineer6.png"
import interruptionImg from "../assets/purplehomeIns/homeIns2.png"

import productmob from "../assets/purpleproduct/productmob.png"
import product44 from "../assets/purpleproduct/redprodmob.png"


import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import SEO from "../components/SEO";
import FAQ from "../components/FAQ";
import ProductCard from "../components/ProductCard";
import { fetchCms } from '../lib/cmsCache';


const RedProduct = () => {
    const [productData, setProductData] = useState(null);
    const [showLoader, setShowLoader] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);


    useEffect(() => {
        const fetchproductData = async () => {
            try {
                const response = await fetchCms('https://coronation-cms.interactivedigital.com.gh/api/institute/pns/fetch');
                const data = await response.json();
                console.log('purple redproduct Data:', data);
                setProductData(data[0]);
                setShowLoader(false);
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
            <SEO
                title="Business Insurance Products | Coronation Insurance Ghana"
                description="Explore Coronation Insurance Ghana business insurance products including motor fleet, engineering, marine and business protection insurance for your company."
                keywords="business insurance Ghana, corporate insurance products, commercial motor insurance, engineering insurance"
            />
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
                    <div className="hidden md:block mb-4 lg:mb-0">
                        <h2 className="text-[48px] font-bold leading-[56px] text-white">
                            Looking for The <br />Right Insurance Cover for You?
                        </h2>
                        <span className="block mt-2 text-[16px] font-normal leading-[24px] text-[#888991]">
                            Life doesn't wait, neither should your insurance coverage. Coronation Insurance Ghana Ltd offers<br /> comprehensive plans for car, home,
                            business, and life. One call, and Total protection. Get a quote now!
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 lg:mt-10">
                        <ProductCard
                            image={productData?.motor_image ? `https://coronation-cms.interactivedigital.com.gh/${productData.motor_image}` : "https://loremflickr.com/600/400/car"}
                            alt="Motor Insurance"
                            titleHtml={productData.motor_caption}
                            bodyHtml={productData.motor_body}
                            to="/corporate/products/motor"
                            linkClassName="text-[#FF0226]"
                        />
                        <ProductCard
                            image={productData?.eng_image ? `https://coronation-cms.interactivedigital.com.gh/${productData.eng_image}` : "https://loremflickr.com/600/400/engineering"}
                            alt="Engineering Insurance"
                            titleHtml={productData.eng_caption}
                            bodyHtml={productData.eng_body}
                            to="/corporate/products/engineering"
                            linkClassName="text-[#FF0226]"
                        />
                        <ProductCard
                            image={productData?.marine_image ? `https://coronation-cms.interactivedigital.com.gh/${productData.marine_image}` : "https://loremflickr.com/600/400/ship"}
                            alt="Marine Insurance"
                            titleHtml={productData.marine_caption}
                            bodyHtml={productData.marine_body}
                            to="/corporate/products/marine"
                            linkClassName="text-[#FF0226]"
                        />
                        <ProductCard
                            image="https://loremflickr.com/600/400/liability"
                            alt="Liability Insurance"
                            title="Liability Insurance"
                            body="Helps take care of losses triggered by injuries and damages caused by you or your business to other people or their property."
                            to="/corporate/business-protection-insurance"
                            linkClassName="text-[#FF0226]"
                        />
                        <ProductCard
                            image={fireImg}
                            alt="Fire & Special Perils Insurance"
                            title="Fire Insurance"
                            body="Protects your business property, buildings, and contents against fire, lightning, explosion, and other special perils."
                            to="/corporate/business-protection-insurance"
                            linkClassName="text-[#FF0226]"
                        />
                        <ProductCard
                            image={burglaryImg}
                            alt="Burglary Insurance"
                            title="Burglary Insurance"
                            body="Comprehensive protection against loss or damage to your business property caused by burglary, theft, or attempted theft."
                            to="/corporate/business-protection-insurance"
                            linkClassName="text-[#FF0226]"
                        />
                        <ProductCard
                            image={interruptionImg}
                            alt="Business Interruption"
                            title="Business Interruption"
                            body="Covers loss of income suffered by a business after a disaster, helping you navigate financial losses during recovery."
                            to="/corporate/business-protection-insurance"
                            linkClassName="text-[#FF0226]"
                        />
                        <ProductCard
                            image={goodsInTransitImg}
                            alt="Goods in Transit Insurance"
                            title="Goods in Transit"
                            body="Protects goods while being transported by road, rail, or air within Ghana and beyond against damage, theft, or loss."
                            to="/corporate/business-protection-insurance"
                            linkClassName="text-[#FF0226]"
                        />
                        <ProductCard
                            image="https://loremflickr.com/600/400/money"
                            alt="Money Insurance"
                            title="Money Insurance"
                            body="Comprehensive coverage for loss of money in transit, on your business premises, or in a safe. Ideal for daily cash handlers."
                            to="/corporate/business-protection-insurance"
                            linkClassName="text-[#FF0226]"
                        />
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

            <FAQ theme="red" />

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