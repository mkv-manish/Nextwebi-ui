import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

const solutions = [
    {
        category: "ECOMMERCE SOLUTIONS",
        title: "Your eCommerce Store,",
        highlight: "Your Way",
        description:
            "Launch your online store with our secure, scalable, and feature-rich eCommerce solution customized for your business needs. No commissions sharing or recurring billing.",
        image: "/case1.jpg",
    },
    {
        category: "CRM",
        title: "Streamline Leads,",
        highlight: "Customers and Relationships",
        description:
            "A customizable CRM solution to streamline leads, communication channels, customer interactions and enhance business relationships.",
        image: "/case2.jpg",
    },
    {
        category: "ECOMMERCE SOLUTIONS",
        title: "Your eCommerce Store,",
        highlight: "Your Way",
        description:
            "Launch your online store with our secure, scalable, and feature-rich eCommerce solution customized for your business needs. No commissions sharing or recurring billing.",
        image: "/case1.jpg",
    },
    {
        category: "CRM",
        title: "Streamline Leads,",
        highlight: "Customers and Relationships",
        description:
            "A customizable CRM solution to streamline leads, communication channels, customer interactions and enhance business relationships.",
        image: "/case2.jpg",
    },
];

const Section8 = () => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const swiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.params && swiperRef.current.params.navigation) {
            // @ts-expect-error - Swiper navigation properties
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error - Swiper navigation properties
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <section className="py-12 sm:py-16 px-4 sm:pl-8 mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-blue-400 text-center">
                Products & Solutions
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-center mb-8 sm:mb-12 text-sm sm:text-base px-4">
                Our customized solutions empower various business verticals and
                have become the backbone of operational processes. Our solutions
                are secure, data privacy-compliant, and built with the latest
                technologies. Whether you are a startup, a mid-sized company, or
                an enterprise, our solutions are adaptable to your unique
                environment.
            </p>

            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 30 },
                    768: { slidesPerView: 1, spaceBetween: 30 },
                    1024: { slidesPerView: 1.5, spaceBetween: 30 },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {solutions.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative rounded-lg overflow-hidden shadow-lg group">
                            <img
                                src={item.image}
                                alt={item.category}
                                className="w-full h-[400px] sm:h-[500px] lg:h-[550px] object-cover"
                            />
                            <div className="absolute top-12 sm:top-24 left-3 right-3 sm:left-4 sm:right-auto bg-white p-3 sm:p-6 rounded-md max-w-md shadow">
                                <p className="text-xs font-semibold text-gray-500 mb-2">
                                    {item.category}
                                </p>
                                <h3 className="text-base sm:text-xl font-bold leading-tight text-gray-900">
                                    {item.title} <br />
                                    <span className="text-blue-600">
                                        {item.highlight}
                                    </span>
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3 leading-relaxed">
                                    {item.description}
                                </p>
                                <button className="mt-3 sm:mt-4 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
                                    See Solutions <ArrowRight size={12} />
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className="flex justify-center sm:justify-end gap-4 mt-6 sm:mt-8 px-4 sm:px-10">
                <button
                    ref={prevRef}
                    className="bg-blue-800 text-white w-12 h-12 sm:w-10 sm:h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    ref={nextRef}
                    className="bg-blue-800 text-white w-12 h-12 sm:w-10 sm:h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </section>
    );
};

export default Section8;
