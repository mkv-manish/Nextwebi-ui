import { useState } from "react";
// If you have a utility for class concatenation like clsx or classnames,
// you can import it here. For this example, we'll use direct Tailwind classes.
// import { cn } from "@/lib/utils";

const ContactPage = () => {
    const [captchaValue, setCaptchaValue] = useState("");
    const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
    const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
    const [captchaInput, setCaptchaInput] = useState("");

    const refreshCaptcha = () => {
        setNum1(Math.floor(Math.random() * 10));
        setNum2(Math.floor(Math.random() * 10));
        setCaptchaInput(""); // Clear the input field on refresh
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (parseInt(captchaInput) === num1 + num2) {
            alert(
                "Captcha correct! Form submitted (not really, this is just a demo)."
            );
            // Here you would typically send form data to your backend
        } else {
            alert("Incorrect captcha. Please try again.");
            refreshCaptcha(); // Refresh captcha on incorrect attempt
        }
    };

    return (
        // Main container has a dark blue background only at the very bottom
        // The top part with the content is white
        <section className="min-h-screen bg-[#1b2a50] flex flex-col items-center">
            <div className="w-full bg-white flex flex-col md:flex-row pb-16 md:pb-0">
                {" "}
                {/* Adjusted for bottom dark blue */}
                {/* Left Section: Get in Touch */}
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                        Get in Touch
                    </h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            What Drive Us ?
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Creativity is our heartbeat. We constantly challenge
                            ourselves to further our technical prowess and help
                            our customers to deliver exceptional customer
                            experience.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-800 font-medium">
                                    Call
                                </p>
                                <p className="text-gray-600">+91 76196 35111</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2h10z"
                                    />
                                    <path d="M8 11h.01M12 11h.01M16 11h.01" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-800 font-medium">
                                    Whats App
                                </p>
                                <p className="text-gray-600 flex items-center space-x-2">
                                    <span className="flex items-center">
                                        <img
                                            src="https://flagcdn.com/w20/in.png" // Example India flag
                                            alt="India flag"
                                            className="h-3 w-auto mr-1 inline-block"
                                        />
                                        +91 76196 35111
                                    </span>
                                    <span className="flex items-center">
                                        <img
                                            src="https://flagcdn.com/w20/ae.png" // Example UAE flag
                                            alt="UAE flag"
                                            className="h-3 w-auto mr-1 inline-block"
                                        />
                                        +971 568467827
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-800 font-medium">
                                    Email
                                </p>
                                <p className="text-gray-600">
                                    projects@nextwebi.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Section: Collaborate Form with overlap */}
                {/* Added negative margins (md:-mt-6 md:-mb-6) and z-index to create the overlap effect */}
                <div className="w-full md:w-1/2 bg-white shadow-xl rounded-lg overflow-hidden md:-mt-6 md:-mb-10 relative z-10">
                    {/* Header for the form with blue background */}
                    <div className="bg-blue-600 text-white py-4 px-8 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Collaborate with Nextwebi
                        </h2>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="p-8 md:p-12 space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="block text-gray-700 text-sm font-medium mb-1"
                                >
                                    Your Name
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    required
                                    className="w-full p-3 rounded-md bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="companyName"
                                    className="block text-gray-700 text-sm font-medium mb-1"
                                >
                                    Company Name
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    required
                                    className="w-full p-3 rounded-md bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                                    placeholder=""
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 text-sm font-medium mb-1"
                                >
                                    Email<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full p-3 rounded-md bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="contactNumber"
                                    className="block text-gray-700 text-sm font-medium mb-1"
                                >
                                    Your Contact Number
                                </label>
                                <div className="flex items-center">
                                    <span className="inline-flex items-center p-3 rounded-l-md bg-gray-100 text-gray-700 border border-gray-300">
                                        <img
                                            src="https://flagcdn.com/w20/in.png" // Example India flag
                                            alt="India flag"
                                            className="h-4 w-auto mr-1"
                                        />
                                        +91
                                    </span>
                                    <input
                                        type="tel"
                                        id="contactNumber"
                                        name="contactNumber"
                                        className="flex-1 p-3 rounded-r-md bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="projectDescription"
                                className="block text-gray-700 text-sm font-medium mb-1"
                            >
                                Describe Your Project Briefly
                                <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="projectDescription"
                                name="projectDescription"
                                rows={4}
                                required
                                className="w-full p-3 rounded-md bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                                placeholder=""
                            ></textarea>
                        </div>

                        <div>
                            <label
                                htmlFor="attachFile"
                                className="block text-gray-700 text-sm font-medium mb-2"
                            >
                                Attach a File
                            </label>
                            <div className="flex items-center justify-center w-full h-18 border-2 border-dashed border-gray-300 rounded-md bg-white text-gray-600 cursor-pointer hover:border-blue-500 hover:text-blue-500 transition-colors">
                                <input
                                    type="file"
                                    id="attachFile"
                                    name="attachFile"
                                    className="hidden"
                                />
                                <label
                                    htmlFor="attachFile"
                                    className="cursor-pointer"
                                >
                                    Browse or Drop your files here
                                </label>
                            </div>
                        </div>

                        {/* Captcha */}
                        <div className="flex items-center space-x-3 mt-4">
                            <span className="text-gray-700 text-sm font-medium">
                                Enter captcha results here
                                <span className="text-red-500">*</span>
                            </span>
                            <div className="flex items-center space-x-2">
                                <span className="text-red-500 text-lg font-bold">
                                    {num1} + {num2} =
                                </span>
                                <input
                                    type="text"
                                    id="captcha"
                                    name="captcha"
                                    required
                                    value={captchaInput}
                                    onChange={(e) =>
                                        setCaptchaInput(e.target.value)
                                    }
                                    className="w-24 p-2 rounded-md bg-white border border-gray-300 text-gray-900 text-center"
                                />
                                <button
                                    type="button"
                                    onClick={refreshCaptcha}
                                    className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    aria-label="Refresh Captcha"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004 12m7-9v5h.582m15.356 2A8.001 8.001 0 004 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center mt-4">
                            <input
                                type="checkbox"
                                id="portfolioCheckbox"
                                name="portfolioCheckbox"
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label
                                htmlFor="portfolioCheckbox"
                                className="ml-2 text-gray-700 text-sm"
                            >
                                Click here to quickly get portfolio in your
                                inbox
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white font-semibold py-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            {/* This div creates the dark blue background at the very bottom */}
            {/* Adjust height as needed */}
        </section>
    );
};

export default ContactPage;
