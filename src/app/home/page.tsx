import { ContactMe } from "@/components/contact-me"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"

const Home = () => {
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
    )
}

export default Home