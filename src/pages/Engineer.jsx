/* eslint-disable react/no-unescaped-entities */
import "./global.css"
// import motorbg from "../assets/purplemotor/motorbg.png"
// import hero1 from "../assets/redmotor/redmotor.png"
// import hero2 from "../assets/engineer/engineer3.png"
// import engineer6 from "../assets/engineer/engineer6.png"
import { useEffect, useState } from "react";

import travelmob from "../assets/purpletravel/travelmob.png"
// import travelbenefit from "../assets/purpletravel/travelbenefit.png"
import { Link } from "react-router-dom"
import PlantRiskFeature from "../features/PlantRiskFeature"
import ContractorFeature from "../features/ContractorFeature"
import MachineFeature from "../features/MachineFeature"
import ErectionFeature from "../features/ErectionFeature"
import ElectronicFeature from "../features/ElectronicFeature"
import ProductFlyer from "../assets/Product_Flyers  .pdf"


const Engineer = () => {

    const [plantOpen, setPlantOpen] = useState(false);
    const [contractorOpen, setContractorOpen] = useState(false);
    const [machineOpen, setMachineOpen] = useState(false);
    const [erectionOpen, setErectionOpen] = useState(false);
    const [electronicOpen, setElectronicOpen] = useState(false);

    const [engineerData, setEngineerData] = useState(null);
    const [showLoader, setShowLoader] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);


    useEffect(() => {
        const fetchengineerData = async () => {
            try {
                const response = await fetch('https://coronation-cms.interactivedigital.com.gh/api/institute/engineering/fetch');
                const data = await response.json();
                console.log('purple engineer Data:', data);
                setEngineerData(data[0]);
                // Start 2-second loader timer only after data arrives
                setTimeout(() => {
                    setFadeOut(true); // start fade
                    setTimeout(() => setShowLoader(false), 500); // hide after fade
                }, 2000);
            } catch (error) {
                console.error('Error fetching engineer data:', error);
            }
        };
        fetchengineerData();
    }, []);

    // Check if either aboutData or bodData is still loading
    if (!engineerData || showLoader) {
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
            <div className="flex lg:flex-row flex-col-reverse w-full lg:h-[450px] h-[678px]">
                <div className="flex-1 flex-col bg-[#EFEFF0] flex lg:items-center justify-center">
                    <div className="p-4">
                        <h2 className="lg:text-[56px] text-[32px] lg:leading-[64px] leading-[40px] font-bold"
                            dangerouslySetInnerHTML={{ __html: engineerData.header_caption }} />
                        <p className="lg:w-[560px] md:w-[700px] w-[319px] lg:text-[16px] text-[12px] leading-[20px] font-medium text-[#56575D] mt-4"
                            dangerouslySetInnerHTML={{ __html: engineerData.header_body }} />

                    </div>
                </div>
                <div className="flex-1">
                    <img
                        src={engineerData?.header_image ? `https://coronation-cms.interactivedigital.com.gh/${engineerData.header_image}` : "assets/purplemotor/motorbg.png"}
                        className="hidden lg:flex bg-cover w-full h-full"
                        loading="lazy" />
                    <img src={travelmob} alt="about" className="flex lg:hidden bg-cover w-full h-[458px]" loading="lazy" />
                </div>
                <div className="glass absolute bg-[#FF0226] bg-opacity-70 lg:bottom-[112px] md:bottom-[200px] msm:bottom-[146px]
                nsm:bottom-[262px] small:bottom-[298px] xsm:bottom-[33px] xxsm:bottom-[210px] rsm:bottom-[282px]
                bottom-[220px] right-0 lg:w-[385px] w-[243px] lg:h-[164px] h-[140px]">
                    <div className="lg:p-4 p-2">
                        <span className="text-white w-[300px] h-[32px] lg:text-[24px] leading-[32px] font-semibold">My Insurance Account</span>
                        <p className="text-white lg:text-[16px] text-[12px] leading-[24px] font-normal lg:mt-2 mt-0">
                            Want to know more about our services? Let's talk
                        </p>
                        <div className="flex lg:mt-5 mt-2 lg:w-[116px] w-[95px] h-[36px] bg-black font-semibold lg:text-[14px] text-[10px] leading-[20px] text-white items-center justify-center">
                            <Link to="https://ecoronation.com/motor" target='_blank' rel='noopener noreferrer'>
                                GET A QUOTE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="w-full h-[250px] bg-black lg:px-20 px-4 items-center lg:py-12 md:py-20 py-10">
                    <div className="flex flex-col">
                        <h3 className="text-white lg:text-[40px] text-[24px] lg:leading-[44px] leading-[32px] font-bold lg:w-[572px]">
                            WHY CHOOSE CORONATION INSURANCE GHANA LTD?
                        </h3>
                        <div className="flex items-center mt-4">
                            <span className="text-white lg:text-[18px] md:text-[16px] text-[14px] leading-[24px] font-normal w-[703px] h-[48px]">
                                No matter where you are in the world, you’ll enjoy the support and cover you need. There’s a reason we’re one of Africa’s most respected insurance companies.                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full lg:h-[800px] md:h-[900px] h-[1600px] lg:px-28 px-4 small:p-10 lg:py-20 py-10">
                    <div className="flex lg:flex-row md:flex-row flex-col gap-6 lg:w-[1280px] h-full">
                        <div className="lg:w-[627px] w-[347px] lg:h-[770px] md:h-[790px] h-[690px] p-4 border border-b-4 border-b-[#FF0226] bg-white rounded-lg shadow-lg">
                            <img
                                src={engineerData?.plant_all_risk_image ? `https://coronation-cms.interactivedigital.com.gh/${engineerData.plant_all_risk_image}` : "assets/purplemotor/motorbg.png"}
                                className="lg:w-full w-[343px] lg:h-[280px] h-[220px] rounded-lg bg-cover"
                                loading="lazy" />
                            <div>
                                <h3 className="w-full lg:h-[40px] h-[28px] font-semibold lg:text-[32px] text-[20px] lg:leading-[40px] leading-[28px] mt-2">
                                    Plant All - Risk
                                </h3>
                                <div className="pl-6 mt-2">
                                    <ul className="list-disc flex flex-col gap-2">
                                        <li className="text-[14px] text-[#56575D]"
                                            dangerouslySetInnerHTML={{ __html: engineerData.plant_all_risk_body }} />
                                    </ul>
                                </div>
                                <div className="flex gap-4">
                                    <div onClick={() => setPlantOpen(true)} className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer 
                                    shadow-md text-black flex items-center justify-center lg:mt-32 md:mt-24 mt-4">
                                        Insurance Features
                                    </div>
                                    <a href={ProductFlyer} download="Product_Flyers.pdf" className="w-[142px] h-[36px] bg-[#FF0226] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer rounded-lg shadow-md text-white flex items-center justify-center lg:mt-32 md:mt-24 mt-4">
                                        Download Flyer
                                    </a>
                                </div>
                            </div>
                        </div>
                        {plantOpen && (
                            <PlantRiskFeature closeModal={() => setPlantOpen(false)} /> // Pass close function to the modal
                        )}
                        <div className="lg:w-[627px] w-[347px] lg:h-[770px] md:h-[790px] h-[750px] p-4 border border-b-4 border-b-[#FF0226] bg-white rounded-lg shadow-lg">
                            <img
                                src={engineerData?.contractors_all_risk_body ? `https://coronation-cms.interactivedigital.com.gh/${engineerData.contractors_all_risk_body}` : "assets/purplemotor/motorbg.png"}
                                className="lg:w-full w-[343px] lg:h-[280px] h-[220px] rounded-lg bg-cover"
                                loading="lazy" />
                            <div>
                                <h3 className="w-full lg:h-[40px] h-[28px] font-semibold lg:text-[32px] text-[20px] lg:leading-[40px] leading-[28px] mt-2">
                                    Contractors All - Risk
                                </h3>
                                <div className="pl-6 mt-2">
                                    <ul className="list-disc flex flex-col gap-2">
                                        <li className="text-[14px] text-[#56575D]"
                                            dangerouslySetInnerHTML={{ __html: engineerData.contractors_all_risk_body }} />
                                    </ul>
                                </div>
                                <div className="flex gap-4">
                                    <div onClick={() => setContractorOpen(true)} className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                        Insurance Features
                                    </div>
                                    <a href={ProductFlyer} download="Product_Flyers.pdf" className="w-[142px] h-[36px] bg-[#FF0226] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer rounded-lg shadow-md text-white flex items-center justify-center mt-6">
                                        Download Flyer
                                    </a>
                                </div>
                            </div>
                        </div>
                        {contractorOpen && (
                            <ContractorFeature closeModal={() => setContractorOpen(false)} /> // Pass close function to the modal
                        )}
                    </div>
                </div>
            </section>

            <section>
                <div className="flex lg:flex-row flex-col lg:mt-40 mt-0 lg:px-28 px-0 lg:gap-10 gap-6">
                    <div>
                        <img
                            src={engineerData?.machinery_breakdown_image ? `https://coronation-cms.interactivedigital.com.gh/${engineerData.machinery_breakdown_image}` : "assets/purplemotor/motorbg.png"}
                            className="w-[628px] md:ml-[70px] lg:ml-0 ml-0 h-[452px]"
                            loading="lazy" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="lg:w-[467px] md:w-[650px] w-[375px] lg:h-[328px] md:h-[300px] h-[400px] px-4 lg:px-0">
                            <h3 className="w-full lg:h-[40px] h-[28px] font-semibold lg:text-[32px] text-[20px] lg:leading-[40px] leading-[28px] mt-2">
                                Machinery Breakdown
                            </h3>
                            <p className="mt-2"
                                dangerouslySetInnerHTML={{ __html: engineerData.machinery_breakdown_body }} />
                            <div className="flex gap-4">
                                <div onClick={() => setMachineOpen(true)} className="w-[142px] h-[36px] bg-[#FF0226] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-white flex items-center justify-center mt-6">
                                    Insurance Features
                                </div>
                                <div className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                    <Link to="/redcontact">Contact Us</Link>
                                </div>
                                <a href={ProductFlyer} download="Product_Flyers.pdf" className="w-[142px] h-[36px] bg-[#FF0226] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer rounded-lg shadow-md text-white flex items-center justify-center mt-6">
                                    Download Flyer
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {machineOpen && (
                    <MachineFeature closeModal={() => setMachineOpen(false)} /> // Pass close function to the modal
                )}
            </section>

            <section>
                <div className="flex lg:flex-row flex-col-reverse items-center justify-between lg:px-32 px-0 lg:mt-40 mt-4 lg:gap-10 gap-6">
                    <div className="flex flex-col items-center justify-center">
                        <div className="lg:w-[467px] md:w-[650px] w-[375px] lg:h-[328px] md:h-[300px] h-[400px] px-4 lg:px-0">
                            <h3 className="w-full lg:h-[40px] h-[28px] font-semibold lg:text-[32px] text-[20px] lg:leading-[40px] leading-[28px] mt-2">
                                Erection All - Risk
                            </h3>
                            <div className="pl-6 mt-2">
                                <ul className="list-disc flex flex-col gap-2">
                                    <li className="text-[14px] text-[#56575D]"
                                        dangerouslySetInnerHTML={{ __html: engineerData.erection_all_body }} />
                                </ul>
                            </div>
                            <div className="flex gap-4">
                                <div onClick={() => setErectionOpen(true)} className="w-[142px] h-[36px] bg-[#FF0226] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-white flex items-center justify-center mt-6">
                                    Insurance Features
                                </div>
                                <div className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                    <Link to="/redcontact">Contact Us</Link>
                                </div>
                                <a href={ProductFlyer} download="Product_Flyers.pdf" className="w-[142px] h-[36px] bg-[#FF0226] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer rounded-lg shadow-md text-white flex items-center justify-center mt-6">
                                    Download Flyer
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img
                            src={engineerData?.erection_all_image ? `https://coronation-cms.interactivedigital.com.gh/${engineerData.erection_all_image}` : "assets/purplemotor/motorbg.png"}
                            className="w-[628px] h-[452px]"
                            loading="lazy" />
                    </div>
                </div>
                {erectionOpen && (
                    <ErectionFeature closeModal={() => setErectionOpen(false)} /> // Pass close function to the modal
                )}
            </section>

            <section>
                <div className="flex lg:flex-row flex-col lg:mt-40 mt-0 lg:px-28 px-0 lg:gap-10 gap-6">
                    <div>
                        <img
                            src={engineerData?.computer_all_risk_image ? `https://coronation-cms.interactivedigital.com.gh/${engineerData.computer_all_risk_image}` : "assets/purplemotor/motorbg.png"}
                            className="w-[628px] md:ml-[70px] lg:ml-0 ml-0 h-[452px]"
                            loading="lazy" />
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="lg:w-[467px] md:w-[650px] w-[375px] lg:h-[328px] md:h-[300px] h-[430px] px-4 lg:px-0 mt-4 lg:mt-0">
                            <h3 className="lg:w-[437PX] w-[307px] lg:h-[88px] h-[50px] font-semibold lg:text-[32px] text-[20px] lg:leading-[40px] leading-[28px] mt-2">
                                Electronic Equipment Computer All - Risk
                            </h3>
                            <p className="mt-2">
                                A Computer All Risk Policy seeks to cover electronic equipment risks ranging from all sudden and unforeseen physical losses,
                                which are not subject of exclusions, listed in insurance conditions
                            </p>
                            <div className="pl-6 mt-2">
                                <ul className="list-disc flex flex-col gap-2">
                                    <li className="text-[14px] text-[#56575D]"
                                        dangerouslySetInnerHTML={{ __html: engineerData.computer_all_risk_body }} />
                                </ul>
                            </div>
                            <div className="flex gap-4">
                                <div onClick={() => setElectronicOpen(true)} className="w-[142px] h-[36px] bg-[#FF0226] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-white flex items-center justify-center mt-6">
                                    Insurance Features
                                </div>
                                <div className="w-[142px] h-[36px] bg-[#F7F7F8] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer shadow-md text-black flex items-center justify-center mt-6">
                                    <Link to="/redcontact">Contact Us</Link>
                                </div>
                                <a href={ProductFlyer} download="Product_Flyers.pdf" className="w-[142px] h-[36px] bg-[#FF0226] font-semibold lg:text-[14px] text-[12px] leading-[20px] cursor-pointer rounded-lg shadow-md text-white flex items-center justify-center mt-6">
                                    Download Flyer
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {electronicOpen && (
                    <ElectronicFeature closeModal={() => setElectronicOpen(false)} /> // Pass close function to the modal
                )}
            </section>

            <section>
                <div className="lg:p-20 p-4 small:p-10">
                    <div className="w-full lg:h-[450px] md:h-[550px] h-[900px]">
                        <div className="w-full h-[108px]">
                            <h2 className="text-[40px] leading-[44px] font-semibold">BENEFITS</h2>
                            <div className="flex lg:flex-row flex-col lg:items-center justify-between mt-2">
                                <span className="lg:w-[518px] md:w-[400px] w-[296px] lg:h-[48px] h-[60px] text-[14px] leading-[20px] text-[#56575D]"
                                    dangerouslySetInnerHTML={{ __html: engineerData.benefits_body }} />
                            </div>
                        </div>
                        <div className="flex lg:flex-row md:flex-row flex-col lg:gap-4 gap-8 lg:mt-4 mt-10">
                            <div className="flex-1 flex flex-col lg:h-[350px] md:h-[350px] h-[600px] w-[347px] gap-4 bg-white border-4 border-t-1 border-x-0 border-b-[#FF0226] rounded-lg shadow-md p-4">
                                <div className="lg:h-[252px] h-full">
                                    <div className="lg:text-[24px] text-[18px] lg:leading-[32px] leading-[24px] font-semibold">COMPREHENSIVE INSURANCE</div>
                                    <div className="pl-6 mt-2">
                                        <ul className="list-disc flex flex-col gap-2">
                                            <li className="lg:text-[16px] text-[12px] text-[#56575D]"
                                                dangerouslySetInnerHTML={{ __html: engineerData.comprehensive_benefits }} />
                                        </ul>
                                    </div>
                                </div>
                                <Link to="https://ecoronation.com/motor" target='_blank' rel='noopener noreferrer'
                                    className="font-semibold text-[14px] leading-[20px] text-black lg:mt-6 md:mt-0">
                                    Learn More
                                </Link>
                            </div>
                            <div className="flex-1 flex flex-col lg:h-[350px] h-[350px] w-[347px] gap-4 bg-white border-4 border-t-1 border-x-0 border-b-[#FF0226] rounded-lg shadow-md p-4">
                                <div className="lg:h-[252px]">
                                    <div className="lg:text-[24px] text-[18px] lg:leading-[32px] leading-[24px] font-semibold">THIRD PARTY FIRE & THEFT</div>
                                    <div className="pl-6 mt-2">
                                        <ul className="list-disc flex flex-col gap-2">
                                            <li className="lg:text-[16px] text-[12px] text-[#56575D]"
                                                dangerouslySetInnerHTML={{ __html: engineerData.tp_fire_theft_benefits }} />
                                        </ul>
                                    </div>
                                </div>
                                <Link to="https://ecoronation.com/motor" target='_blank' rel='noopener noreferrer'
                                    className="font-semibold text-[14px] leading-[20px] text-black mt-6">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Engineer