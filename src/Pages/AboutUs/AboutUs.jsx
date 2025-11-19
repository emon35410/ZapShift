import React from 'react';
import AboutTabs from './AboutTabs';

const AboutUs = () => {
    return (
        <div className='bg-white shadow my-10 py-10 rounded-2xl'>
            <div className='w-11/12 mx-auto'>
                <div>
                    <h1 className='text-5xl font-bold text-accent mb-5'>About Us</h1>
                    <p className='text-secondary mb-5'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className="h-0.5 w-full bg-[#a09e9e] my-4"></div>


                <div>
                    <AboutTabs></AboutTabs>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;