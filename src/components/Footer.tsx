import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#1b2a50] text-white py-10 ">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Office Locations */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Our Offices</h3>
                    <p className="mb-2">🇮🇳 India</p>
                    <p className="text-sm text-slate-300">
                        4th Floor, 32/1, Mpark, NCPR Industrial Layout,
                        <br />
                        Doddanekundi Industrial Area 2, Seetharampalya,
                        <br />
                        Mahadevapura, Bengaluru, Karnataka 560048.
                    </p>
                    <p className="mt-4 mb-2">🇦🇪 UAE</p>
                    <p className="text-sm text-slate-300">
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
                    <p className="text-sm">
                        Skype: <span className="font-medium">nextWebi</span>
                    </p>
                    <p className="text-sm">
                        Phone:{" "}
                        <a href="tel:+917619635111" className="hover:underline">
                            +91 76196 35111
                        </a>
                    </p>
                    <p className="text-sm">
                        Email:{" "}
                        <a
                            href="mailto:projects@nextwebi.com"
                            className="hover:underline"
                        >
                            projects@nextwebi.com
                        </a>
                    </p>
                    <p className="text-sm mt-3">
                        D-U-N-S Number:{" "}
                        <span className="font-medium">860499014</span>
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Services</h3>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li>
                            <Link to="/">Offshore Software Development</Link>
                        </li>
                        <li>
                            <Link to="/">Custom Software Development</Link>
                        </li>
                        <li>
                            <Link to="/">ERP Application Development</Link>
                        </li>
                        <li>
                            <Link to="/">CRM Application Development</Link>
                        </li>
                        <li>
                            <Link to="/">Mobile App Development</Link>
                        </li>
                        <li>
                            <Link to="/">Fullstack Development</Link>
                        </li>
                        <li>
                            <Link to="/">Ecommerce App Development</Link>
                        </li>
                    </ul>
                </div>

                {/* Learn */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Learn</h3>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li>
                            <Link to="/">About Us</Link>
                        </li>
                        <li>
                            <Link to="/">Careers</Link>
                        </li>
                        <li>
                            <Link to="/">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/">Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link to="/">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-between text-sm text-slate-400 mt-10 border-t border-slate-600  pt-8 px-6">
                <p>© 2025 Nextwebi IT Solutions. All Rights Reserved.</p>
                <p>Sitemap | Privacy Policy</p>
            </div>
        </footer>
    );
};
export default Footer;
