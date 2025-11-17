import React from 'react';
import brand1 from "../../../assets/brands/amazon.png"
import brand2 from "../../../assets/brands/amazon_vector.png"
import brand3 from "../../../assets/brands/casio.png"
import brand4 from "../../../assets/brands/moonstar.png"
import brand5 from "../../../assets/brands/randstad.png"
import brand6 from "../../../assets/brands/star.png"
import brand7 from "../../../assets/brands/start_people.png"
import Marquee from 'react-fast-marquee';

const Brand = () => {
    const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

    return (
        <div className='  my-10'>
            <h1 className='text-accent mb-6 text-2xl text-center font-bold'>We've helped thousands of sales teams</h1>
            <Marquee speed={50} pauseOnHover={true} gradient={false}>
                <div className="flex items-center space-x-10">
                    {brands.map((brand, index) => (
                        <img
                            key={index}
                            src={brand}
                            alt={`Brand ${index + 1}`}
                            
                        />
                    ))}
                </div>
            </Marquee>

        </div>
    );
};

export default Brand;