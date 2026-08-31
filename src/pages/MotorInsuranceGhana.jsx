/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import PurpleMotor from "./PurpleMotor"

// Dedicated SEO landing page for "car insurance in Ghana" / "comprehensive motor insurance".
// Reuses the CMS-driven motor product content (which includes the embedded quote form).
const MotorInsuranceGhana = () => {
    return (
        <div className="overflow-hidden">
            <section className="w-full bg-black lg:px-20 md:px-6 px-4 lg:py-16 py-10">
                <h1 className="text-white lg:text-[48px] md:text-[36px] text-[28px] font-semibold lg:leading-[56px] leading-[36px] max-w-[800px]">
                    Motor & Car Insurance in Ghana
                </h1>
                <p className="text-white text-opacity-80 lg:text-[18px] text-[14px] lg:leading-[28px] leading-[22px] max-w-[720px] mt-4">
                    Coronation's comprehensive motor insurance protects your car against accidents, theft, fire
                    and third-party liability anywhere in Ghana. Choose the cover that fits your vehicle and
                    budget, and count on us to settle claims fast — so you're back on the road without the wait.
                </p>
                <p className="text-white text-opacity-80 lg:text-[18px] text-[14px] lg:leading-[28px] leading-[22px] max-w-[720px] mt-3">
                    Whether you need comprehensive motor insurance for a private car or third-party cover to
                    stay legal on the road, our team will help you find the right policy.{" "}
                    <Link to="/individual/products" className="underline text-[#B580D1]">
                        Explore all personal insurance products
                    </Link>
                    .
                </p>
            </section>
            <PurpleMotor />
        </div>
    )
}

export default MotorInsuranceGhana
