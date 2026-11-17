import ContactMe from "@/components/sections/ContactMe/ContactMe";
import Footer from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
// import { Projects } from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main>
                <Hero />
                <Skills />
                {/* <Projects /> */}
                <ContactMe />
            </main>
            <Footer />
        </div>
    );
}

export default Home;