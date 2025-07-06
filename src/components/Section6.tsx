import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const caseStudies = [
    {
        image: "/case1.jpg",
        title: "Order management system for construction material company",
        tags: ["Construction", "Order Management System"],
    },
    {
        image: "/case2.jpg",
        title: "SharePoint intranet application for leading aviation product manufacturer",
        tags: ["Aviation", "SharePoint intranet application"],
    },
    {
        image: "/case3.jpg",
        title: "Ed-tech e-Commerce application with the online learning system",
        tags: ["Ed-tech", "e-Commerce"],
    },
    {
        image: "/case2.jpg",
        title: "SharePoint intranet application for leading aviation product manufacturer",
        tags: ["Aviation", "SharePoint intranet application"],
    },
    {
        image: "/case3.jpg",
        title: "Ed-tech e-Commerce application with the online learning system",
        tags: ["Ed-tech", "e-Commerce"],
    },
];

const Section6 = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-500">
                Empowering Digital Transformation with <br />
                <span className="text-blue-400">
                    Custom Software Development
                </span>
            </h2>

            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onInit={(swiper) => {
                    // @ts-expect-error - Swiper navigation properties are not properly typed
                    swiper.params.navigation.prevEl = prevRef.current;
                    // @ts-expect-error - Swiper navigation properties are not properly typed
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                className="mt-12"
            >
                {caseStudies.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="rounded-md border overflow-hidden shadow-sm hover:shadow-lg transition">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full object-cover"
                            />
                            <div className="p-4 text-left">
                                <h3 className="font-bold mb-4">{item.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="bg-blue-900 text-white text-xs px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex justify-between items-center mt-8">
                <button className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition">
                    View All Case Studies <ArrowRight size={18} />
                </button>

                <div className="flex gap-4">
                    <button
                        ref={prevRef}
                        className="border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white p-2 rounded-full transition"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        ref={nextRef}
                        className="border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white p-2 rounded-full transition"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Section6;
