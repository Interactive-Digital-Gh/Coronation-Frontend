/* eslint-disable react/no-unescaped-entities */
import "./global.css"
import selfservicebg from "../assets/purpleservice/selfservicebg.png"
import serviceimg from "../assets/purpleservice/serviceimg.png"
import selfservicemob from "../assets/purpleservice/selfservicemob.png"

import { FaRegFileAlt } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
import SEO from "../components/SEO";


const PurpleService = () => {
    return (
        <div className="overflow-hidden">
            <SEO
                title="Self Service | Coronation Insurance Ghana"
                description="Access Coronation Insurance Ghana self-service portal. File claims, renew policies, make payments and manage your personal insurance online."
                keywords="Coronation Insurance self service, insurance portal Ghana, file claims online, renew insurance policy"
            />
            <div className="flex lg:flex-row md:flex-row flex-col-reverse w-full gap-24">
                <div className="flex-1 flex flex-col lg:items-center md:items-center md:justify-center lg:justify-center pl-4 lg:pl-0">
                    <div>
                        <h2 className="lg:text-[56px] md:text-[40px] text-[32px] leadng-[40px] font-bold lg:leading-[64px]">Self Service</h2>
                        <span className="lg:text-[16px] md:text-[16px] text-[14px] font-normal leading-[24px]">Choose the service you would like to access</span>
                    </div>
                </div>
                <div className="flex-1 relative">
                    <img src={selfservicebg} alt="service" className="bg-cover hidden lg:block" loading="lazy" />
                    <img src={selfservicemob} alt="service" className="bg-cover lg:hidden block" loading="lazy" />
                    <div className="glass absolute bottom-0 lg:right-0 md:right-0 right-4 lg:w-[385px] w-[230px] lg:h-[174px] h-[140px]">
                        <div className="lg:p-6 p-2">
                            <span className="text-white w-[300px] h-[32px] lg:text-[24px] leading-[32px] font-semibold">My Insurance Account</span>
                            <p className="text-white lg:text-[16px] text-[12px] leading-[24px] font-normal lg:mt-2 mt-0">
                                Want to know more about our services? Let's talk
                            </p>
                            <div className="flex lg:mt-5 mt-2 lg:w-[116px] w-[95px] h-[36px] bg-white font-semibold lg:text-[14px] text-[10px] leading-[20px] text-black rounded-lg items-center justify-center">
                                <Link to="https://ecoronation.com/" target='_blank' rel='noopener noreferrer'>GET A QUOTE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="relative pt-20">
                    <img src={serviceimg} alt="feature" className="w-[250px] lg:w-[743px] md:w-[450px] lg:h-[599px] h-[380px]" loading="lazy" />
                    <div className="absolute lg:top-[35%] top-[150px] left-3 lg:left-[43%] md:left-[48%] lg:w-[737px] w-[365px] h-[210px] lg:min-h-[300px] bg-white border rounded-lg shadow-md">
                        <div className="lg:p-4 p-2 flex lg:w-[714px] h-[300px] overflow-x-auto lg:overflow-hidden">
                            <div className="flex-1 flex flex-col lg:gap-4 gap-2 lg:p-4 p-2">
                                <FaRegFileAlt className="text-[#B580D1] lg:w-10 w-[30px] lg:h-12 h-10" />
                                <div className="w-full lg:h-[200px]">
                                    <h3 className="lg:text-[32px] text-[18px] font-semibold leading-[40px]">File a Claim</h3>
                                    <p className="lg:text-[16px] text-[10px] lg:w-[293px] w-[200px] font-normal leading-[20px] lg:leading-[24px] text-[#888991]">
                                        Designed for your convenience to enable you initiate claim request and monitor the status of your existing claim request.
                                    </p>
                                </div>

                                <Link to="https://claims-gh.coronation.ng/" target='_blank' rel='noopener noreferrer' className="text-[#B580D1]">File a Claim</Link>
                            </div>
                            <div className="flex-1 flex flex-col lg:gap-4 gap-2 p-4">
                                <IoShieldCheckmarkOutline className="text-[#B580D1] lg:w-10 w-[30px] lg:h-12 h-10" />
                                <div className="w-full lg:h-[200px]">
                                    <h3 className="lg:text-[32px] text-[18px] font-semibold leading-[40px]">Buy Insurance</h3>
                                    <p className="lg:text-[16px] text-[10px] lg:w-[293px] w-[240px] font-normal leading-[20px] lg:leading-[24px] text-[#888991]">
                                        Discover the most convenient way to plan your insurance with Coronation Mobile App,                                    </p>
                                </div>

                                <Link to="https://ecoronation.com/" className="text-[#B580D1]">Buy Insurance</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PurpleService