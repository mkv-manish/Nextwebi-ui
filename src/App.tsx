import ContactPage from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section10 from "./components/Section10";
import Section11 from "./components/Section11";
import Section12 from "./components/Section12";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
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
