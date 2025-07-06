"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
    { label: "Software Development", key: "software" },
    { label: "Application Development", key: "application" },
    { label: "Security Testing & Maintenance", key: "security" },
    { label: "Digital Marketing", key: "marketing" },
];

const services = {
    software: [
        {
            title: "Custom Software Development",
            description:
                "Customized software solutions that drive business growth, streamline operations, and enhance user experiences.",
            image: "/case1.jpg",
        },
        {
            title: "Microsoft SharePoint Customizations",
            description:
                "Enhance your SharePoint experience with custom solutions that boost collaboration, productivity, and workflows.",
            image: "/case1.jpg",
        },
        {
            title: "ERP",
            description:
                "Streamline business processes with a customizable ERP solution for seamless management and growth.",
            image: "/case2.jpg",
        },
        {
            title: "CRM",
            description:
                "Optimize customer relationships and sales with a tailored CRM solution for improved engagement and efficiency.",
            image: "/case2.jpg",
        },
    ],
    application: [
        {
            title: "Microsoft SharePoint Customizations",
            description:
                "Enhance your SharePoint experience with custom solutions that boost collaboration, productivity, and workflows.",
            image: "/case2.jpg",
        },
        {
            title: "ERP",
            description:
                "Streamline business processes with a customizable ERP solution for seamless management and growth.",
            image: "/case3.jpg",
        },
    ],
    security: [
        {
            title: "Microsoft SharePoint Customizations",
            description:
                "Enhance your SharePoint experience with custom solutions that boost collaboration, productivity, and workflows.",
            image: "/case2.jpg",
        },
        {
            title: "ERP",
            description:
                "Streamline business processes with a customizable ERP solution for seamless management and growth.",
            image: "/case3.jpg",
        },
    ],
    marketing: [
        {
            title: "Microsoft SharePoint Customizations",
            description:
                "Enhance your SharePoint experience with custom solutions that boost collaboration, productivity, and workflows.",
            image: "/case2.jpg",
        },
        {
            title: "ERP",
            description:
                "Streamline business processes with a customizable ERP solution for seamless management and growth.",
            image: "/case3.jpg",
        },
        {
            title: "Microsoft SharePoint Customizations",
            description:
                "Enhance your SharePoint experience with custom solutions that boost collaboration, productivity, and workflows.",
            image: "/case2.jpg",
        },
        {
            title: "ERP",
            description:
                "Streamline business processes with a customizable ERP solution for seamless management and growth.",
            image: "/case3.jpg",
        },
    ],
};

const Section11 = () => {
    const [active, setActive] = useState("software");

    return (
        <section className="py-16 bg-[#f9fbfd]">
            <div className="text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    What can we{" "}
                    <span className="text-blue-600">do for you</span>
                </h2>
                <p className="text-gray-600 mx-auto">
                    Whether you intend to extend your in-house team or develop
                    custom software, we can become your trusted tech partner.
                    With us, you can easily access our pre‑vetted talent as
                    dedicated developers, augment your IT team, and outsource
                    your complex software needs to scale your business.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex overflow-x-auto gap-4 justify-center my-8 px-4 scrollbar-none">
                {categories.map((c) => (
                    <button
                        key={c.key}
                        onClick={() => setActive(c.key)}
                        className={`whitespace-nowrap px-4 py-2 rounded-full font-medium text-sm ${
                            active === c.key
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                        }`}
                    >
                        {c.label}
                    </button>
                ))}
            </div>

            {/* Carousel */}
            <div className="relative px-16">
                <Swiper
                    modules={[Navigation]}
                    navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                >
                    {services[active].map((svc, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl">
                                <img
                                    src={svc.image}
                                    alt={svc.title}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg mb-2">
                                        {svc.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {svc.description}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Nav Buttons */}
                <button className="prev-btn absolute top-1/2 left-1 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-50">
                    <ChevronLeft />
                </button>
                <button className="next-btn absolute top-1/2 right-1 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-50">
                    <ChevronRight />
                </button>
            </div>
        </section>
    );
};

export default Section11;
