import React, { use } from 'react';
import customer_top from "../../../assets/Image/customer-top.png"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import quota from "../../../assets/Image/reviewQuote.png"

const Reiews = ({ reviewPromise }) => {
    const reviews = use(reviewPromise);
    console.log(reviews)
    return (
        <div className='my-15'>
            <div className='flex flex-col justify-center items-center space-y-5'>
                <img src={customer_top} alt="" />
                <h1 className='text-accent text-4xl font-bold'>What our customers are sayings</h1>
                <div>
                    <p className=' text-secondary'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce </p>
                    <p className='text-center text-secondary'>pain, and strengthen your body with ease!</p>
                </div>
            </div>
            <div>
                <Swiper
                    loop={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{

                        rotate: 30,
                        stretch: "50%",
                        depth: 200,
                        scale: 0.80,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={
                        {
                            delay:1000,
                            disableOnInteraction:false
                        }
                    }
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review => <SwiperSlide key={review.id}>
                            <div className='bg-white border  p-6 rounded-2xl my-8 shadow  hover:shadow-lg transition'>
                                <img src={quota} alt="" />
                                <p className='text-secondary'>{review.review}</p>

                                <div className=' text-center my-5 text-accent'>
                                    ------------------------------------------------
                                </div>
                                <div className='flex space-x-5 items-center'>
                                    <div>
                                        <img className='rounded-full w-20 h-20' src={review.user_photoURL} alt="" />
                                    </div>
                                    <div className='space-y-2'>
                                        <h1 className='text-2xl text-accent font-bold'>{review.userName}</h1>
                                        <p className='text-secondary'><span className='font-bold'>Rating : </span> {review.ratings}</p>
                                        <p className='text-secondary'>{review.user_email}</p>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Reiews;