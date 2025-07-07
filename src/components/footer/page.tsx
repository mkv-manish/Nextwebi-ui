import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#1b2a50] text-white py-8 sm:py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {/* Office Locations */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Our Offices</h3>
                    <p className="mb-2 text-sm sm:text-base">🇮🇳 India</p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        4th Floor, 32/1, Mpark, NCPR Industrial Layout,
                        <br />
                        Doddanekundi Industrial Area 2, Seetharampalya,
                        <br />
                        Mahadevapura, Bengaluru, Karnataka 560048.
                    </p>
                    <p className="mt-4 mb-2 text-sm sm:text-base">🇦🇪 UAE</p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Office No.2042, ABN Group,
                        <br />
                        20th Floor, Burjuman Business Tower,
                        <br />
                        Al Mankhool, Burdubai Dubai.
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <p className="text-xs sm:text-sm">
                        Skype: <span className="font-medium">nextWebi</span>
                    </p>
                    <p className="text-xs sm:text-sm">
                        Phone:{" "}
                        <a href="tel:+917619635111" className="hover:underline">
                            +91 76196 35111
                        </a>
                    </p>
                    <p className="text-xs sm:text-sm">
                        Email:{" "}
                        <a
                            href="mailto:projects@nextwebi.com"
                            className="hover:underline"
                        >
                            projects@nextwebi.com
                        </a>
                    </p>
                    <p className="text-xs sm:text-sm mt-3">
                        D-U-N-S Number:{" "}
                        <span className="font-medium">860499014</span>
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Services</h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                        <li>
                            <Link to="/" className="hover:text-white transition-colors">Offshore Software Development</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-white transition-colors">Custom Software Development</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-white transition-colors">ERP Application Development</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-white transition-colors">CRM Application Development</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-white transition-colors">Mobile App Development</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-white transition-colors">Fullstack Development</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-white transition-colors">Ecommerce App Development</Link>
                        </li>
                    </ul>
                </div>

                {/* Learn */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Learn</h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                        <li>
                            <Link to="/" className="hover:text-white transition-colors">About Us</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-white transition-colors">Careers</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-white transition-colors">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-white transition-colors">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-white transition-colors">Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-slate-400 mt-8 sm:mt-10 border-t border-slate-600 pt-6 sm:pt-8 px-4 sm:px-6 space-y-2 sm:space-y-0">
                <p>© 2025 Nextwebi IT Solutions. All Rights Reserved.</p>
                <p>Sitemap | Privacy Policy</p>
            </div>
        </footer>
    );
};
export default Footer;
