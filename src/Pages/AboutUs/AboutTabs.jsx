import React, { useState } from "react";

const AboutTabs = () => {

    const tabs = [
    {
        title: "Story",
        text: `We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
        In the early days, we were just a small team with a big dream: to redefine how people send and receive 
        their parcels. With limited resources but unlimited dedication, we focused on solving one of the most 
        common challenges—getting items delivered on time without hassle.

        Over the years, our commitment to accuracy, real-time tracking, efficient logistics, and customer-first 
        service has made us a trusted partner for thousands of individuals and businesses. Whether it’s a 
        personal gift or a time-sensitive business delivery, we ensure that it reaches its destination safely, 
        and most importantly — on time, every time.

        As demand grew, so did our vision. We invested in smarter technology, expanded our delivery network, 
        trained a professional team, and built a system that prioritizes transparency and trust above all else. 
        From tackling last-mile delivery challenges to staying responsive during peak seasons, our team has 
        always stepped forward with patience and resilience.

        Today, our story is not just about parcels — it’s about people. It’s about helping families celebrate 
        special moments, enabling businesses to grow, supporting small entrepreneurs, and connecting communities 
        across distances. Every successful delivery is a reminder of why we began: to bring reliability, speed, 
        and comfort into people’s everyday lives.

        What started as a simple idea has now become a mission, a movement, and a promise we renew every day. 
        And this is just the beginning of our journey...`
    },

    {
        title: "Mission",
        text: `Our mission is to build a seamless, transparent, and technology-driven logistics ecosystem that 
        empowers individuals and businesses to send parcels with absolute confidence. We aim to simplify the 
        delivery experience by offering speed, security, and real-time visibility—turning what used to be a 
        stressful process into a smooth and reliable service.

        We are committed to incorporating innovation at every step: automated systems, optimized routes, trained 
        delivery professionals, and instant support. Everything we build focuses on one core goal — trust.

        Whether it is enabling small entrepreneurs to grow or helping large companies streamline their logistics, 
        we stand behind our clients with dedication, precision, and accountability. Our mission is not only to 
        deliver parcels — but to deliver peace of mind.`
    },

    {
        title: "Vision",
        text: `Our vision is to become the most trusted, efficient, and technology-forward delivery network in the 
        country. We want to redefine how people view parcel delivery — transforming it from a basic service into 
        a dependable and delightful experience.

        We envision a future where sending a parcel feels as effortless as sending a message, where every 
        customer enjoys speed, transparency, and total confidence. By combining smart logistics, digital 
        innovation, and deeply human service, we aim to create a sustainable system that grows with the needs 
        of communities and businesses.

        Ultimately, our vision is to connect people and possibilities — delivering not just parcels, but 
        opportunities, smiles, and stories across every corner of the nation.`
    },

    {
        title: "Success",
        text: `Our success is built on three pillars: trust, consistency, and customer satisfaction. Over the years, 
        we have delivered thousands of parcels—each one representing a promise kept and a relationship strengthened. 
        From supporting local online sellers to managing large-scale corporate deliveries, every achievement has 
        shaped who we are today.

        The growth of our service, expansion of our delivery routes, and the positive feedback from our customers 
        highlight our steady journey toward becoming a leading logistics brand. But for us, success is not measured 
        only in numbers—it is measured in the confidence people place in us.

        Every satisfied customer, every on-time delivery, and every new partnership adds to our story of success. 
        And with every milestone, we continue to push our limits, innovate faster, and serve better.`
    },

    {
        title: "Team & Others",
        text: `Behind every successful delivery is a dedicated team working tirelessly to maintain precision, 
        professionalism, and trust. Our delivery heroes, customer care specialists, warehouse managers, 
        logistics coordinators, and tech engineers form the backbone of our entire operation.

        We believe in teamwork, discipline, and continuous learning. From rigorous training sessions to adopting 
        modern tools and software, we ensure that our team stays prepared to handle challenges of any scale.

        Beyond operations, we value integrity, honesty, and fairness. These principles guide every decision we 
        make — from customer communication to partner collaboration. As we continue to grow, we remain committed 
        to building a workplace where people feel inspired, respected, and motivated.

        Together, our team is not just delivering parcels. We are delivering reliability, emotion, and hope — 
        every single day.`
    }
];



    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="mt-10 space-y-6">

            {/* Buttons Row */}
            <div className="flex space-x-6  pb-2">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`text-lg hover:cursor-pointer 
              ${activeTab === index ? "text-[#5B6A2E] font-bold" : "text-blackl"}
            `}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* Content Below */}
            <p className="text-secondary leading-7">
                {tabs[activeTab].text}
            </p>

        </div>
    );
};

export default AboutTabs;
