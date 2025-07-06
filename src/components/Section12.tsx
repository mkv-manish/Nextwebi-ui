import { useEffect, useState } from "react";

// Example stats
const stats = [
    { count: "9+", label: "Years in Business" },
    { count: "1600+", label: "Projects Delivered" },
    { count: "600+", label: "Client Relationships" },
    { count: "20+", label: "Countries Served" },
];

// All logos
const allClients = [
    "/case1.jpg",
    "/case2.jpg",
    "/case3.jpg",
    "/case1.jpg",
    "/case2.jpg",
    "/case3.jpg",
    "/case1.jpg",
    "/case2.jpg",
    "/case3.jpg",
    "/case1.jpg",
    "/case2.jpg",
    "/case3.jpg",
    "/case1.jpg",
    "/case2.jpg",
    "/case3.jpg",
];

// Component
const Section12 = () => {
    const [logos, setLogos] = useState<string[][]>([]);

    useEffect(() => {
        const rows = 2;
        const cols = 4;
        let startIndex = 0;

        const rotate = () => {
            const visible: string[][] = [];
            for (let row = 0; row < rows; row++) {
                const rowItems: string[] = [];
                for (let col = 0; col < cols; col++) {
                    const index =
                        (startIndex + row * cols + col) % allClients.length;
                    rowItems.push(allClients[index]);
                }
                visible.push(rowItems);
            }
            setLogos(visible);
            startIndex = (startIndex + cols) % allClients.length;
        };

        rotate(); // first load
        const interval = setInterval(rotate, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-white py-16">
            {/* Stats */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
                {stats.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white shadow-md rounded-lg py-4 px-2"
                    >
                        <p className="text-3xl font-bold text-gray-900">
                            {item.count}
                        </p>
                        <p className="text-gray-600">{item.label}</p>
                    </div>
                ))}
            </div>

            {/* Headings */}
            <div className="text-center max-w-4xl mx-auto mb-8 px-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                    Trusted by 600+ Startups and
                </h2>
                <h3 className="text-xl md:text-2xl font-bold text-blue-400">
                    Enterprises across 20+ Nations
                </h3>
                <p className="mt-4 text-gray-600 text-sm md:text-base">
                    Nextwebi delivers high-end IT solutions to businesses and
                    offers the best class web solutions that help your business
                    succeed remarkably.
                </p>
                <a
                    href="#"
                    className="mt-4 inline-flex items-center text-blue-600 font-semibold hover:underline"
                >
                    Learn More About Us →
                </a>
            </div>

            {/* Auto rotating logos */}
            <div className="max-w-4xl mx-auto overflow-hidden">
                <div className="grid grid-cols-4 gap-6">
                    {logos.flat().map((src, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center p-4 animate-slide-up"
                        >
                            <img
                                src={src}
                                alt={`client-${i}`}
                                className="max-h-14 md:max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section12;
