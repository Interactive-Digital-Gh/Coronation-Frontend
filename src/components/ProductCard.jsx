/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// One product tile on the Individual and Corporate products pages.
// The image slot matches the shape of the product flyers (900 x 946), so the
// flyer artwork shows in full with its text intact. Pass `titleHtml` / `bodyHtml`
// for CMS-managed copy, or `title` / `body` for copy that lives in the code.
const ProductCard = ({ image, alt, title, titleHtml, body, bodyHtml, to, linkClassName }) => (
    <article className="flex flex-col">
        <div className="overflow-hidden rounded-[12px] bg-[#1D1E20] aspect-[900/946]">
            <img
                src={image}
                alt={alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-[1.03]"
            />
        </div>
        <div className="mt-4 flex flex-col gap-3">
            {titleHtml ? (
                <h2
                    className="lg:text-[32px] text-[20px] lg:leading-[40px] leading-[28px] font-semibold text-white"
                    dangerouslySetInnerHTML={{ __html: titleHtml }}
                />
            ) : (
                <h2 className="lg:text-[32px] text-[20px] lg:leading-[40px] leading-[28px] font-semibold text-white">
                    {title}
                </h2>
            )}
            {bodyHtml ? (
                <p
                    className="lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-normal text-[#888991]"
                    dangerouslySetInnerHTML={{ __html: bodyHtml }}
                />
            ) : (
                <p className="lg:text-[16px] text-[14px] lg:leading-[24px] leading-[20px] font-normal text-[#888991]">
                    {body}
                </p>
            )}
            <div className={`font-medium text-[14px] leading-[20px] ${linkClassName}`}>
                <Link to={to}>Read More</Link>
            </div>
        </div>
    </article>
);

export default ProductCard;
