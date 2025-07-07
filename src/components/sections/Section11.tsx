import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ServiceKey = "software" | "application" | "security" | "marketing";

const categories = [
    { label: "Software Development", key: "software" as ServiceKey },
    { label: "Application Development", key: "application" as ServiceKey },
    { label: "Security Testing & Maintenance", key: "security" as ServiceKey },
    { label: "Digital Marketing", key: "marketing" as ServiceKey },
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
        
    ],
};

const Section11 = () => {
    const [active, setActive] = useState<ServiceKey>("software");

    return (
        <section className="py-12 sm:py-16 bg-[#f9fbfd] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                        What can we do for you
                    </h2>
                    <p className="text-gray-600 mx-auto text-sm sm:text-base max-w-4xl">
                        Whether you intend to extend your in-house team or develop
                        custom software, we can become your trusted tech partner.
                        With us, you can easily access our pre‑vetted talent as
                        dedicated developers, augment your IT team, and outsource
                        your complex software needs to scale your business.
                    </p>
                </div>

                {/* Tabs - Mobile Responsive */}
                <div className="flex overflow-x-auto gap-2 sm:gap-4 justify-start sm:justify-center my-6 sm:my-8 px-4 scrollbar-none pb-2">
                    {categories.map((c) => (
                        <button
                            key={c.key}
                            onClick={() => setActive(c.key)}
                            className={`category-btn whitespace-nowrap px-4 sm:px-5 py-3 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm min-w-fit flex-shrink-0 transition-all duration-200 ${
                                active === c.key
                                    ? "bg-blue-600 text-white shadow-lg scale-105"
                                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                            }`}
                        >
                            {c.label}
                        </button>
                    ))}
                </div>

                {/* Carousel */}
                <div className="relative px-4 sm:px-8 lg:px-20">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
                        slidesPerView={1}
                        spaceBetween={16}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                    >
                        {services[active].map((svc: { title: string; description: string; image: string }, i: number) => (
                            <SwiperSlide key={i}>
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl">
                                    <img
                                        src={svc.image}
                                        alt={svc.title}
                                        className="w-full h-48 sm:h-56 object-cover"
                                    />
                                    <div className="p-3 sm:p-4">
                                        <h3 className="font-semibold text-base sm:text-lg mb-2">
                                            {svc.title}
                                        </h3>
                                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                            {svc.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Nav Buttons - Fixed Positioning */}
                    <button className="prev-btn absolute top-1/2 left-0 sm:left-2 lg:left-4 -translate-y-1/2 bg-white border rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 z-10 transition-all duration-200">
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button className="next-btn absolute top-1/2 right-0 sm:right-2 lg:right-4 -translate-y-1/2 bg-white border rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 z-10 transition-all duration-200">
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Section11;
