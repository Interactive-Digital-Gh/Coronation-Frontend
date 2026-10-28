/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fetchCms } from "../lib/cmsCache";
import SmoothImage from "./SmoothImage";

const CMS_BASE = "https://coronation-cms.interactivedigital.com.gh";

const stripTags = (html = "") => html.replace(/<[^>]+>/g, "").trim();

/**
 * CMS stores "Full Name - Role" (or with an en/em dash). Split only on a dash
 * surrounded by spaces so hyphenated surnames like "Adom-Boateng" stay intact.
 */
const splitNameAndRole = (raw = "") => {
    const text = stripTags(raw);
    const parts = text.split(/\s+[-–—]\s+/);
    return {
        name: parts[0] || text,
        role: parts.slice(1).join(" · "),
    };
};

export default function Executive() {
    const [executives, setExecutives] = useState([]);
    const [active, setActive] = useState(null);
    const location = useLocation();
    const isRedAbout = location.pathname === "/corporate/about";

    const accentText = isRedAbout ? "text-[#FF0226]" : "text-[#B580D1]";
    const accentBg = isRedAbout ? "bg-[#FF0226]" : "bg-[#B580D1]";
    const accentRing = isRedAbout
        ? "focus-visible:ring-[#FF0226]"
        : "focus-visible:ring-[#B580D1]";

    // Fetch Executive Members from CMS
    useEffect(() => {
        const fetchExecutives = async () => {
            try {
                const res = await fetchCms(
                    `${CMS_BASE}/api/aboutus/executive-members/fetch`
                );

                if (!res.ok) throw new Error("Failed to fetch executive members");

                const json = await res.json();

                // Filter out Seth Sorgah – Head, Sales & Distribution
                const filtered = json.filter(
                    (member) => !member.name?.toLowerCase().includes("seth")
                );

                // Update Bridget Puorideme's role to Head of Sales and Distribution
                const updated = filtered.map((member) => {
                    if (member.name?.toLowerCase().includes("bridget")) {
                        return {
                            ...member,
                            name: member.name.replace(
                                /\s*[-–—].*$/s,
                                " - Head of Sales and Distribution"
                            ),
                        };
                    }
                    return member;
                });

                setExecutives(updated);
            } catch (error) {
                console.error("Executive API Error:", error);
            }
        };

        fetchExecutives();
    }, []);

    const closeProfile = useCallback(() => setActive(null), []);

    // Close on Escape and lock page scroll while the profile dialog is open
    useEffect(() => {
        if (!active) return undefined;
        const onKey = (e) => e.key === "Escape" && closeProfile();
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", onKey);
        };
    }, [active, closeProfile]);

    return (
        <div className="w-full py-20 px-4 lg:px-20 bg-white">
            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 max-w-3xl"
            >
                <span
                    className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${accentText}`}
                >
                    <span className={`h-px w-8 ${accentBg}`} aria-hidden="true" />
                    Leadership
                </span>
                <h2 className="mt-3 text-left text-[24px] lg:text-4xl font-bold leading-tight text-gray-900">
                    SEE OUR EXECUTIVE MANAGEMENT
                </h2>
                <p className="mt-3 text-[14px] lg:text-[16px] leading-relaxed text-[#56575D]">
                    The team steering Coronation Insurance Ghana, bringing decades of
                    experience across underwriting, finance, operations and people.
                </p>
            </motion.div>

            {/* CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {executives.map((item, index) => {
                    const { name, role } = splitNameAndRole(item.name);
                    const excerpt = stripTags(item.description);

                    return (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* PORTRAIT – fixed 4:5 frame, cropped instead of stretched */}
                            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F3F3F5]">
                                <SmoothImage
                                    src={`${CMS_BASE}/${item.image}`}
                                    alt={name}
                                    loading="lazy"
                                    decoding="async"
                                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                                />
                                <span
                                    className={`absolute bottom-0 left-0 h-1 w-0 ${accentBg} transition-all duration-500 group-hover:w-full`}
                                    aria-hidden="true"
                                />
                            </div>

                            {/* DETAILS */}
                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="text-lg font-bold leading-snug text-gray-900">
                                    {name}
                                </h3>
                                {role && (
                                    <p
                                        className={`mt-1 text-[13px] font-semibold uppercase tracking-wide ${accentText}`}
                                    >
                                        {role}
                                    </p>
                                )}

                                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
                                    {excerpt}
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setActive({ ...item, name, role })}
                                    className={`mt-auto inline-flex items-center gap-2 self-start pt-5 text-sm font-semibold ${accentText} focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded ${accentRing}`}
                                >
                                    Read full profile
                                    <svg
                                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <path d="M4 10h12M11 5l5 5-5 5" />
                                    </svg>
                                </button>
                            </div>
                        </motion.article>
                    );
                })}
            </div>

            {/* FULL PROFILE DIALOG */}
            {createPortal(
                <AnimatePresence>
                    {active && (
                        <motion.div
                            key="exec-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-[1000] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
                            onClick={closeProfile}
                        >
                            <motion.div
                                key="exec-dialog"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="exec-dialog-title"
                                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 40, scale: 0.98 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative grid max-h-[92vh] w-full max-w-5xl grid-rows-[auto_minmax(0,1fr)] overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:grid-rows-[minmax(0,1fr)] lg:grid-cols-[440px_1fr]"
                            >
                                {/* Close */}
                                <button
                                    type="button"
                                    onClick={closeProfile}
                                    aria-label="Close profile"
                                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md transition hover:bg-white hover:text-black"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        aria-hidden="true"
                                    >
                                        <path d="M5 5l10 10M15 5L5 15" />
                                    </svg>
                                </button>

                                {/* Portrait */}
                                <div className="relative h-72 w-full overflow-hidden bg-[#F3F3F5] sm:h-80 md:h-auto md:min-h-[520px] md:self-stretch">
                                    <SmoothImage
                                        src={`${CMS_BASE}/${active.image}`}
                                        alt={active.name}
                                        className="absolute inset-0 h-full w-full object-cover object-top"
                                    />
                                    <span
                                        className={`absolute bottom-0 left-0 h-1 w-full md:bottom-auto md:left-auto md:right-0 md:top-0 md:h-full md:w-1 ${accentBg}`}
                                        aria-hidden="true"
                                    />
                                </div>

                                {/* Bio */}
                                <div className="min-h-0 overflow-y-auto p-6 sm:p-8 lg:p-10">
                                    <span
                                        className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${accentText}`}
                                    >
                                        <span className={`h-px w-6 ${accentBg}`} aria-hidden="true" />
                                        Executive Management
                                    </span>
                                    <h3
                                        id="exec-dialog-title"
                                        className="mt-3 text-2xl font-bold leading-tight text-gray-900 lg:text-3xl"
                                    >
                                        {active.name}
                                    </h3>
                                    {active.role && (
                                        <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-gray-500">
                                            {active.role}
                                        </p>
                                    )}
                                    <div
                                        className="mt-6 text-[15px] leading-relaxed text-gray-700 [&_p]:mb-4 [&_p:last-child]:mb-0 [&_strong]:text-gray-900 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_a]:underline"
                                        dangerouslySetInnerHTML={{ __html: active.description }}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
}
