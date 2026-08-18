import { Link, Route, Routes, useLocation } from "react-router-dom";
import RedMotor from "./RedMotor";
import Engineer from "./Engineer";
import Marine from "./Marine";
import "./global.css"

const RedProductDetails = () => {
    const location = useLocation();

    // Function to check if a link is active based on the current path
    const isActive = (path) => location.pathname === path;

    return (
        <div>
            {/* Scrollable Links Container */}
            <div className="px-4 h-[50px] flex items-center md:px-10 overflow-x-auto overflow-y-hidden scrollbar">
                <ul className="flex gap-3 whitespace-nowrap">
                    <li>
                        <Link
                            to="/corporate/business-insurance/motor"
                            className={`${isActive("/corporate/business-insurance/motor")
                                ? "text-[#FF0226] border-b-4 border-[#FF0226] font-bold"
                                : "text-gray-500"
                                } pb-2 text-sm md:text-base`}
                        >
                            Motor Insurance
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/corporate/business-insurance/engineering"
                            className={`${isActive("/corporate/business-insurance/engineering")
                                ? "text-[#FF0226] border-b-4 border-[#FF0226] font-bold"
                                : "text-gray-500"
                                } pb-2 text-sm md:text-base`}
                        >
                            Engineering Insurance
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/corporate/business-insurance/marine"
                            className={`${isActive("/corporate/business-insurance/marine")
                                ? "text-[#FF0226] border-b-4 border-[#FF0226] font-bold"
                                : "text-gray-500"
                                } pb-2 text-sm md:text-base`}
                        >
                            Marine Insurance
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Content Routes */}
            <div className="mt-6">
                <Routes>
                    <Route path="motor" element={<RedMotor />} />
                    <Route path="engineering" element={<Engineer />} />
                    <Route path="marine" element={<Marine />} />
                </Routes>
            </div>
        </div>
    );
};

export default RedProductDetails;
