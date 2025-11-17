import React from 'react';
import icon from "../../../assets/Image/bookingIcon.png"

const HowItWorks = () => {
    const cards = [
        {
            "title": "Booking Pick & Drop",
            "description": "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            "title": "Cash On Delivery",
            "description": "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            "title": "Delivery Hub",
            "description": "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            "title": "Booking SME & Corporate",
            "description": "From personal packages to business shipments — we deliver on time, every time."
        }
    ]

    return (
       <div className=' mx-auto md:px-20 '>
        <h1 className='text-4xl font-bold text-accent'>How it Works</h1>
         <div className='grid grid-cols-1 md:grid-cols-4 items-center mb-5  gap-3'>
            {
                cards.map(card => <div className="bg-white shadow-md rounded-3xl p-6 md:p-7 hover:shadow-lg transition-all duration-200">
                    <img className='w-[47px] h-[49px] mb-2' src={icon} alt="" />
                    <h3 className="text-xl font-semibold text-accent mb-3">
                        {card.title}
                    </h3>
                    <p className="text-secondary text-sm md:text-base leading-relaxed">
                        {card.description}
                    </p>
                </div>

                )
            }
        </div>
       </div>
    );
};

export default HowItWorks;