
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const resources = [
    {
        title: "Explore what our experts have to share with you",
        category: "Blogs",
        image: "/case3.jpg",
        link: "/blogs",
        overlayColor: "bg-blue-700/50",
    },
    {
        title: "Read to find out how we turned challenges to milestones",
        category: "Case Study",
        image: "/case2.jpg",
        link: "/case-studies",
        overlayColor: "bg-yellow-500/50 ",
    },
    {
        title: "View the glimpse of tech and design expertise",
        category: "Our Work",
        image: "/case1.jpg",
        link: "/our-work",
        overlayColor: "bg-blue-700/50",
    },
];

const Section1 = () => {
    return (
        <section className="py-12 sm:py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                        Learn from our Resources
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Stay updated with the latest happenings in the world of
                        emerging technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {resources.map((item, index) => (
                        <Link
                            to={item.link}
                            key={index}
                            className="relative rounded overflow-hidden group"
                        >
                            <img
                                src={item.image}
                                alt={item.category}
                                className="w-full h-56 sm:h-72 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div
                                className={`absolute inset-0 ${item.overlayColor} flex flex-col justify-end p-4 sm:p-6 transition duration-500 group-hover:bg-opacity-80`}
                            >
                                <div className="uppercase text-white text-xs mb-2">
                                    {item.category}
                                </div>
                                <h3 className="text-white text-base sm:text-lg font-semibold leading-snug mb-3 sm:mb-4">
                                    {item.title}
                                </h3>
                                <span className="inline-flex items-center text-white font-medium hover:underline text-sm sm:text-base">
                                    Read More{" "}
                                    <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Section1;
