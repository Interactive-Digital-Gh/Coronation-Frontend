/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";
import { fetchCms } from '../lib/cmsCache';
import home6 from "../assets/purplehomeIns/home6.png";
import "./globalfeature.css";
import { useEffect, useState } from "react";

const HouseHolderFeature = ({ closeModal }) => { // Receive closeModal as prop
    const [homeInsData, setHomeInsData] = useState(null);


    useEffect(() => {
        const fetchhomeData = async () => {
            try {
                const data = await fetchCms('https://coronation-cms.interactivedigital.com.gh/api/home/individual/fetch');
                console.log('purple homeIns Data:', data);
                setHomeInsData(data[0]);
            } catch (error) {
                console.error('Error fetching homeIns data:', error);
            }
        };
        fetchhomeData();
    }, []);

    // Check if either aboutData or bodData is still loading
    if (!homeInsData) {
        return <div>Loading...</div>;
    }
    return (
        <div className="modal-overlay">
            <div className="content lg:h-[580px] h-[680px]">
                <button className="close-button absolute lg:top-[10px] top-[15px] lg:right-[10px] right-[15px]" onClick={closeModal}> {/* Close modal on click */}
                    <FaTimes size={30} className="text-black" />
                </button>
                <div className="flex lg:flex-row flex-col">
                    <div className="flex-1">
                        <img src={home6} alt="motor" className="object-cover  w-full lg:h-[548px] h-[180px]" loading="lazy" />
                    </div>
                    <div className="flex-1 pt-3">
                        <div className="text-[24px] lg:pl-2 pl-0 leading-[32px] font-semibold">HOUSEHOLDERS</div>
                        <div className="pl-6 mt-2">
                            <ul className="list-disc flex flex-col gap-2">
                                <li className="text-[14px] text-[#56575D]"
                                    dangerouslySetInnerHTML={{ __html: homeInsData.householder_ins_features }} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseHolderFeature;
