
import {
    ShoppingCart,
    HeartPulse,
    Building,
    Film,
    BrainCircuit,
    Fuel,
    Factory,
    Plane,
    Shield,
    Lock,
    DollarSign,
    GraduationCap,
    Truck,
    Dribbble,
    Utensils,
    Leaf,
} from "lucide-react";

const industries = [
    { name: "Ecommerce", icon: <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { name: "Healthcare", icon: <HeartPulse className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { name: "Real Estate", icon: <Building className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { name: "Media", icon: <Film className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { name: "AI Software", icon: <BrainCircuit className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { name: "Oil & Gas", icon: <Fuel className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { name: "Manufacturing", icon: <Factory className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { name: "Travel & Hospitality", icon: <Plane className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { name: "Insurance", icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { name: "Security", icon: <Lock className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { name: "Finance", icon: <DollarSign className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { name: "Education", icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { name: "Logistic", icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { name: "Sports", icon: <Dribbble className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { name: "Food", icon: <Utensils className="w-6 h-6 sm:w-8 sm:h-8" /> },
    { name: "Agritech", icon: <Leaf className="w-6 h-6 sm:w-8 sm:h-8" /> },
];

const Section2 = () => {
    return (
        <section className="py-12 sm:py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                        Industry Specializations
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                        Leading start-ups, SMEs and large-scale organizations
                        have trusted us for their software development project
                        requirements.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-3 sm:p-5 bg-white rounded-lg shadow hover:shadow-lg transition"
                        >
                            <div className="text-gray-500 mb-2">
                                {industry.icon}
                            </div>
                            <span className="text-gray-800 text-xs sm:text-sm text-center leading-tight">
                                {industry.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Section2;
