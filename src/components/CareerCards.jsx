import { Link } from "react-router-dom";
import SmoothImage from "./SmoothImage";

const CMS_BASE = "https://coronation-cms.interactivedigital.com.gh";
const FALLBACK_IMAGE = "assets/purplehome/purplehomebg.png";
const LEARN_MORE_URL = "https://www.instagram.com/coronationgh/";

const imageUrl = (path) => (path ? `${CMS_BASE}/${path}` : FALLBACK_IMAGE);

const Body = ({ card, large = false }) => (
    <>
        <h3
            className={`font-semibold text-white ${large ? "text-[22px] lg:text-[28px] leading-tight" : "text-[20px] lg:text-[22px] leading-snug"}`}
            dangerouslySetInnerHTML={{ __html: card.caption }}
        />
        <div
            className="mt-3 text-[14px] lg:text-[15px] leading-relaxed text-[#9A9BA3]"
            dangerouslySetInnerHTML={{ __html: card.body }}
        />
    </>
);

/**
 * "Life at Coronation" cards on the careers pages.
 *
 * Every photo sits in a frame with a fixed aspect ratio and is cropped with
 * object-cover, so CMS uploads of any size or shape fill their slot without
 * being stretched or squashed.
 *
 * Layout: horizontal swipe row on mobile. From tablet up, a full-width
 * featured card (photo kept at its natural 3:2 landscape shape, text beside
 * it) sits above the other four cards (2x2 on tablet, one row of 4 on desktop).
 * Photo frames are never forced to match the height of neighbouring text.
 */
export default function CareerCards({ data, accent = "#B580D1" }) {
    const cards = [1, 2, 3, 4, 5].map((n) => ({
        id: n,
        image: imageUrl(data?.[`card${n}_image`]),
        caption: data?.[`card${n}_caption`] ?? "",
        body: data?.[`card${n}_body`] ?? "",
    }));
    const [featured, ...rest] = cards;

    const cardBase =
        "group flex w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-lg bg-[#1D1E20] shadow-lg border-b-4 sm:w-[60%] md:w-auto";

    return (
        <section className="bg-black px-4 py-12 md:px-10 lg:px-20 lg:py-20">
            <div className="mx-auto flex max-w-[1280px] snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0 lg:grid-cols-4">
                {/* FEATURED – full width, image and text side by side on tablet/desktop */}
                <article
                    className={`${cardBase} md:col-span-2 md:flex-row lg:col-span-4`}
                    style={{ borderBottomColor: accent }}
                >
                    <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden md:w-1/2 lg:w-3/5">
                        <SmoothImage
                            src={featured.image}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-6 lg:p-10">
                        <Body card={featured} large />
                        <Link
                            to={LEARN_MORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center gap-2 self-start text-[15px] font-semibold hover:underline"
                            style={{ color: accent }}
                        >
                            Learn More
                            <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </article>

                {/* REGULAR CARDS – fixed 4:3 photo frame on top */}
                {rest.map((card) => (
                    <article
                        key={card.id}
                        className={cardBase}
                        style={{ borderBottomColor: accent }}
                    >
                        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
                            <SmoothImage
                                src={card.image}
                                alt=""
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <Body card={card} />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
