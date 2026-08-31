/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import Marine from "./Marine"

// Dedicated SEO landing page for "marine insurance brokers" / "goods in transit insurance".
// Reuses the CMS-driven marine product content (which includes the embedded quote form).
const MarineInsuranceGhana = () => {
    return (
        <div className="overflow-hidden">
            <section className="w-full bg-black lg:px-20 md:px-6 px-4 lg:py-16 py-10">
                <h1 className="text-white lg:text-[48px] md:text-[36px] text-[28px] font-semibold lg:leading-[56px] leading-[36px] max-w-[800px]">
                    Marine Insurance in Ghana
                </h1>
                <p className="text-white text-opacity-80 lg:text-[18px] text-[14px] lg:leading-[28px] leading-[22px] max-w-[720px] mt-4">
                    Protect your cargo from port to destination with Coronation's marine insurance. We cover
                    marine hull, cargo and goods in transit insurance for importers, exporters, and the marine
                    insurance brokers who serve them — backed by strong underwriting and fast claims settlement.
                </p>
                <p className="text-white text-opacity-80 lg:text-[18px] text-[14px] lg:leading-[28px] leading-[22px] max-w-[720px] mt-3">
                    Moving goods by sea, air or road? Our goods in transit insurance keeps your shipments
                    protected door to door.{" "}
                    <Link to="/corporate/products" className="underline text-[#FF0226]">
                        Explore all corporate insurance products
                    </Link>
                    .
                </p>
            </section>
            <Marine />
        </div>
    )
}

export default MarineInsuranceGhana
