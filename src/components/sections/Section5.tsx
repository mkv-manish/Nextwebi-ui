import { ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
    "Software Development",
    "Web Development Services",
    "IT Services",
    "Security Engineering",
    "Cloud & Hosting Services",
    "Testing & QA",
    "Digital Marketing",
    "Platform",
    "RFID",
];

const serviceDetails: Record<string, string[]> = {
    "Software Development": [
        "Offshore Software Development",
        "Web Application Development",
        "Full-Stack Development",
        "Ecommerce Application Development",
        "ERP Application Development",
        "Microsoft SharePoint Customizations",
        "Custom Software Development",
        "Mobile App Development",
        "Application Migration & Re-Engineering",
        "On premise app development",
        "CRM Application Development",
    ],
    
};

const Section5 = () => {
    const [selected, setSelected] = useState("Software Development");
    return (
        <section className="py-12 sm:py-16 px-4 max-w-7xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-400 font-bold mb-3 sm:mb-4">
                Our Services
            </h2>
            <p className="max-w-4xl mx-auto text-gray-700 mb-8 sm:mb-12 text-sm sm:text-base">
                Become technology-driven with custom software development
                services. We strategically empower your business with tech-savvy
                teams, and end-to-end customizable IT services. As a reliable IT
                outsourcing company, and full stack expertise take away your
                stress of technological challenges for optimum growth &
                scalability.
            </p>

            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start text-left">
                <div className="w-full lg:w-1/3 border-r-0 lg:border-r pr-0 lg:pr-8">
                    {services.map((service) => (
                        <button
                            key={service}
                            onClick={() => setSelected(service)}
                            className={`w-full flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 rounded cursor-pointer transition text-sm sm:text-base ${
                                selected === service
                                    ? "bg-blue-900 text-white"
                                    : "hover:bg-gray-100 text-black"
                            }`}
                        >
                            {service}
                            {selected === service && <ArrowRight size={16} className="sm:w-4.5 sm:h-4.5" />}
                        </button>
                    ))}
                </div>
                <div className="w-full lg:w-2/3 bg-gray-50 p-4 sm:p-6 py-6 sm:py-10 rounded-lg mt-6 lg:mt-0">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{selected}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        {serviceDetails[selected]?.map((item: string, index: number) => (
                            <div key={index} className="flex gap-2 items-start">
                                <span className="text-black text-sm sm:text-md mt-0.5">▣</span>
                                <p className="text-gray-700 text-xs sm:text-sm">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-right mt-6 sm:mt-8">
                        <button className="bg-blue-600 text-white font-semibold px-3 sm:px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2 text-sm sm:text-base">
                            {selected} <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section5;
