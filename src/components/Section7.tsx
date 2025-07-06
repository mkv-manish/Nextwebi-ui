import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const techStack = [
    { label: "Android", icon: "/icons/android.png" },
    { label: "Angular", icon: "/icons/angular.png" },
    { label: "Aws", icon: "/icons/aws.png" },
    { label: "Azure", icon: "/icons/azure.png" },
    { label: "Blockchain", icon: "/icons/blockchain.png" },
    { label: "Docker", icon: "/icons/docker.png" },
    { label: "C#", icon: "/icons/csharp.png" },
    { label: "C+", icon: "/icons/cplus.png" },
    { label: "Craft CMS", icon: "/icons/craftcms.png" },
    { label: "CSS3", icon: "/icons/css3.png" },
    { label: "Kubernetes", icon: "/icons/kubernetes.png" },
    { label: "Python", icon: "/icons/python.png" },
    { label: "React", icon: "/icons/react.png" },
    { label: "ROR", icon: "/icons/ror.png" },
    { label: "Salesforce", icon: "/icons/salesforce.png" },
    { label: "Sanity", icon: "/icons/sanity.png" },
    { label: "Swift", icon: "/icons/swift.png" },
    { label: "Vuejs", icon: "/icons/vuejs.png" },
    { label: "WordPress", icon: "/icons/wordpress.png" },
    { label: "Node.js", icon: "/icons/nodejs.png" },
    { label: "MongoDB", icon: "/icons/mongodb.png" },
    { label: "Laravel", icon: "/icons/laravel.png" },
    { label: "Jenkins", icon: "/icons/jenkins.png" },
    { label: "JavaScript", icon: "/icons/javascript.png" },
    { label: "Java", icon: "/icons/java.png" },
    { label: "iOS", icon: "/icons/ios.png" },
    { label: "HubSpot", icon: "/icons/hubspot.png" },
];

const renderSwiper = (reverse = false) => (
    <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        speed={4000}
        autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: reverse,
        }}
        breakpoints={{
            640: { slidesPerView: 5 },
            1024: { slidesPerView: 7 },
            1280: { slidesPerView: 9 },
        }}
        className="w-full"
    >
        {techStack.map((tech, index) => (
            <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center p-3 bg-white rounded-md shadow hover:shadow-lg transition">
                    <img
                        src={tech.icon}
                        alt={tech.label}
                        className="w-8 h-5 mb-1 object-contain"
                    />
                    <p className="text-xs font-medium">{tech.label}</p>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
);

const Section7 = () => {
    return (
        <section className="py-16 px-4  mx-auto text-center bg-gray-50">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Absolutely, We have thoroughly mastered the <br />
                technologies you prefer.
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                Our exceptionally skilled IT specialists are proficient in both
                classic and modern programming languages, as well as frameworks.
                We aim for excellence, choosing only the top-tier candidates
                when selecting our IT specialists.
            </p>

            {/* 3 Swiper rows */}
            <div className="flex flex-col gap-8">
                {renderSwiper(false)}
                {renderSwiper(true)}
                {renderSwiper(false)}
            </div>
        </section>
    );
};

export default Section7;
