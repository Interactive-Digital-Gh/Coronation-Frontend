/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import insightmainbg from "../assets/purpleinsight/insightmain.png"
import whistle from "../assets/whistle/whistleimg.png"
import whistle1 from "../assets/whistle/whistle1.png"
import qrcode from "../assets/qrcode_coro.png"
import { Link } from "react-router-dom"
import { MdCall, MdPublic, MdEmail, MdLocationOn, MdQrCodeScanner } from "react-icons/md"

const RedWhistleBlowing = () => {
    return (
        <div className="overflow-hidden">
            <div className="relative">
                <img src={insightmainbg} alt="about" className="w-full bg-cover lg:w-full lg:h-[600px] h-[500px]" loading="lazy" />
                <div className="absolute lg:top-[380px] top-[300px] lg:left-20 left-4 lg:w-[858px] md:w-[600px] w-[347px] lg:h-[152px] h-[172px]">
                    <h2 className="lg:text-[56px] text-[32px] lg:font-bold font-semibold lg:leading-[64px] leading-10 text-white">Whistle Blowing</h2>
                    <span className="w-full h-[72px] lg:text-[18px] text-[14px] font-normal lg:leading-[24px] leading-5 text-white">
                        Whistleblowing is an essential part of Coronation Insurance Ghana's overall approach to preventing and detecting misconduct,
                        as well as to foster and maintain ethics where everyone adheres to the Company’s policies, as well as applicable laws and regulations.</span>
                </div>
            </div>
            <section>
                <div className="flex lg:flex-row md:flex-row flex-col w-full lg:p-20 md:pt-4 lg:pt-0 pt-0">
                    <div className="flex-1">
                        <img
                            src={whistle} alt="about"
                            className="bg-cover lg:w-[662px] h-[300px] lg:h-[342px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                            loading="lazy" />
                    </div>
                    <div className="flex-1 flex-col flex lg:items-center lg:justify-center mt-4 lg:mt-0 md:mt-20">
                        <div className="p-4 lg:p-0">
                            <h2 className="lg:w-[558px] w-[347px] lg:text-[48px] text-[24px] lg:leading-[56px] leading-[32px] font-bold">Who can make a report?</h2>
                            <p className="lg:w-[560px] w-[347px] lg:text-[16px] text-[12px] leading-[20px] font-medium text-[#56575D] lg:mt-4 mt-2">
                                Any person with a valid reason can make a report. All reports must be based on facts, and any allegations contained in it must be true and verifiable.                            </p>

                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#F8F9FA] py-20">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="flex-1">
                            <h2 className="text-[32px] lg:text-[48px] font-bold text-[#1A1A1A] mb-8">
                                Available Channels
                            </h2>
                            <div className="h-1 w-full bg-gradient-to-r from-[#00205B] via-[#FF0226] to-[#FF0226] mb-12"></div>

                            <div className="bg-[#001D4A] rounded-[24px] py-6 px-12 inline-block mb-12 shadow-lg">
                                <h3 className="text-white text-[32px] lg:text-[44px] font-extrabold tracking-wider">CONTACT US</h3>
                            </div>

                            <div className="flex flex-col gap-10">
                                {/* Phone Section */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-[#FF0226]/10 p-3 rounded-xl">
                                        <MdCall className="text-[#FF0226] text-4xl" />
                                    </div>
                                    <div className="flex flex-col lg:flex-row gap-12">
                                        <div>
                                            <p className="text-[#00205B] font-bold text-lg uppercase tracking-tight">ON NETWORK TOLL FREE</p>
                                            <p className="text-[22px] font-semibold text-[#1A1A1A]">07030000026 (MTN)</p>
                                        </div>
                                        <div>
                                            <p className="text-[#00205B] font-bold text-lg uppercase tracking-tight">ALL-NETWORK TOLL FREE</p>
                                            <p className="text-[22px] font-semibold text-[#1A1A1A]">08001235276</p>
                                            <p className="text-[22px] font-semibold text-[#1A1A1A]">08001235764</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Weblink Section */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-[#FF0226]/10 p-3 rounded-xl">
                                        <MdPublic className="text-[#FF0226] text-4xl" />
                                    </div>
                                    <div>
                                        <p className="text-[#00205B] font-bold text-lg uppercase tracking-tight">WEBLINK</p>
                                        <a href="https://apps.ng.kpmg.com/ethics/#/" target="_blank" rel="noopener noreferrer" className="text-[18px] text-[#FF0226] hover:underline break-all">
                                            https://apps.ng.kpmg.com/ethics/#/
                                        </a>
                                    </div>
                                </div>

                                {/* Email Section */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-[#FF0226]/10 p-3 rounded-xl">
                                        <MdEmail className="text-[#FF0226] text-4xl" />
                                    </div>
                                    <div>
                                        <p className="text-[#00205B] font-bold text-lg uppercase tracking-tight">KPMG ETHICS LINE EMAIL</p>
                                        <a href="mailto:Kpmgethicsline@ng.kpmg.com" className="text-[18px] text-[#1A1A1A] hover:text-[#FF0226] transition-colors">
                                            Kpmgethicsline@ng.kpmg.com
                                        </a>
                                    </div>
                                </div>

                                {/* Office Section */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-[#FF0226]/10 p-3 rounded-xl">
                                        <MdLocationOn className="text-[#FF0226] text-4xl" />
                                    </div>
                                    <div>
                                        <p className="text-[#00205B] font-bold text-lg uppercase tracking-tight">KPMG OFFICE</p>
                                        <p className="text-[18px] text-[#56575D]">A physical mail address</p>
                                    </div>
                                </div>

                                {/* App Section */}
                                <div className="flex gap-6 items-start">
                                    <div className="bg-[#FF0226]/10 p-3 rounded-xl">
                                        <MdQrCodeScanner className="text-[#FF0226] text-4xl" />
                                    </div>
                                    <div>
                                        <p className="text-[#00205B] font-bold text-lg uppercase tracking-tight">KPMG NIGERIA WHISTLEBLOWING APP</p>
                                        <p className="text-[18px] text-[#1A1A1A] font-medium">(On Google PlayStore and iOS) (with a call feature)</p>
                                        <div className="mt-4 flex flex-col items-start gap-2">
                                            <p className="text-[16px] italic text-[#56575D]">Scan to download app</p>
                                            <img src={qrcode} alt="QR Code" className="w-32 h-32 object-contain rounded-lg shadow-sm border border-gray-100 p-1 bg-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-[400px] w-full flex flex-col gap-6">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img src={whistle1} alt="whistle" className="w-full object-cover" loading="lazy" />
                            </div>
                            <div className="bg-[#FF0226] p-6 rounded-2xl text-white">
                                <p className="text-sm italic font-light leading-relaxed">
                                    Whistleblowers may choose to make anonymous reports by not disclosing their identities when making reports.
                                    If you want your identity to be disclosed, then you need to give a written consent to that effect.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default RedWhistleBlowing