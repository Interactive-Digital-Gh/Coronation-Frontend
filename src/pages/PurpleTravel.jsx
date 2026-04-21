/* eslint-disable react/no-unescaped-entities */
import "./global.css"
// import motorbg from "../assets/purplemotor/motorbg.png"
// import student from "../assets/purpletravel/student1.png"
// import travelguy from "../assets/purpletravel/travelguy.png"

import StudentFeature from "../features/StudentFeature";
import { useEffect, useState } from "react";
import IndividualFeature from "../features/IndividualFeature";

import travelmob from "../assets/purpletravel/travelmob.png"
import travelbenefit from "../assets/purpletravel/travelbenefit.png"
import { Link } from "react-router-dom";
import ProductFlyer from "../assets/Product_Flyers  .pdf";

const PurpleTravel = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isIndModalOpen, setIsIndModalOpen] = useState(false);

    const [travelData, setTravelData] = useState(null);
    const [showLoader, setShowLoader] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);


    useEffect(() => {
        const fetchmotorData = async () => {
            try {
                const response = await fetch('https://coronation-cms.interactivedigital.com.gh/api/travel/individual/fetch');
                const data = await response.json();
                console.log('purple travel Data:', data);
                setTravelData(data[0]);
                // Start 2-second loader timer only after data arrives
                setTimeout(() => {
                    setFadeOut(true); // start fade
                    setTimeout(() => setShowLoader(false), 500); // hide after fade
                }, 2000);
            } catch (error) {
                console.error('Error fetching travel data:', error);
            }
        };
        fetchmotorData();
    }, []);

    // Check if either aboutData or bodData is still loading
    if (!travelData || showLoader) {
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
            <div className="flex lg:flex-row flex-col-reverse w-full lg:h-[450px] h-[678px]">
                <div className="flex-1 flex-col bg-[#EFEFF0] flex lg:items-center justify-center">
                    <div className="p-4">
                        <h2 className="lg:text-[56px] text-[32px] lg:leading-[64px] leading-[40px] font-bold"
                            dangerouslySetInnerHTML={{ __html: travelData.header_caption }} />
                        <p className="lg:w-[560px] md:w-[600px] w-[319px] lg:text-[16px] md:text-[14px] text-[12px] leading-[20px] font-medium text-[#56575D] mt-4"
                            dangerouslySetInnerHTML={{ __html: travelData.header_body }} />

                    </div>
                </div>
                <div className="">
                    <img
                        src={travelData?.header_image ? `https://coronation-cms.interactivedigital.com.gh/${travelData.header_image}` : "assets/purplemotor/motorbg.png"}
                        className="hidden lg:flex bg-cover w-full h-full"
                        loading="lazy" />
                    <img src={travelmob} alt="about" className="flex lg:hidden md:h-[500px] bg-cover w-full h-[458px]" loading="lazy" />
                </div>
                <div className="glass absolute lg:bottom-[137px] md:bottom-[235px] small:bottom-[305px]
                 xxsm:bottom-[216px] nsm:bottom-[268px] msm:bottom-[112px] rsm:bottom-[287px]
                 xsm:bottom-[39px] bottom-[268px] right-0 lg:w-[385px] w-[243px] lg:h-[164px] h-[140px]">
                    <div className="lg:p-4 p-2">
                        <span className="text-white w-[300px] h-[32px] lg:text-[24px] leading-[32px] font-semibold">My Insurance Account</span>
                        <p className="text-white lg:text-[16px] text-[12px] leading-[24px] font-normal lg:mt-2 mt-0">
                            Want to know more about our services? Let's talk
                        </p>
                        <div className="flex lg:mt-5 mt-2 lg:w-[116px] w-[95px] h-[36px] bg-white font-semibold lg:text-[14px] text-[10px] leading-[20px] text-black rounded-lg items-center justify-center">
                            <Link to="https://ecoronation.com/motor" target='_blank' rel='noopener noreferrer'>GET A QUOTE</Link>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="w-full h-[250px] bg-black lg:px-28 px-4 items-center lg:py-12 md:py-20 py-10">
                    <div className="flex flex-col">
                        <h3 className="text-white lg:text-[40px] text-[24px] lg:leading-[44px] leading-[32px] font-bold lg:w-[572px]"
                            dangerouslySetInnerHTML={{ __html: travelData.sec1_caption }} />
                        <div className="flex items-center mt-4">
                            <span className="text-white lg:text-[18px] md:text-[16px] text-[14px] leading-[24px] font-normal w-[703px] h-[48px]"
                                dangerouslySetInnerHTML={{ __html: travelData.sec1_body }} />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full lg:h-[630px] md:h-[500px] h-[900px] lg:px-28 px-4 lg:py-20 py-10">
                    <div className="flex lg:flex-row md:flex-row flex-col gap-6 lg:w-[1280px] h-full">
                        <div className="lg:w-[627px] w-[347px] lg:h-[540px] h-[404px] p-4 border border-b-4 border-b-[#B580D1] bg-white rounded-lg shadow-lg">
                            <img
                                src={travelData?.student_ins_image ? `https://coronation-cms.interactivedigital.com.gh/${travelData.student_ins_image}` : "assets/purpletravel/student1.png"}
                                className="lg:w-[580px] w-[343px] lg:h-[280px] h-[220px] rounded-lg bg-cover"
                                loading="lazy" />
                            <div>
                                <h3 className="w-full lg:h-[40px] h-[28px] font-semibold lg:text-[32px] text-[20px] lg:leading-[40px] leading-[28px] mt-2">
                                    STUDENT
                                </h3>
                                <p className="w-full lg:h-[72px] h-[50px] font-normal lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] text-[#56575d] lg:mt-6 mt-4"
                                    dangerouslySetInnerHTML={{ __html: travelData.student_insurance_body }} />
                                <div className="flex gap-4">
                                    <div onClick={() => setIsModalOpen(true)} className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center lg:mt-6 mt-4">
                                        Insurance Features
                                    </div>
                                    <a href={ProductFlyer} download="Product_Flyers.pdf" className="w-[142px] h-[36px] bg-[#B580D1] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer rounded-lg shadow-md text-white flex items-center justify-center lg:mt-6 mt-4">
                                        Download Flyer
                                    </a>
                                </div>
                            </div>
                        </div>
                        {isModalOpen && (
                            <StudentFeature closeModal={() => setIsModalOpen(false)} /> // Pass close function to the modal
                        )}
                        <div className="lg:w-[627px] w-[347px] lg:h-[540px] h-[404px] p-4 border border-b-4 border-b-[#B580D1] bg-white rounded-lg shadow-lg">
                            <img
                                src={travelData?.individual_ins_image ? `https://coronation-cms.interactivedigital.com.gh/${travelData.individual_ins_image}` : "assets/purpletravel/travelguy.png"}
                                className="lg:w-[580px] w-[343px] lg:h-[280px] h-[220px] rounded-lg bg-cover"
                                loading="lazy" />
                            <div>
                                <h3 className="w-full lg:h-[40px] h-[28px] font-semibold lg:text-[32px] text-[20px] lg:leading-[40px] leading-[28px] mt-2">
                                    INDIVIDUALS
                                </h3>
                                <p className="w-full lg:h-[72px] h-[50px] font-normal lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] text-[#56575d] lg:mt-6 mt-4"
                                    dangerouslySetInnerHTML={{ __html: travelData.individual_insurance_body }} />
                                <div className="flex gap-4">
                                    <div onClick={() => setIsIndModalOpen(true)} className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                        Insurance Features
                                    </div>
                                    <a href={ProductFlyer} download="Product_Flyers.pdf" className="w-[142px] h-[36px] bg-[#B580D1] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer rounded-lg shadow-md text-white flex items-center justify-center mt-6">
                                        Download Flyer
                                    </a>
                                </div>
                            </div>
                        </div>
                        {isIndModalOpen && (
                            <IndividualFeature closeModal={() => setIsIndModalOpen(false)} /> // Pass close function to the modal
                        )}
                    </div>
                </div>
            </section>

            <section>
                <div className="lg:p-20">
                    <div className="flex lg:flex-row flex-col w-full lg:h-[510px] md:h-[630px] h-[784px]">
                        <div className="flex-1 h-full">
                            <img src={travelbenefit} alt="travel" className="object-cover lg:h-full h-[320px] w-full" loading="lazy" />
                        </div>
                        <div className="flex-1 h-full flex lg:items-center justify-center p-4 lg:p-0">
                            <div className=" lg:w-[604px] lg:h-[380px] flex flex-col items-start justify-center gap-4">
                                <h2 className="text-black lg:text-[40px] text-[24px] lg:leading-[44px] leading-[32px] font-semibold">
                                    BENEFITS
                                </h2>
                                <span className="lg:w-[518px] lg:h-[48px] lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-semibold text-[#56575D]">
                                    The product has been designed with a combination of Enhanced term life which gives you an additional benefit.
                                </span>

                                <div className="pl-6">
                                    <ul className="list-disc flex flex-col gap-2">
                                        <li className="lg:text-[16px] text-[12px] text-[#56575D]">Payment of medical assistance for illness or accident sustained while travelling</li>
                                        <li className="lg:text-[16px] text-[12px] text-[#56575D]">Provides transport or repatriation for medical reasons for the insured and/or family members travelling with the insured</li>
                                        <li className="lg:text-[16px] text-[12px] text-[#56575D]">Provides transport or repatriation of mortal remains of insured</li>
                                        <li className="lg:text-[16px] text-[12px] text-[#56575D]">Communication of urgent messages related to any event covered in the policy</li>
                                        <li className="lg:text-[16px] text-[12px] text-[#56575D]">Payment of compensation for in-flight loss of checked-in luggage</li>
                                        <li className="lg:text-[16px] text-[12px] text-[#56575D]">Payment of compensation for delay of flight and delay of luggage.</li>
                                        <li className="lg:text-[16px] text-[12px] text-[#56575D]">Emergency return home following the death of a close family member</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PurpleTravel