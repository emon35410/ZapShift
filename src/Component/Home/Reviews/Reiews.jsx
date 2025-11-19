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
        <div className="my-15 px-4 md:px-8">
            <div className="flex flex-col justify-center items-center space-y-5 text-center">
                <img src={customer_top} alt="" className="w-32 md:w-40" />

                <h1 className="text-accent text-2xl md:text-4xl font-bold">
                    What our customers are saying
                </h1>

                <div className="max-w-2xl mx-auto">
                    <p className="text-secondary">
                        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                    </p>
                    <p className="text-secondary">
                        Achieve proper alignment, reduce pain, and strengthen your body with ease!
                    </p>
                </div>
            </div>

            <div className="mt-10">
                <Swiper
                    loop={true}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    coverflowEffect={{
                        rotate: 20,
                        stretch: 0,
                        depth: 150,
                        scale: 0.9,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className="bg-white border p-6 rounded-2xl my-8 shadow hover:shadow-lg transition w-full max-w-md mx-auto">
                                <img src={quota} alt="" className="w-10 mb-3" />

                                <p className="text-secondary text-sm md:text-base">
                                    {review.review}
                                </p>

                                <div className="text-center my-5 text-accent">
                                    <div className="border-b border-accent opacity-40"></div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <img
                                        className="rounded-full w-16 h-16 object-cover"
                                        src={review.user_photoURL}
                                        alt=""
                                    />

                                    <div className="space-y-1">
                                        <h1 className="text-xl text-accent font-bold">
                                            {review.userName}
                                        </h1>
                                        <p className="text-secondary text-sm">
                                            <span className="font-bold">Rating:</span> {review.ratings}
                                        </p>
                                        <p className="text-secondary text-sm">
                                            {review.user_email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    );
};

export default Reiews;