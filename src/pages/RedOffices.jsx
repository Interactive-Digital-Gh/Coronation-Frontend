import officeHero from '../assets/office/officehero.webp';
import OfficeMap from '../components/OfficeMap';

const RedOffices = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <div className="relative">
                <img
                    src={officeHero}
                    alt="Agency Offices"
                    className="w-full object-cover bg-cover h-[500px] lg:h-[700px]"
                    loading="lazy"
                />
                
                <div className="absolute top-1/2 left-4 lg:left-20 transform -translate-y-1/2 bg-[#2c2d2e] bg-opacity-80 p-6 lg:p-10 w-[90%] max-w-[650px]">
                    <h1 className="text-white text-2xl lg:text-[32px] font-medium mb-4 lg:mb-6">Agency Offices</h1>
                    <p className="text-[#d1d1d1] text-sm lg:text-[15px] font-normal leading-[1.8]">
                        Taking you where you want to go. We are always on the lookout for best-in-class talent who enjoy a challenge. In exchange, we provide an environment that fosters the actualization of goals, and career fulfillment for our people while providing transformational solutions for Africa's challenges.
                    </p>
                </div>
            </div>
            
            {/* Map Section */}
            <OfficeMap theme="red" />
        </div>
    );
};

export default RedOffices;
