import { useState } from "react";

const images = ["/nextwebi-home-banner-1.webp", "/nextwebi-home-banner-2.webp"];

const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(0);
    return (
        <section
            className="relative h-screen flex items-center justify-start px-4 sm:px-6 md:px-8 bg-cover bg-center text-white transition-all duration-1000"
            style={{
                backgroundImage: `url(${images[currentImage]})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Text Content */}
            <div className="relative z-10 max-w-3xl">
                <p className="uppercase tracking-wide text-xs sm:text-sm mb-3 sm:mb-4">
                    Imagination Meets, Implementation
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                    Custom Software and <br />
                    <span className="text-sky-400">ERP Solutions Company</span>
                </h1>

                <button className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 border border-white rounded text-white hover:bg-white hover:text-black transition text-sm sm:text-base">
                    Schedule an Appointment
                </button>
            </div>

            {/* Right Side Buttons */}
            <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 sm:space-y-4 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 lg:w-6 lg:h-6 rounded-full border border-white ${
                            currentImage === index
                                ? "bg-white"
                                : "bg-transparent"
                        } transition-all duration-200 hover:scale-110`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default HeroSection;
