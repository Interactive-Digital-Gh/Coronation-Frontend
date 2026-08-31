/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const Book = ({ item }) => {
    return (
        <Link
            to={item.link || `/insights/${item.id}`}
            className="group relative block h-[420px] w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#B580D1]/40 transition-all duration-500 hover:-translate-y-2"
        >
            {/* Full-bleed article image */}
            <img
                src={item.image}
                alt={item.heading}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
            />

            {/* Legibility scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

            {/* Frame that glows in the brand accent on hover */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20 group-hover:ring-2 group-hover:ring-[#B580D1]/70 transition-all duration-500" />

            {/* Glass category chip */}
            {item.category && (
                <span
                    className="absolute top-4 left-4 backdrop-blur-md bg-white/15 border border-white/30 text-white text-[11px] font-semibold tracking-wider uppercase rounded-full px-3 py-1.5 shadow-md"
                    dangerouslySetInnerHTML={{ __html: item.category }}
                />
            )}

            {/* Frosted glass content panel */}
            <div className="absolute inset-x-0 bottom-0 m-3 rounded-xl backdrop-blur-xl bg-white/10 border border-white/25 p-4 shadow-lg transition-colors duration-500 group-hover:bg-white/20">
                <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B580D1]" />
                    <span
                        className="text-white/80 text-[12px] font-medium"
                        dangerouslySetInnerHTML={{ __html: item.date }}
                    />
                </div>
                <h3
                    className="text-white text-lg font-semibold leading-snug line-clamp-2 mb-1.5"
                    dangerouslySetInnerHTML={{ __html: item.heading }}
                />
                <p
                    className="text-white/75 text-sm leading-relaxed line-clamp-2 mb-3"
                    dangerouslySetInnerHTML={{ __html: item.details }}
                />
                <span className="inline-flex items-center gap-2 text-[#D8B9EA] text-sm font-semibold">
                    Read More
                    <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
            </div>
        </Link>
    );
};

export default Book;
