import { Link, Route, Routes, useLocation } from "react-router-dom";
import PurpleMotor from "./PurpleMotor";
import PurpleTravel from "./PurpleTravel";
import PurpleHomeInsurance from "./PurpleHomeInsurance";

const PurpleProductDetails = () => {
    const location = useLocation();

    // Function to check if a link is active based on the current path
    const isActive = (path) => location.pathname === path;

    return (
        <div>
            <div className="px-4 md:px-10">
                <ul className="flex flex-wrap gap-2 md:gap-4">
                    <li>
                        <Link
                            to="/individual/products/motor"
                            className={`${isActive("/individual/products/motor")
                                ? "text-purple-500 border-b-4 border-purple-500 font-bold"
                                : "text-gray-500"
                                } pb-2 text-sm md:text-base`}
                        >
                            Motor Insurance
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/individual/products/travel"
                            className={`${isActive("/individual/products/travel")
                                ? "text-purple-500 border-b-4 border-purple-500 font-bold"
                                : "text-gray-500"
                                } pb-2 text-sm md:text-base`}
                        >
                            Travel Insurance
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/individual/products/home"
                            className={`${isActive("/individual/products/home")
                                ? "text-purple-500 border-b-4 border-purple-500 font-bold"
                                : "text-gray-500"
                                } pb-2 text-sm md:text-base`}
                        >
                            Home Insurance
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="mt-6">
                <Routes>
                    <Route path="motor" element={<PurpleMotor />} />
                    <Route path="travel" element={<PurpleTravel />} />
                    <Route path="home" element={<PurpleHomeInsurance />} />
                </Routes>
            </div>
        </div>
    );
};

export default PurpleProductDetails;
