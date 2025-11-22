import React, { useEffect } from 'react';
import AboutTabs from './AboutTabs';
import 'aos/dist/aos.css';
import Aos from 'aos';

const AboutUs = () => {
    
 useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className='bg-white shadow my-10 py-10 rounded-2xl'>
            <div  className='w-11/12 mx-auto'>
                <div data-aos="zoom-in">
                    <h1 className='text-5xl font-bold text-accent mb-5'>About Us</h1>
                    <p className='text-secondary mb-5'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div data-aos="zoom-out" className="h-0.5 w-full bg-[#a09e9e] my-4"></div>


                <div data-aos="flip-down">
                    <AboutTabs></AboutTabs>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;