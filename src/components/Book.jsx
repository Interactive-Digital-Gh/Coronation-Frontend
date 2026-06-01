/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Book = ({ item }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-2 w-full max-w-sm">
            {/* Display the main image */}
            <img
                src={item.image} // This is coming from the API (main_image)
                alt={item.heading}
                className="w-full h-[280px] object-cover rounded-lg"
                loading='lazy'
            />

            {/* Content section */}
            <div className="p-4">
                {/* Category and Date */}
                <div className="text-sm text-[#999881] flex gap-8 mb-2">
                    <span className="text-[12px]"
                        dangerouslySetInnerHTML={{ __html: item.category }} />
                    <ul className="list-disc">
                        <li className="text-[12px]"
                            dangerouslySetInnerHTML={{ __html: item.date }} />
                    </ul>
                </div>

                {/* Heading and details */}
                <div className="h-auto">
                    <h3 className="text-xl font-semibold mb-2 text-black"
                        dangerouslySetInnerHTML={{ __html: item.heading }}
                    />
                    <p className="text-gray-600 text-sm mb-4"
                        dangerouslySetInnerHTML={{ __html: item.details }}
                    />
                </div>

                {/* Read More link */}
                <a href={`/purpledetail/${item.id}`} className="text-[#B580D1] font-semibold hover:underline">
                    Read More
                </a>

            </div>
        </div>
    );
};

export default Book;
