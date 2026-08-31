import { Link, Route, Routes, useLocation } from "react-router-dom";
import PurpleMotor from "./PurpleMotor";
import PurpleTravel from "./PurpleTravel";
import PurpleHomeInsurance from "./PurpleHomeInsurance";
import SEO from "../components/SEO";

const PurpleProductDetails = () => {
    const location = useLocation();

    // Function to check if a link is active based on the current path
    const isActive = (path) => location.pathname === path;

    return (
        <div>
            <SEO
                title="Personal Insurance Details | Coronation Insurance Ghana"
                description="Explore detailed personal insurance products from Coronation Insurance Ghana including motor, travel and home insurance options for individuals."
                keywords="personal insurance details, motor insurance, travel insurance, home insurance, Coronation Insurance Ghana"
            />
            <div className="px-4 md:px-10">
                <ul className="flex flex-wrap gap-2 md:gap-4">
                    <li>
                        <Link
                            to="/personal-insurance/motor"
                            className={`${isActive("/personal-insurance/motor")
                                ? "text-purple-500 border-b-4 border-purple-500 font-bold"
                                : "text-gray-500"
                                } pb-2 text-sm md:text-base`}
                        >
                            Motor Insurance
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/personal-insurance/travel"
                            className={`${isActive("/personal-insurance/travel")
                                ? "text-purple-500 border-b-4 border-purple-500 font-bold"
                                : "text-gray-500"
                                } pb-2 text-sm md:text-base`}
                        >
                            Travel Insurance
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/personal-insurance/home"
                            className={`${isActive("/personal-insurance/home")
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
