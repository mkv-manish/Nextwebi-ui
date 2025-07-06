import { useState } from "react";

const images = ["/nextwebi-home-banner-1.webp", "/nextwebi-home-banner-2.webp"];

const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(0);
    return (
        <section
            className="relative h-screen flex items-center justify-start px-8 bg-cover bg-center text-white transition-all duration-1000"
            style={{
                backgroundImage: `url(${images[currentImage]})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Text Content */}
            <div className="relative z-10 max-w-3xl">
                <p className="uppercase tracking-wide text-sm mb-4">
                    Imagination Meets, Implementation
                </p>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Custom Software and <br />
                    <span className="text-sky-400">ERP Solutions Company</span>
                </h1>

                <button className="mt-8 px-6 py-3 border border-white rounded text-white hover:bg-white hover:text-black transition">
                    Schedule an Appointment
                </button>
            </div>

            {/* Right Side Buttons */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-4 h-4 rounded-full border ${
                            currentImage === index
                                ? "bg-white"
                                : "border-white bg-transparent"
                        } transition`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default HeroSection;
