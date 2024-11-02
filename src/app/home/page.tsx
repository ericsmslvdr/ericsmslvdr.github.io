import { ContactMe } from "@/components/ContactMe";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

function Home() {
    return (
        <div className="bg-lightBackground dark:bg-darkBackground">
            <Header />
            <main>
                <Hero />
                <Skills />
                <Projects />
                <ContactMe />
            </main>
            <Footer />
        </div>
    );
}

export default Home;