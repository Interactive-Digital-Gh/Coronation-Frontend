/* eslint-disable react/no-unescaped-entities */
import logo from "../assets/logo2.png"
import { Link, useLocation } from "react-router-dom"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
    const location = useLocation();
    const isCorporate = location.pathname.startsWith("/corporate");

    return (
        <div>
            <section className="overflow-hidden">
                <div className="bg-[#141415] w-full lg:h-[624px] md:h-[820px] h-[910px]">
                    <div className="flex lg:flex-row flex-col lg:p-24 p-4">
                        <div className="lg:w-[411px] lg:h-[263px] pt-10">
                            <img src={logo} alt="logo" className="mb-3 w-[291px] h-[32px] lg:w-[280px] lg:h-[30px]" loading="lazy" />
                            <span className="lg:w-[400px] h-[120px] lg:h-[216px] font-normal lg:text-[18px] text-[14px] lg:leading-[24px] leading-[18px] text-[#888991]">
                                At Coronation, we seek to be the most enjoyable company to do business with.
                                Our experienced underwriting and strong risk management expertise developed over the last 16 years has prepared us to serve as your lead underwriter.
                                With us, it's not just insurance; it's insurance for everything.
                            </span>
                        </div>
                        <div className="w-[869px] h-[392px] lg:pl-32 pt-10">
                            <div className="flex flex-col lg:flex-row lg:gap-16 gap-8">
                                <div className="flex">
                                    <div className="w-[199px]">
                                        <div className="mb-2 text-white">Main Service</div>
                                        <ul>
                                            <Link to="/motor-insurance-ghana">
                                                <li className="text-[#888991] mb-2">Motor Insurance</li>
                                            </Link>

                                            <Link to="/marine-insurance-ghana">
                                                <li className="text-[#888991] mb-2">Marine Insurance</li>
                                            </Link>

                                            <Link to="/business-protection-insurance">
                                                <li className="text-[#888991] mb-2">Business Insurance</li>
                                            </Link>

                                            <Link to="/individual/products/travel">
                                                <li className="text-[#888991] mb-2">Travel Insurance</li>
                                            </Link>

                                            <Link to="/individual/products/home">
                                                <li className="text-[#888991] mb-2">Home Insurance</li>
                                            </Link>

                                            <a href="https://ecoronation.com/pa" target="_blank" rel="noopener noreferrer">
                                                <li className="text-[#888991] mb-2">Personal Accident</li>
                                            </a>
                                        </ul>

                                    </div>
                                    <div className="w-[120px]">
                                        <div className="mb-2 text-white">Self Service</div>
                                        <ul>
                                            <a href="https://claims-gh.coronation.ng/" target="_blank" rel="noopener noreferrer"><li className="text-[#888991]">Claims</li></a>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-[199px]">
                                        <div className="mb-2 text-white">Affiliation</div>
                                        {/* TODO: client to supply the exact URL for each group company; all point to the group site for now */}
                                        <ul>
                                            <a href="https://coronation.ng/" target="_blank" rel="noopener noreferrer"><li className="text-[#888991] mb-2">Coronation Asset Management</li></a>
                                            <a href="https://coronation.ng/" target="_blank" rel="noopener noreferrer"><li className="text-[#888991] mb-2">Coronation Insurance PLC</li></a>
                                            <a href="https://coronation.ng/" target="_blank" rel="noopener noreferrer"><li className="text-[#888991] mb-2">Coronation Life Assurance</li></a>
                                            <a href="https://coronation.ng/" target="_blank" rel="noopener noreferrer"><li className="text-[#888991] mb-2">Coronation Securities</li></a>
                                            <a href="https://coronation.ng/" target="_blank" rel="noopener noreferrer"><li className="text-[#888991] mb-2">Coronation Capital</li></a>
                                            <a href="https://coronation.ng/" target="_blank" rel="noopener noreferrer"><li className="text-[#888991] mb-2">Coronation Registrars</li></a>
                                            <a href="https://coronation.ng/" target="_blank" rel="noopener noreferrer"><li className="text-[#888991] mb-2">Coronation Trustees</li></a>
                                            <a href="https://coronation.ng/" target="_blank" rel="noopener noreferrer"><li className="text-[#888991]">Truim</li></a>
                                        </ul>
                                    </div>
                                    <div className="w-[199px]">
                                        <div className="mb-2 text-white">Whistle Blowing</div>
                                        <ul>
                                            <Link to={isCorporate ? "/corporate/whistleblowing" : "/individual/whistleblowing"}>
                                                <li className="text-[#888991]">Whistle Blowing: Coronation Insurance Ghana</li>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[200px] lg:mt-0">
                        <div className="flex md:flex-row lg:flex-row flex-col lg:items-center justify-between lg:px-24 px-4">
                            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                                <span className="text-white">@ 2024 Coronation. All rights reserved.</span>
                                <Link to="/privacy"><span className="text-[#888991] hover:text-white">Privacy Policy</span></Link>
                            </div>
                            <ul className="flex gap-4">
                                <a href="https://www.facebook.com/coronationghana" target="_blank" rel="noopener noreferrer">
                                    <li className="text-white" ><FaFacebook /></li></a>
                                <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHMuoEM6XPSiAAAAZrfHLGYn-DS8LzqjPiWMDWe82Qq14Hv-bXom2vIuCF4s-Cv_HTCQYFWyc9hqx5_P8m3gHSy5t2V_Vvx6Lkk-sp6YHY4YPY--ALn61dPZffzByp9eNypqOw=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F76524378%2Fadmin%2Fpage-posts%2Fpublished%2F"
                                    target="_blank" rel="noopener noreferrer">
                                    <li className="text-white" target="_blank" rel="noopener noreferrer"><FaLinkedin /></li></a>
                                <a href="https://www.instagram.com/coronationgh/" target="_blank" rel="noopener noreferrer">
                                    <li className="text-white"><FaInstagram /></li></a>
                                <a href="https://x.com/coronationghana" target="_blank" rel="noopener noreferrer">
                                    <li className="text-white"><FaTwitter /></li></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;
