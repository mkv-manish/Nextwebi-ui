import ContactPage from "./components/contact us/page";
import Footer from "./components/footer/page";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar/page";
import Section1 from "./components/sections/Section1";
import Section10 from "./components/sections/Section10";
import Section11 from "./components/sections/Section11";
import Section12 from "./components/sections/Section12";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import Section4 from "./components/sections/Section4";
import Section5 from "./components/sections/Section5";
import Section6 from "./components/sections/Section6";
import Section7 from "./components/sections/Section7";
import Section8 from "./components/sections/Section8";
import Section9 from "./components/sections/Section9";
import "./index.css";

function App() {
    return (
        <>
            <div>
                <Navbar />
                <HeroSection />
                <Section12 />
                <Section11 />
                <Section10 />
                <Section9 />
                <Section8 />
                <Section7 />
                <Section6 />
                <Section5 />
                <Section4 />
                <Section3 />
                <Section2 />
                <Section1 />
                <ContactPage />
                <Footer />
            </div>
        </>
    );
}

export default App;
