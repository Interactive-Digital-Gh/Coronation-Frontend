/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

// Full class names per brand so Tailwind can see them at build time.
const THEMES = {
    purple: {
        glow: 'hover:shadow-[#B580D1]/40',
        ring: 'group-hover:ring-[#B580D1]/70',
        dot: 'bg-[#B580D1]',
        cta: 'text-[#D8B9EA]',
    },
    red: {
        glow: 'hover:shadow-[#FF0226]/40',
        ring: 'group-hover:ring-[#FF0226]/70',
        dot: 'bg-[#FF0226]',
        cta: 'text-[#FF9FAC]',
    },
};

const SIZES = {
    featured: {
        image: 'h-[220px] md:h-[320px] lg:h-[400px]',
        body: 'lg:px-5 lg:pt-5 lg:pb-4 px-3 pt-4 pb-3',
        title: 'lg:text-[24px] text-[18px]',
        excerpt: 'hidden md:line-clamp-2 lg:text-[15px] text-[13px]',
        chip: 'top-3 left-3 text-[11px] px-3 py-1.5',
        cta: 'text-sm',
    },
    md: {
        image: 'h-[280px]',
        body: 'px-3 pt-4 pb-3',
        title: 'text-lg',
        excerpt: 'line-clamp-2 text-sm',
        chip: 'top-3 left-3 text-[11px] px-3 py-1.5',
        cta: 'text-sm',
    },
    compact: {
        image: 'h-[200px]',
        body: 'px-2.5 pt-3 pb-2',
        title: 'text-[15px]',
        excerpt: null,
        chip: 'top-2.5 left-2.5 text-[10px] px-2.5 py-1',
        cta: 'text-[13px]',
    },
};

/**
 * Insight / article card.
 *
 * The photo sits in its own frame and is never covered by text. The card
 * itself is the glass: a blurred copy of the photo tints a frosted surface
 * that frames the image and carries the copy underneath it.
 */
const InsightCard = ({ to, image, category, date, title, excerpt, theme = 'purple', size = 'md' }) => {
    const t = THEMES[theme] || THEMES.purple;
    const s = SIZES[size] || SIZES.md;

    // Photos close to the frame's shape fill it; posters and portraits that
    // would lose a lot to cropping are shown whole, with the glass around them.
    const [fit, setFit] = useState('cover');
    const chooseFit = (e) => {
        const img = e.currentTarget;
        const frame = img.parentElement;
        if (!img.naturalWidth || !img.naturalHeight || !frame?.clientHeight) return;
        const imageRatio = img.naturalWidth / img.naturalHeight;
        const frameRatio = frame.clientWidth / frame.clientHeight;
        const cropped = 1 - Math.min(imageRatio / frameRatio, frameRatio / imageRatio);
        setFit(cropped > 0.2 ? 'contain' : 'cover');
    };

    return (
        <Link
            to={to}
            className={`group relative flex flex-col h-full w-full rounded-2xl overflow-hidden bg-[#1B1B1F] shadow-lg hover:shadow-2xl ${t.glow} transition-all duration-500 hover:-translate-y-2`}
        >
            {/* Ambient layer — the photo, blurred, gives the glass its colour */}
            <img
                src={image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 saturate-150"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black/55" />

            {/* Frosted glass surface */}
            <div className="relative flex flex-col flex-1 p-2 bg-white/10 backdrop-blur-xl">
                {/* The photo — clean, no scrim, no text on top */}
                <div className={`relative w-full shrink-0 ${s.image} rounded-xl overflow-hidden bg-black/20 ring-1 ring-white/15 shadow-md`}>
                    <img
                        src={image}
                        alt={typeof title === 'string' ? title.replace(/<\/?[^>]+(>|$)/g, '') : 'Insight article'}
                        onLoad={chooseFit}
                        className={`w-full h-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} transition-transform duration-700 ease-out group-hover:scale-105`}
                        loading="lazy"
                    />
                    {category && (
                        <span
                            className={`absolute ${s.chip} backdrop-blur-md bg-black/35 border border-white/25 text-white font-semibold tracking-wider uppercase rounded-full shadow-md`}
                            dangerouslySetInnerHTML={{ __html: category }}
                        />
                    )}
                </div>

                {/* Copy sits on the glass, below the photo */}
                <div className={`flex flex-col flex-1 ${s.body}`}>
                    <div className="flex items-center gap-2 mb-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />
                        <span className="text-white/80 text-[12px] font-medium">{date}</span>
                    </div>
                    <h3
                        className={`text-white ${s.title} font-semibold leading-snug line-clamp-2 mb-1.5`}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    {s.excerpt && excerpt && (
                        <p
                            className={`${s.excerpt} text-white/75 leading-relaxed mb-3`}
                            dangerouslySetInnerHTML={{ __html: excerpt }}
                        />
                    )}
                    <span className={`mt-auto pt-1 inline-flex items-center gap-2 ${t.cta} ${s.cta} font-semibold`}>
                        Read More
                        <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                </div>
            </div>

            {/* Frame that glows in the brand accent on hover */}
            <div className={`pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20 group-hover:ring-2 ${t.ring} transition-all duration-500`} />
        </Link>
    );
};

export default InsightCard;
