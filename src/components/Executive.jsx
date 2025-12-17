/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Executive() {
    const [executives, setExecutives] = useState([]);
    const [expanded, setExpanded] = useState({});
    const location = useLocation();
    const isRedAbout = location.pathname === "/redabout";

    // Fetch Executive Members from CMS
    useEffect(() => {
        const fetchExecutives = async () => {
            try {
                const res = await fetch(
                    "https://coronation-cms.interactivedigital.com.gh/api/aboutus/executive-members/fetch"
                );

                if (!res.ok) throw new Error("Failed to fetch executive members");

                const json = await res.json();
                console.log("Executive API Response:", json);

                setExecutives(json); // API returns array directly
            } catch (error) {
                console.error("Executive API Error:", error);
            }
        };

        fetchExecutives();
    }, []);

    const toggleReadMore = (id) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="w-full py-20 px-4 lg:px-20 bg-white">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-left text-[20px] lg:text-4xl font-bold mb-12"
            >
                SEE OUR EXECUTIVE MANAGEMENT
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {executives.map((item) => {
                    const plainText = item.description.replace(/<[^>]+>/g, "");
                    const isLong = plainText.length > 200;
                    const isOpen = expanded[item.id];

                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden bg-white"
                        >
                            {/* IMAGE */}
                            <img
                                src={`https://coronation-cms.interactivedigital.com.gh/${item.image}`}
                                alt={item.name}
                                className="w-full h-[350px] object-center"
                            />

                            {/* TEXT CARD */}
                            <div className="bg-black text-white p-6 h-[330px] flex flex-col justify-between">

                                {/* NAME */}
                                <h3
                                    className="font-semibold text-lg mb-2"
                                    dangerouslySetInnerHTML={{ __html: item.name }}
                                />

                                {/* BODY */}
                                <div className="text-sm text-gray-300 leading-relaxed overflow-y-auto pr-1 h-[190px]">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: isOpen
                                                ? item.description
                                                : plainText.substring(0, 200),
                                        }}
                                    />
                                    {!isOpen && isLong && " ..."}
                                </div>

                                {/* READ MORE BUTTON */}
                                {isLong && (
                                    <button
                                        className={`mt-4 p-2 font-semibold border-2 hover:underline 
                                            ${isRedAbout
                                                ? "text-[#FF0226] border-[#FF0226]"
                                                : "text-[#B580D1] border-[#B580D1]"
                                            }`}
                                        onClick={() => toggleReadMore(item.id)}
                                    >
                                        {isOpen ? "READ LESS" : "READ MORE"}
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
