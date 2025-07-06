

const techStack = [
    {
        category: "Frontend Development",
        bg: "bg-red-50",
        technologies: [
            { name: "React Js", icon: "/icons/reactjs.svg" },
            { name: "Next Js", icon: "/icons/nextjs.svg" },
            { name: "Vue JS", icon: "/icons/vuejs.svg" },
            { name: "Angular Js", icon: "/icons/angular.svg" },
            { name: "HTML5", icon: "/icons/html5.svg" },
            { name: "CSS 3", icon: "/icons/webflow.svg" },
            { name: "Wordpress", icon: "/icons/wordpress.svg" },
            { name: "Webflow", icon: "/icons/webflow.svg" },
        ],
    },
    {
        category: "Backend Development",
        bg: "bg-green-50",
        technologies: [
            { name: "Node Js", icon: "/icons/nodejs.svg" },
            { name: ".Net", icon: "/icons/csharp.svg" },
            { name: "Java", icon: "/icons/java.svg" },
            { name: "Python", icon: "/icons/python.svg" },
            { name: "C#", icon: "/icons/csharp.svg" },
            { name: "PHP", icon: "/icons/php.svg" },
            { name: "Go-Lang", icon: "/icons/golang.svg" },
        ],
    },
    {
        category: "Mobile Frameworks",
        bg: "bg-blue-50",
        technologies: [
            { name: "IOS", icon: "/icons/ios.svg" },
            { name: "Android", icon: "/icons/android.svg" },
            { name: "Flutter", icon: "/icons/flutter.svg" },
            { name: "Kotlin", icon: "/icons/kotlin.svg" },
            { name: "React Native", icon: "/icons/reactjs.svg" },
        ],
    },
    {
        category: "Cloud & DevOps",
        bg: "bg-yellow-50",
        technologies: [
            { name: "Azure", icon: "/icons/azure.svg" },
            { name: "AWS", icon: "/icons/aws.svg" },
            { name: "Google Cloud", icon: "/icons/php.svg" },
            { name: "Docker", icon: "/icons/docker.svg" },
            { name: "Bitbucket", icon: "/icons/php.svg" },
            { name: "Github", icon: "/icons/github.svg" },
            { name: "Gitlab", icon: "/icons/aws.svg" },
            { name: "Sharepoint", icon: "/icons/kotlin.svg" },
        ],
    },
];

const Section4 = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-8 space-y-8">
            <div className="text-center py-10 px-4">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
                    Hire Tech Experts
                </h1>
                <p className="text-gray-700 max-w-3xl mx-auto text-sm md:text-base">
                    Grow your development team by hiring tech experts from us,
                    we align with your project requirements and timezone,
                    deploying resources for both short-term and long term
                    contracts.
                </p>
            </div>

            {techStack.map((section) => (
                <div
                    key={section.category}
                    className={`${section.bg} p-6 rounded-lg`}
                >
                    <h3 className="text-lg md:text-xl font-bold mb-4">
                        {section.category}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {section.technologies.map((tech) => (
                            <div
                                key={tech.name}
                                className="flex items-center gap-2 bg-white py-2 px-4 rounded-full shadow text-sm hover:scale-105 transition"
                            >
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    width={20}
                                    height={20}
                                />
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};
export default Section4;
