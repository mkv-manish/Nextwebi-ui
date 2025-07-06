import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const testimonials = [
    {
        feedback:
            "Team Nextwebi has provided me with website development, application development, and digital marketing services for my company. The team is prompt and supportive...",
        name: "Marketing and Operations Manager",
        role: "Real estate company",
    },
    {
        feedback:
            "We approached Nextwebi for digital marketing services. They have a talented team that goes above and beyond to understand their client's needs...",
        name: "Marketing Lead",
        role: "Healthcare Provider",
    },
    {
        feedback:
            "We have been working with Nextwebi for the last 6 years. All our applications and digital assets are managed via with Nextwebi for the last 6 years. All our applications them...",
        name: "Project Manager",
        role: "IT Company in Bangalore",
    },
];

const Section3 = () => {
    return (
        <section className="relative px-8 py-16">
            <div className=" bg-gray-300 shadow-md py-10 px-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
                            What Our Amazing Clients <br />
                            <span className="text-blue-400">Say About Us</span>
                        </h2>
                        <p className="text-gray-600">
                            Leading start-ups, SMEs and large-scale
                            organizations have trusted us for their software
                            development project requirements.
                        </p>
                    </div>

                    {/* Testimonials Box with angled background */}
                    <div className="relative">
                        {/* Blue angled background */}
                        <div />

                        <Swiper
                            modules={[Pagination]}
                            pagination={{ clickable: true }}
                            loop
                            spaceBetween={20}
                            slidesPerView={2}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                            }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index} className="mb-10">
                                    <div className="bg-white rounded-lg p-6 shadow-md h-full flex flex-col justify-between">
                                        <div>
                                            <div className="text-red-500 text-2xl mb-4">
                                                ❝
                                            </div>
                                            <p className="text-gray-700 mb-4 text-sm line-clamp-4">
                                                {testimonial.feedback}
                                            </p>
                                            <span className="text-red-600 text-sm font-semibold cursor-pointer">
                                                Read More
                                            </span>
                                        </div>
                                        <div className="mt-4">
                                            <h3 className="font-bold line-clamp-1">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-gray-500 text-sm">
                                                {testimonial.role}
                                            </p>
                                        </div>
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

export default Section3;
