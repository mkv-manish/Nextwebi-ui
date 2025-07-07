import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    FaRegListAlt,
    FaSearch,
    FaCode,
    FaRocket,
    FaServer,
} from "react-icons/fa";

const steps = [
    {
        title: "Scoping",
        description: "Define project scope and requirements.",
        icon: <FaRegListAlt />,
    },
    {
        title: "Cost Estimation",
        description: "Estimate costs accurately for your project.",
        icon: <FaSearch />,
    },
    {
        title: "Development",
        description: "Develop scalable and secure applications.",
        icon: <FaCode />,
    },
    {
        title: "Deployment",
        description: "Deploy on cloud or on-premises efficiently.",
        icon: <FaServer />,
    },
    {
        title: "Maintenance",
        description: "Ensure smooth operations with maintenance.",
        icon: <FaRocket />,
    },
];

const Section9 = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
    const controls = useAnimation();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setScreenSize('mobile');
            } else if (window.innerWidth < 1024) {
                setScreenSize('tablet');
            } else {
                setScreenSize('desktop');
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % steps.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        controls.start({ rotate: -activeIndex * 72 });
    }, [activeIndex, controls]);

    // Responsive radius and positioning
    const getRadiusAndOffset = () => {
        switch (screenSize) {
            case 'mobile':
                return { radius: 140, offset: 20 };
            case 'tablet':
                return { radius: 175, offset: 24 };
            case 'desktop':
                return { radius: 225, offset: 32 };
            default:
                return { radius: 140, offset: 20 };
        }
    };

    const { radius, offset } = getRadiusAndOffset();

    return (
        <section className="py-12 sm:py-16  bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
                {/* Left Text */}
                <div className="max-w-lg mb-6 sm:mb-0 lg:mb-0">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Our Agile Process. <br />
                        <span className="text-blue-600">
                            Simple, Seamless, Streamlined
                        </span>
                    </h2>
                    <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                        We follow a structured and agile development approach
                        with project management planner to ensure the successful
                        delivery of every project, focusing on quality,
                        cost-optimization, transparency, and client
                        satisfaction.
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-4">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border text-xs sm:text-sm ${
                                    activeIndex === i
                                        ? "bg-blue-600 text-white"
                                        : "bg-white border-gray-300 text-gray-600"
                                }`}
                            >
                                {step.title}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Circle */}
                <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]">
                    <motion.div
                        animate={controls}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 rounded-full border border-gray-300"
                    >
                        {steps.map((step, i) => {
                            const angle = (360 / steps.length) * i;
                            const x = radius * Math.cos((angle * Math.PI) / 180);
                            const y = radius * Math.sin((angle * Math.PI) / 180);

                            return (
                                <div
                                    key={i}
                                    className="absolute flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white shadow rounded-lg text-blue-600 text-sm sm:text-base lg:text-lg circle-item"
                                    style={{
                                        left: `calc(50% + ${x}px - ${offset}px)`,
                                        top: `calc(50% + ${y}px - ${offset}px)`,
                                    }}
                                >
                                    {step.icon}
                                </div>
                            );
                        })}
                    </motion.div>

                    <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-2">
                                {steps[activeIndex].title}
                            </h3>
                            <p className="text-gray-600 text-xs sm:text-sm">
                                {steps[activeIndex].description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section9;
