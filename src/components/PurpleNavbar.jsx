import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and close icons

const PurpleNavbar = () => {
    const location = useLocation();
    const navigate = useNavigate();  // Use navigate to redirect
    const [activeLink, setActiveLink] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Watch for location changes and update the active link accordingly
    useEffect(() => {
        if (location.pathname.startsWith('/corporate') || location.pathname.startsWith('/red')) {
            setActiveLink('institution');
        } else {
            setActiveLink('individual');
        }
    }, [location.pathname]);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsMobileMenuOpen(false); // Close mobile menu on link click
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Handle logo click to navigate to home page
    const handleLogoClick = () => {
        if (activeLink === 'individual') {
            navigate('/');  // Navigate to the home page for 'individual'
        } else if (activeLink === 'institution') {
            navigate('/corporate');  // Navigate to the home page for 'institution'
        }
    };

    return (
        <div className="overflow-hidden">
            {/* First Navbar */}
            <div className="flex flex-col lg:flex-row-reverse bg-[#F7F7F8] w-full items-start px-4 py-2 md:px-10 md:flex-row md:items-center md:justify-between">
                <div className="text-[#888991] text-[12px] md:text-[14px] font-medium leading-[20px]">
                    Working Hours: <span className="text-[#56575d]">Mon-Fri: 08:00AM - 05:00PM</span>
                </div>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <Link
                        to="/"
                        onClick={() => handleLinkClick('individual')}
                        className={`text-[14px] leading-[20px] font-medium transform transition duration-300 hover:scale-105 ${activeLink === 'individual' ? 'text-[#B580D1] font-bold' : 'text-[#888991]'}`}
                    >
                        Individual
                        {activeLink === 'individual' && (
                            <div className="w-full h-[2px] bg-[#B580D1] mt-1" />
                        )}
                    </Link>
                    <Link
                        to="/corporate"
                        onClick={() => handleLinkClick('institution')}
                        className={`text-[14px] leading-[20px] font-medium transform transition duration-300 hover:scale-105 ${activeLink === 'institution' ? 'text-[#FF0226] font-bold' : 'text-[#888991]'}`}
                    >
                        Corporate
                        {activeLink === 'institution' && (
                            <div className="w-full h-[2px] bg-[#FF0226] mt-1" />
                        )}
                    </Link>
                </div>
            </div>

            {/* Conditional Second Navbar */}
            <div className="flex w-full h-[60px] items-center justify-between px-4 py-2 md:px-10">
                <div className="flex items-center gap-4">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-32 h-auto cursor-pointer"
                        loading="lazy"
                        onClick={handleLogoClick}  // Add onClick handler to the logo
                    />
                    {/* Desktop Links */}
                    <ul className="hidden md:flex flex-row gap-4">
                        {activeLink === 'individual' ? (
                            <>
                                <Link to="/about-us"><li className="text-[#56575d] hover:scale-105 transform transition duration-300 text-[14px] leading-[20px]">About Us</li></Link>
                                <Link to="/personal-insurance"><li className="text-[#56575d] hover:scale-105 transform transition duration-300 text-[14px] leading-[20px]">Product & Solutions</li></Link>
                                <Link to="/motor-insurance-ghana"><li className="text-[#56575d] hover:scale-105 transform transition duration-300 text-[14px] leading-[20px]">Motor Insurance</li></Link>
                                <Link to="/insights"><li className="text-[#56575d] hover:scale-105 transform transition duration-300 text-[14px] leading-[20px]">Insights</li></Link>
                                <Link to="/careers"><li className="text-[#56575d] hover:scale-105 transform transition duration-300 text-[14px] leading-[20px]">Careers</li></Link>
                                <Link to="/contact-us"><li className="text-[#56575d] hover:scale-105 transform transition duration-300 text-[14px] leading-[20px]">Contact Us</li></Link>
                                <Link to="/our-offices"><li className="text-[#56575d] hover:scale-105 transform transition duration-300 text-[14px] leading-[20px]">Offices</li></Link>
                            </>
                        ) : (
                            <>
                                <Link to="/corporate/about-us"><li className="text-[#56575d] hover:scale-105 transform transition duration-300 text-[14px] leading-[20px]">About Us</li></Link>
                                <Link to="/corporate/business-insurance"><li className="text-[#56575d] hover:scale-105 transform transition duration-300 text-[14px] leading-[20px]">Product & Solutions</li></Link>
                                <Link to="/corporate/motor-insurance-ghana"><li className="text-[#56575d] hover:scale-105 transform transition duration-300 text-[14px] leading-[20px]">Motor Insurance</li></Link>
                                <Link to="/corporate/insights"><li className="text-[#56575d] hover:scale-105 transform transition duration-300 text-[14px] leading-[20px]">Insights</li></Link>
                                <Link to="/corporate/careers"><li className="text-[#56575d] hover:scale-105 transform transition duration-300 text-[14px] leading-[20px]">Careers</li></Link>
                                <Link to="/corporate/contact-us"><li className="text-[#56575d] hover:scale-105 transform transition duration-300 text-[14px] leading-[20px]">Contact Us</li></Link>
                                <Link to="/corporate/our-offices"><li className="text-[#56575d] hover:scale-105 transform transition duration-300 text-[14px] leading-[20px]">Offices</li></Link>
                            </>
                        )}
                    </ul>
                </div>

                {/* Self Service Button based on activeLink */}
                {activeLink === 'individual' ? (
                    <div className="lg:flex hidden md:flex items-center justify-center w-[112px] h-[44px] rounded-lg bg-[#B580D1] text-white">
                        <Link to="/self-service">Self Service</Link>
                    </div>
                ) : (
                    <div className="lg:flex hidden md:flex items-center justify-center w-[112px] h-[44px] rounded-lg bg-[#FF0226] text-white">
                        <Link to="/corporate/self-service">Self Service</Link>
                    </div>
                )}

                {/* Hamburger Menu Icon (Mobile View) */}
                <button
                    className={`md:hidden p-3 rounded-lg text-white ${activeLink === 'individual' ? 'bg-[#B580D1]' : 'bg-[#FF0226]'}`}
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu (shown when hamburger icon is clicked) */}
            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-col gap-4 px-4 py-4 bg-[#F7F7F8]">
                    {activeLink === 'individual' ? (
                        <>
                            <Link to="/about-us" onClick={() => handleLinkClick('about')}>About Us</Link>
                            <Link to="/personal-insurance" onClick={() => handleLinkClick('product')}>Product & Solutions</Link>
                            <Link to="/motor-insurance-ghana" onClick={() => handleLinkClick('motor')}>Motor Insurance</Link>
                            <Link to="/insights" onClick={() => handleLinkClick('insights')}>Insights</Link>
                            <Link to="/careers" onClick={() => handleLinkClick('careers')}>Careers</Link>
                            <Link to="/contact-us" onClick={() => handleLinkClick('contact')}>Contact Us</Link>
                            <Link to="/our-offices" onClick={() => handleLinkClick('offices')}>Offices</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/corporate/about-us" onClick={() => handleLinkClick('about')}>About</Link>
                            <Link to="/corporate/business-insurance" onClick={() => handleLinkClick('product')}>Product & Solutions</Link>
                            <Link to="/corporate/motor-insurance-ghana" onClick={() => handleLinkClick('motor')}>Motor Insurance</Link>
                            <Link to="/corporate/insights" onClick={() => handleLinkClick('insights')}>Insights</Link>
                            <Link to="/corporate/careers" onClick={() => handleLinkClick('careers')}>Careers</Link>
                            <Link to="/corporate/contact-us" onClick={() => handleLinkClick('contact')}>Contact Us</Link>
                            <Link to="/corporate/our-offices" onClick={() => handleLinkClick('offices')}>Offices</Link>
                        </>
                    )}

                    {/* Self Service Button based on activeLink */}
                    {activeLink === 'individual' ? (
                        <div className="flex items-center justify-center w-[112px] h-[44px] rounded-lg bg-[#B580D1] text-white">
                            <Link to="/self-service">Self Service</Link>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center w-[112px] h-[44px] rounded-lg bg-[#FF0226] text-white">
                            <Link to="/corporate/self-service">Self Service</Link>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default PurpleNavbar;
