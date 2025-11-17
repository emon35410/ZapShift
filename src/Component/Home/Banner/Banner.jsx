import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router';
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../../../assets/banner/banner1.png"
import banner2 from "../../../assets/banner/banner2.png"
import banner3 from "../../../assets/banner/banner3.png"

const Banner = () => {
    return (
        <div className="bg-white shadow-lg rounded-3xl m-5 md:m-10 p-3  md:p-6">
            <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false}>
                <div className='relative'>
                    <img  src={banner1}
                        alt="Banner 1"
                        className="rounded-xl" />

                    <div className="absolute inset-0 flex items-end justify-center md:justify-start pb-4 md:pb-12 pl-4 md:pl-16">
                        <div className="flex flex-col sm:flex-row items-start gap-2 md:gap-4">

                            {/* Track Your Parcel */}
                            <button
                                className="bg-primary hover:cursor-pointer text-accent font-semibold text-xs px-1 py-1 md:text-base md:px-8 md:py-3 rounded-full shadow-md transition-colors duration-200 hover:bg-[#c0da75]">
                                Track Your Parcel
                            </button>

                            {/* Be a Rider */}
                            <button
                                className="bg-white hover:cursor-pointer text-purple-600 font-semibold text-xs px-1 py-1 md:text-base md:px-8 md:py-3 rounded-lg shadow-md transition-colors duration-200 hover:bg-gray-100">
                                Be a Rider
                            </button>
                        </div>
                    </div>

                </div>

                {/* Banner 2 */}
                
                <div className='relative'>
                    <img
                        src={banner2}
                        alt="Banner 2"
                        className="rounded-xl"
                    />
                    <div className="absolute inset-0 flex items-end justify-center md:justify-start pb-4 md:pb-12 pl-4 md:pl-16">
                        <div className="flex flex-col sm:flex-row items-start gap-2 md:gap-4">

                            {/* Track Your Parcel */}
                            <button
                                className="bg-primary hover:cursor-pointer text-accent font-semibold text-xs px-3 py-1.5 md:text-base md:px-8 md:py-3 rounded-full shadow-md transition-colors duration-200 hover:bg-[#c0da75]">
                                Track Your Parcel
                            </button>

                            {/* Be a Rider */}
                            <button
                                className="bg-white hover:cursor-pointer text-purple-600 font-semibold text-xs px-3 py-1.5 md:text-base md:px-8 md:py-3 rounded-lg shadow-md transition-colors duration-200 hover:bg-gray-100">
                                Be a Rider
                            </button>
                        </div>
                    </div>
                </div>

                {/* Banner 3 */}
                <div className='relative'>
                    <img
                        src={banner3}
                        alt="Banner 3"
                        className="rounded-xl"
                    />
                    <div className="absolute inset-0 flex items-end justify-center md:justify-start pb-4 md:pb-12 pl-4 md:pl-16">
                        <div className="flex flex-col sm:flex-row items-start gap-2 md:gap-4">

                            {/* Track Your Parcel */}
                            <button
                                className="bg-primary hover:cursor-pointer text-accent font-semibold text-xs px-1 py-1 md:text-base md:px-8 md:py-3 rounded-full shadow-md transition-colors duration-200 hover:bg-[#c0da75]">
                                Track Your Parcel
                            </button>

                            {/* Be a Rider */}
                            <button
                                className="bg-white hover:cursor-pointer text-purple-600 font-semibold text-xs px-1 py-1 md:text-base md:px-8 md:py-3 rounded-lg shadow-md transition-colors duration-200 hover:bg-gray-100">
                                Be a Rider
                            </button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>

    );
};

export default Banner;