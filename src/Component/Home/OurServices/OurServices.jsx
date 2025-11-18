import React from 'react';
import serviceImg from "../../../assets/Image/service.png"

const OurServices = () => {
    const cards = [
        {
            "title": "Express & Standard Delivery",
            "description": "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
        },
        {
            "title": "Nationwide Delivery",
            "description": "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours."
        },
        {
            "title": "Fulfillment Solution",
            "description": "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
        },
        {
            "title": "Cash on Home Delivery",
            "description": "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
        },
        {
            "title": "Corporate Service / Contract In Logistics",
            "description": "Customized corporate services which includes warehouse and inventory management support."
        },
        {
            "title": "Parcel Return",
            "description": "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
        }
    ]

    return (
        <div className='bg-accent shadow-sm rounded-2xl my-8 mx-1   py-5 '>
            <div className=''>
                <h1 className='text-white text-center text-5xl my-5 font-bold'>Our Services</h1>
                <p className='text-[#DADADA] text-center'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to </p>
                <p className='text-[#DADADA] text-center'>business shipments — we deliver on time, every time.</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 md:mx-25 my-10 '>
                    {
                        cards.map((card,index) => <div key={index+10} className="border  p-6 bg-white rounded-2xl shadow hover:bg-primary hover:shadow-lg transition cursor-pointer">
                            <div className='flex flex-col  justify-center items-center space-y-3'>
                                <img  src={serviceImg} alt="" />
                            <h2 className="font-bold text-accent text-center text-lg ">{card.title}</h2>
                            <p className="text-secondary text-center">{card.description}</p>
                            </div>
                            
                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default OurServices;