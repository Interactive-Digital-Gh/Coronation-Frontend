/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";
import { fetchCms } from '../lib/cmsCache';
// import marinemainbg from "../assets/marine/marinemainbg.png"
import "./globalfeature.css";
import { useEffect, useState } from "react";

const MarinehullFeature = ({ closeModal }) => {

    const [marineData, setMarineData] = useState(null);


    useEffect(() => {
        const fetchmarineData = async () => {
            try {
                const data = await fetchCms('https://coronation-cms.interactivedigital.com.gh/api/institute/marine/fetch');
                console.log('purple marine Data:', data);
                setMarineData(data[0]);
            } catch (error) {
                console.error('Error fetching marine data:', error);
            }
        };
        fetchmarineData();
    }, []);

    // Check if either aboutData or bodData is still loading
    if (!marineData) {
        return <div>Loading...</div>;
    }
    return (
        <div className="modal-overlay">
            <div className="content lg:h-[580px] h-[680px]">
                <button className="close-button absolute lg:top-[10px] top-[15px] lg:right-[10px] right-[15px]" onClick={closeModal}>
                    <FaTimes size={30} className="lg:text-black text-white" />
                </button>
                <div className="flex lg:flex-row flex-col">
                    <div className="flex-1">
                        <img
                            src={marineData?.marine_hull_features_image ? `https://coronation-cms.interactivedigital.com.gh/${marineData.marine_hull_features_image}` : "assets/purplemotor/motorbg.png"}
                            className="object-cover w-full lg:h-[548px] h-[180px]" loading="lazy" />
                    </div>
                    <div className="flex-1 pt-3">
                        <div className="text-[24px] lg:pl-2 pl-0 leading-[32px] font-semibold">
                            Marine Hull
                        </div>
                        <div className="pl-6 mt-2">
                            <ul className="list-disc flex flex-col gap-2">
                                <li className="text-[14px] text-[#56575D]"
                                    dangerouslySetInnerHTML={{ __html: marineData.marine_hull_features }} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarinehullFeature;
