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
    const controls = useAnimation();

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % steps.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        controls.start({ rotate: -activeIndex * 72 });
    }, [activeIndex, controls]);

    return (
        <section className="py-16 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* Left Text */}
                <div className="max-w-lg">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Our Agile Process. <br />
                        <span className="text-blue-600">
                            Simple, Seamless, Streamlined
                        </span>
                    </h2>
                    <p className="text-gray-600 mb-8">
                        We follow a structured and agile development approach
                        with project management planner to ensure the successful
                        delivery of every project, focusing on quality,
                        cost-optimization, transparency, and client
                        satisfaction.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className={`px-4 py-2 rounded-full border text-sm ${
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
                <div className="relative w-[450px] h-[450px]">
                    <motion.div
                        animate={controls}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 rounded-full border border-gray-300"
                    >
                        {steps.map((step, i) => {
                            const angle = (360 / steps.length) * i;
                            const radius = 225;
                            const x =
                                radius * Math.cos((angle * Math.PI) / 180);
                            const y =
                                radius * Math.sin((angle * Math.PI) / 180);

                            return (
                                <div
                                    key={i}
                                    className="absolute flex items-center justify-center w-16 h-16 bg-white shadow rounded-lg text-blue-600"
                                    style={{
                                        left: `calc(50% + ${x}px - 24px)`,
                                        top: `calc(50% + ${y}px - 24px)`,
                                    }}
                                >
                                    {step.icon}
                                </div>
                            );
                        })}
                    </motion.div>

                    <div className="absolute inset-0 flex items-center justify-center text-center px-8">
                        <div>
                            <h3 className="text-xl font-bold text-blue-600 mb-2">
                                {steps[activeIndex].title}
                            </h3>
                            <p className="text-gray-600 text-sm">
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
