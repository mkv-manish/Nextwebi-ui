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

    return (
        <header
            className={`fixed w-full py-2 z-50 transition-all duration-300 ${
                isScrolled ? "bg-white shadow-md text-black" : "text-white"
            } ${isOpen ? "bg-white " : ""}`}
        >
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-3xl font-bold text-blue-800">
                    Next<span className="text-sky-400">webi</span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6 text-sm font-medium">
                    {navLinks.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className="hover:text-blue-600"
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
                    <button onClick={toggleMenu}>
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
                <div className="md:hidden bg-white text-black shadow-md">
                    <div className="px-4 py-4 flex flex-col space-y-4 text-sm font-medium">
                        {navLinks.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                onClick={toggleMenu}
                                className="hover:text-blue-600"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={toggleMenu}
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};
export default Navbar;
