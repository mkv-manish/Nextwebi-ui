import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";

const featuredLogos = [
    "/case1.jpg",
    "/case2.jpg",
    "/case1.jpg",
    "/case1.jpg",
    "/case2.jpg",
    "/case3.jpg",
];

const certifications = [
    "/case1.jpg",
    "/case2.jpg",
    "/case3.jpg",
    "/case1.jpg",
    "/case2.jpg",
];

const Section10 = () => {
    return (
        <section className="py-12 sm:py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
                Why Choose Us ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                {/* Left Side */}
                <div className="border-[#25355d] border-r-0 md:border-r-4 pr-0 md:pr-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        No need to wonder
                    </h3>
                    <p className="text-xl sm:text-2xl font-bold text-[#2f4a8e] mb-3 sm:mb-4">
                        Working with us is Wonderful.
                    </p>
                    <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                        At Nextwebi, we are building secure and scalable digital
                        infrastructure for our clients while efficiently
                        automating business workflows. We are agile and
                        specialize in delivering customized software services
                        and solutions with AI-driven innovations for startups
                        and enterprise companies.
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
                        <div className="border border-blue-500 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700">
                            <span className="text-blue-600 font-bold">9+</span>{" "}
                            Years in Business
                        </div>
                        <div className="border border-blue-500 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700">
                            <span className="text-blue-600 font-bold">
                                1600+
                            </span>{" "}
                            Projects Delivered
                        </div>
                        <div className="border border-blue-500 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700">
                            <span className="text-blue-600 font-bold">
                                600+
                            </span>{" "}
                            Client Relationships
                        </div>
                        <div className="border border-blue-500 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700">
                            <span className="text-blue-600 font-bold">20+</span>{" "}
                            Countries Served
                        </div>
                    </div>

                    <p className="font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
                        Before you start, now you can e-sign a digital NDA with
                        us.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2 rounded flex items-center gap-2 text-xs sm:text-sm">
                        Sign NDA <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                    </button>
                </div>

                {/* Right Side */}
                <div className="mt-8 md:mt-0">
                    <h2 className="text-lg sm:text-xl font-bold py-4 sm:py-8">
                        Due Diligence with{" "}
                        <span className="font-extrabold text-xl sm:text-2xl text-[#242d41]">
                            Quality & Security Standards
                        </span>
                    </h2>
                    <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                        {certifications.map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt="Certification"
                                className="w-14 h-14 sm:w-18 sm:h-18 rounded-full"
                            />
                        ))}
                    </div>

                    <hr />
                    <h4 className="text-xl sm:text-2xl font-bold py-6 sm:py-10">
                        We are Featured in
                    </h4>

                    <div className="relative">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            slidesPerView={5}
                            spaceBetween={16}
                            loop
                            breakpoints={{
                                640: { slidesPerView: 3, spaceBetween: 20 },
                                768: { slidesPerView: 4, spaceBetween: 20 },
                                1024: { slidesPerView: 5, spaceBetween: 20 },
                                1280: { slidesPerView: 6, spaceBetween: 20 },
                            }}
                            className="featured-logos-swiper"
                        >
                            {featuredLogos.map((logo, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex items-center justify-center h-16 sm:h-20">
                                        <img
                                            src={logo}
                                            alt="Featured Logo"
                                            className="w-20 h-8 sm:w-24 sm:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section10;
