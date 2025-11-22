import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);
     useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    const faqs = [
        {
            question: "How does this posture corrector work?",
            answer:
                "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day."
        },
        {
            question: "Is it suitable for all ages and body types?",
            answer:
                "Yes, our posture corrector is designed with adjustable straps and flexible materials to accommodate various body types and ages."
        },
        {
            question: "Does it really help with back pain and posture improvement?",
            answer:
                "Yes, when used consistently as part of a healthy routine, posture correctors help alleviate back pain and improve posture over time."
        },
        {
            question: "Does it have smart features like vibration alerts?",
            answer:
                "Our standard model focuses on excellent mechanical support. For vibration alerts, please check our premium Posture Pro Smart edition."
        },
        {
            question: "How will I be notified when the product is back in stock?",
            answer:
                "Click the 'Notify Me' button on the product page and enter your email. You’ll get an instant alert once it’s available."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div data-aos="zoom-in" className="min-h-screen  py-12 px-4">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions (FAQ)
                    </h1>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4 mb-8">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border-2  overflow-hidden "
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:cursor-pointer "
                            >
                                <span className="font-semibold text-gray-900 text-lg pr-4">
                                    {faq.question}
                                </span>

                                {openIndex === index ? (
                                    <ChevronUp className="w-6 h-6 text-teal-600 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-teal-600 flex-shrink-0" />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See More Button */}
                <div className="flex justify-center">
                    <button className="bg-primary hover:from-lime-500 hover:cursor-pointer hover:bg-white text-gray-900 font-bold px-5 py-3 rounded-3xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <span className="text-lg">See More FAQ's</span>
                        <div className="bg-gray-900 rounded-full p-2">
                            <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default FAQ;
