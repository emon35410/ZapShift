import React from 'react';
import marcent from "../../../assets/Image/be-a-merchant-bg.png"
import loca from "../../../assets/Image/location-merchant.png"


const MarcentBanner = () => {
    return (
        <div className="bg-accent shadow-xl rounded-2xl my-10 px-5 pb-3 md:px-10 md:pb-10 text-white">

            {/* Top Banner Image */}
            <div className="flex justify-center mb-6">
                <img src={marcent} className=" object-contain" alt="" />
            </div>

            {/* Content Row */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">

                {/* Left Text */}
                <div className="flex-1 space-y-5">
                    <h1 className="text-3xl md:text-4xl font-bold leading-snug">
                        Merchant and Customer Satisfaction is Our First Priority
                    </h1>

                    <p className="text-white/80 text-sm md:text-base">
                        We offer the lowest delivery charge with the highest value along with 100%
                        safety of your product. ZapShift Courier delivers your parcels in every
                        corner of Bangladesh right on time.
                    </p>

                    <div className="flex gap-4 mt-4">
                        <button className="bg-primary text-accent hover:cursor-pointer font-semibold px-5 py-2 rounded-3xl hover:bg-gray-100 transition">
                            Become A Merchant
                        </button>
                        <button className="bg-transparent border hover:cursor-pointer border-primary text-primary px-5 py-2 rounded-3xl hover:bg-primary hover:text-secondary transition">
                            Earn With ZapShift Courier
                        </button>
                    </div>
                </div>

                {/* Right-side Image */}
                <div className="flex-1 flex justify-center">
                    <img src={loca} className="w-64 md:w-80 lg:w-96 object-contain" alt="" />
                </div>

            </div>

        </div>

    );
};

export default MarcentBanner;