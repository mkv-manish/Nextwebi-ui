import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
    { label: "Company", to: "/company" },
    { label: "Services", to: "/services" },
    { label: "Hire Developers", to: "/hire-developers" },
    { label: "Solutions", to: "/solutions" },
    { label: "Technologies", to: "/technologies" },
    { label: "Our Work", to: "/our-work" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <header
            className={`fixed w-full py-2 z-50 transition-all duration-300 ${
                isScrolled ? "bg-white shadow-md text-black" : "text-white"
            } ${isOpen ? "bg-white " : ""}`}
        >
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl sm:text-3xl font-bold text-blue-800">
                    Next<span className="text-sky-400">webi</span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6 text-sm font-medium">
                    {navLinks.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className="hover:text-blue-600 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <Link
                    to="/contact"
                    className="hidden lg:block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                    Contact Us
                </Link>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button 
                        onClick={toggleMenu}
                        className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6 text-black" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white text-black shadow-lg mobile-menu">
                    <div className="px-4 py-6 flex flex-col space-y-4 text-sm font-medium">
                        {navLinks.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                onClick={toggleMenu}
                                className="py-3 px-2 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-gray-200">
                            <Link
                                to="/contact"
                                onClick={toggleMenu}
                                className="block bg-red-600 text-white px-4 py-3 rounded-md hover:bg-red-700 transition text-center"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};
export default Navbar;
