/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import RedBook from './RedBook';
import { useLocation } from 'react-router-dom';

const ITEMS_PER_PAGE = 6;

function RedProject() {
    const [item, setItem] = useState({ name: 'All' }); // Default category is 'All'
    const [articles, setArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]); // New state for filtered articles
    const [categories, setCategories] = useState([{ name: 'All' }]); // Categories state, initialized with 'All'
    const [active, setActive] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const location = useLocation(); // Get the current path


    // Fetch articles on mount
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('https://coronation-cms.interactivedigital.com.gh/api/published-blogs/cards');
                const data = await response.json();

                // Map API data to the expected article format
                const formattedArticles = data.map((article) => ({
                    id: article.id,
                    image: `https://coronation-cms.interactivedigital.com.gh/${article.main_image}`,
                    date: new Date(article.created_at).toLocaleDateString(),
                    heading: (article.caption || "").replace(/<\/?[^>]+(>|$)/g, ""), // Strip HTML tags from caption
                    details: (article.excerpt || "").replace(/<\/?[^>]+(>|$)/g, "") || "No details available.",
                    category: (article.category || "").replace(/<\/?[^>]+(>|$)/g, "").trim(),
                    link: `/reddetail/${article.id}` // Modify this based on your routing structure
                }));

                setArticles(formattedArticles);
                setFilteredArticles(formattedArticles); // Initialize filteredArticles with all articles
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []); // Empty dependency array to run only on mount

    // Fetch categories on mount
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://coronation-cms.interactivedigital.com.gh/api/blog-categories');
                const data = await response.json();
                const fetchedCategories = data.map((category) => ({
                    name: (category.category || "").replace(/<\/?[^>]+(>|$)/g, "").trim()
                }));
                setCategories([{ name: 'All' }, ...fetchedCategories]);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    // Update filteredArticles when the selected category changes
    useEffect(() => {
        if (item.name === 'All') {
            setFilteredArticles(articles); // Show all articles
        } else {
            // Filter articles based on selected category
            const filtered = articles.filter(article =>
                article.category.toLowerCase().trim() === item.name.toLowerCase().trim()
            );
            setFilteredArticles(filtered);
        }
        setCurrentPage(1); // Reset to first page when category changes
    }, [item, articles]); // Depend on item and articles

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent }); // Set the selected category
        setActive(index);
    };

    // Pagination logic
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            {/* Conditionally render the categories based on the current path */}
            {location.pathname !== '/redhome' && (
                <nav className="w-full h-[44px] px-4 flex items-center">
                    <ul className="flex gap-4">
                        {categories.map((navItem, index) => (
                            <li
                                onClick={(e) => handleClick(e, index)}
                                key={index}
                                className={`${active === index
                                    ? 'bg-[#FF0226] text-white'
                                    : 'bg-[#F7F7F8] text-black'
                                    } p-2 rounded-lg cursor-pointer lg:text-[16px] md:text-[14px] text-[10px] font-semibold leading-[24px]`}
                            >
                                {navItem.name}
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            {/* Project grid */}
            <section>
                <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-2">
                    {currentArticles.map((item) => (
                        <RedBook item={item} key={item.id} />
                    ))}
                </div>

                {/* Conditionally render pagination controls based on the current path */}
                {location.pathname !== '/redhome' && (
                    <div className="flex lg:justify-center lg:items-center mt-8 mb-8 lg:mb-0">
                        <button
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                            className="px-3 py-1 mx-1 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-200 disabled:opacity-50"
                        >
                            &lt;
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`px-3 py-1 mx-1 border ${currentPage === index + 1
                                    ? 'bg-[#FF0226] text-white'
                                    : 'border-gray-300 text-gray-500'
                                    } rounded-lg hover:bg-[#FF0226] hover:text-white`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 mx-1 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-200 disabled:opacity-50"
                        >
                            &gt;
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
}

export default RedProject;
