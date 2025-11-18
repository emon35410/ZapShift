import React from 'react';
import liveparcel from "../../../assets/Image/live-tracking.png"
import delivertMan from "../../../assets/Image/safe-delivery.png"

const LIveTraking = () => {
    return (
        <>
            <div className='space-y-5 my-5'>
                <div className="bg-white shadow-2xl gap-5 flex justify-around items-center rounded-3xl p-6 md:p-7 transition-all duration-200 hover:shadow-3xl">
                    <div>
                        <img className=' mb-2' src={liveparcel} alt="" />
                    </div>
                    <div className=" md:block h-24 border-l-2 border-dashed border-gray-400"></div>



                    <div>
                        <h3 className="text-xl font-semibold text-accent mb-3">
                            Live Parcel Tracking
                        </h3>
                        <p className="text-secondary text-sm md:text-base leading-relaxed">
                            Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.

                        </p>
                    </div>
                </div>
                <div className="bg-white shadow-xl gap-5 flex justify-around items-center rounded-3xl p-6 md:p-7 transition-all duration-200 hover:shadow-2xl">
                    <div>
                        <img className=' mb-2' src={delivertMan} alt="" />
                    </div>
                    <div className=" md:block h-24 border-l-2 border-dashed border-gray-400"></div>



                    <div>
                        <h3 className="text-xl font-semibold text-accent mb-3">
                            100% Safe Delivery
                        </h3>
                        <p className="text-secondary text-sm md:text-base leading-relaxed">
                            We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
                        </p>
                    </div>
                </div>
                <div className="bg-white shadow-xl gap-5 flex justify-around items-center rounded-3xl p-6 md:p-7 transition-all duration-200 hover:shadow-2xl">
                    <div>
                        <img className=' mb-2' src={delivertMan} alt="" />
                    </div>
                    <div className=" md:block h-24 border-l-2 border-dashed border-gray-400"></div>



                    <div>
                        <h3 className="text-xl font-semibold text-accent mb-3">
                            24/7 Call Center Support
                        </h3>
                        <p className="text-secondary text-sm md:text-base leading-relaxed">
                            Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
                        </p>
                    </div>
                </div>
            </div>
            <div className='hidden text-center md:flex my-5 text-accent'>
                ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </div>
            <div className='md:hidden text-center my-5 text-accent'>
                ------------------------------------------------
            </div>
        </>

    );
};

export default LIveTraking;