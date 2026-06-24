import { useEffect, useState } from "react";

import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Skills     from "./components/Skills";
import Experience from "./components/Experience";
import Projects   from "./components/Projects";
import Education  from "./components/Education";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";

export default function App() {
    const [dark, setDark] = useState(true);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    return (
        <div>
            <div className="min-h-screen font-sans antialiased">
                <Navbar dark={dark} setDark={setDark} />
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}