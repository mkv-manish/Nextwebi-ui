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
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Choose Us ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                {/* Left Side */}
                <div className=" border-[#25355d] border-r-4  ">
                    <h3 className="text-2xl font-bold text-gray-900">
                        No need to wonder
                    </h3>
                    <p className="text-2xl font-bold text-[#2f4a8e] mb-4">
                        Working with us is Wonderful.
                    </p>
                    <p className="text-gray-600 mb-8">
                        At Nextwebi, we are building secure and scalable digital
                        infrastructure for our clients while efficiently
                        automating business workflows. We are agile and
                        specialize in delivering customized software services
                        and solutions with AI-driven innovations for startups
                        and enterprise companies.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-6">
                        <div className="border border-blue-500 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                            <span className="text-blue-600 font-bold">9+</span>{" "}
                            Years in Business
                        </div>
                        <div className="border border-blue-500 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                            <span className="text-blue-600 font-bold">
                                1600+
                            </span>{" "}
                            Projects Delivered
                        </div>
                        <div className="border border-blue-500 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                            <span className="text-blue-600 font-bold">
                                600+
                            </span>{" "}
                            Client Relationships
                        </div>
                        <div className="border border-blue-500 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                            <span className="text-blue-600 font-bold">20+</span>{" "}
                            Countries Served
                        </div>
                    </div>

                    <p className="font-semibold text-sm mb-4">
                        Before you start, now you can e-sign a digital NDA with
                        us.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded flex items-center gap-2 text-sm">
                        Sign NDA <ArrowRight size={14} />
                    </button>
                </div>

                {/* Right Side */}
                <div>
                    <h2 className="text-xl font-bold py-8">
                        Due Diligence with{" "}
                        <span className="font-extrabold text-2xl text-[#242d41]">
                            Quality & Security Standards
                        </span>
                    </h2>
                    <div className="flex flex-wrap  gap-4 mb-8">
                        {certifications.map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt="Certification"
                                className="w-18 h-18  rounded-full"
                            />
                        ))}
                    </div>

                    <hr />
                    <h4 className="text-2xl font-bold py-10">
                        We are Featured in
                    </h4>

                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        slidesPerView={3}
                        spaceBetween={20}
                        loop
                        breakpoints={{
                            640: { slidesPerView: 4 },
                            1024: { slidesPerView: 5 },
                        }}
                    >
                        {featuredLogos.map((logo, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center">
                                    <img
                                        src={logo}
                                        alt="Featured Logo"
                                        className="w-24 h-10 object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Section10;
