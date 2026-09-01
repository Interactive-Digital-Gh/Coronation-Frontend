/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import QuoteForm from "../components/QuoteForm"
import Faq from "../components/Faq"
import { generalFaqs } from "../lib/faqData"

// Dedicated SEO landing page for "corporate insurance" / "SME business insurance Ghana".
// TODO: copy below is a first draft — the client should review/replace it, and the CMS
// team should supply an SME product page + imagery when the product catalog is expanded.
const BusinessProtectionInsurance = () => {
    const covers = [
        {
            title: "Commercial Motor & Fleet",
            text: "Comprehensive cover for company cars, delivery vehicles and full fleets, with fast claims settlement to keep your business moving.",
            link: "/corporate/products/motor",
        },
        {
            title: "Marine & Goods in Transit",
            text: "Protect imports, exports and local shipments door to door — marine hull, cargo and goods in transit insurance.",
            link: "/corporate/products/marine",
        },
        {
            title: "Engineering & Contractors",
            text: "Contractors all risks, plant and machinery, erection all risks and electronic equipment cover for projects of every size.",
            link: "/corporate/products/engineering",
        },
    ]

    return (
        <div className="overflow-hidden">
            <section className="w-full bg-black lg:px-20 md:px-6 px-4 lg:py-16 py-10">
                <h1 className="text-white lg:text-[48px] md:text-[36px] text-[28px] font-semibold lg:leading-[56px] leading-[36px] max-w-[800px]">
                    Business Protection Insurance in Ghana
                </h1>
                <p className="text-white text-opacity-80 lg:text-[18px] text-[14px] lg:leading-[28px] leading-[22px] max-w-[720px] mt-4">
                    From growing SMEs to established corporates, Coronation Insurance Ghana protects the things
                    your business depends on — your vehicles, your goods, your equipment and your people. Our
                    corporate insurance packages are underwritten locally with over 16 years of risk management
                    expertise, so you get cover that fits how Ghanaian businesses actually work.
                </p>
                <p className="text-white text-opacity-80 lg:text-[18px] text-[14px] lg:leading-[28px] leading-[22px] max-w-[720px] mt-3">
                    Looking for SME business insurance in Ghana? Tell us about your business below and we'll
                    put together the right protection package for you.
                </p>
            </section>

            <section className="w-full lg:px-20 md:px-6 px-4 lg:py-16 py-10">
                <h2 className="lg:text-[32px] text-[24px] font-semibold text-[#141415] mb-8">
                    What we can cover for your business
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {covers.map((c) => (
                        <div key={c.title} className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
                            <h3 className="text-[20px] font-semibold text-[#141415]">{c.title}</h3>
                            <p className="text-[#56575d] text-[14px] leading-[22px] mt-3 flex-1">{c.text}</p>
                            <Link to={c.link} className="text-[#FF0226] font-semibold mt-4 hover:underline">
                                Learn more
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            <QuoteForm product="Business Protection Insurance" accent="#FF0226" />
            <Faq items={generalFaqs} accent="#FF0226" />
        </div>
    )
}

export default BusinessProtectionInsurance
