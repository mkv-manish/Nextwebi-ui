
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
    { name: "Ecommerce", icon: <ShoppingCart className="w-8 h-8" /> },
    { name: "Healthcare", icon: <HeartPulse className="w-8 h-8" /> },
    { name: "Real Estate", icon: <Building className="w-8 h-8" /> },
    { name: "Media", icon: <Film className="w-8 h-8" /> },
    { name: "AI Software", icon: <BrainCircuit className="w-8 h-8" /> },
    { name: "Oil & Gas", icon: <Fuel className="w-8 h-8" /> },
    { name: "Manufacturing", icon: <Factory className="w-8 h-8" /> },
    { name: "Travel & Hospitality", icon: <Plane className="w-8 h-8" /> },
    { name: "Insurance", icon: <Shield className="w-8 h-8" /> },
    { name: "Security", icon: <Lock className="w-8 h-8" /> },
    { name: "Finance", icon: <DollarSign className="w-8 h-8" /> },
    { name: "Education", icon: <GraduationCap className="w-8 h-8" /> },
    { name: "Logistic", icon: <Truck className="w-8 h-8" /> },
    { name: "Sports", icon: <Dribbble className="w-8 h-8" /> },
    { name: "Food", icon: <Utensils className="w-8 h-8" /> },
    { name: "Agritech", icon: <Leaf className="w-8 h-8" /> },
];

const Section2 = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        Industry Specializations
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Leading start-ups, SMEs and large-scale organizations
                        have trusted us for their software development project
                        requirements.
                    </p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-5 bg-white rounded-lg shadow hover:shadow-lg transition"
                        >
                            <div className="text-gray-500 mb-2">
                                {industry.icon}
                            </div>
                            <span className="text-gray-800 text-sm">
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
