import Header from '../../features/header/Header'
import Hero from '../../features/hero/Hero'
import Skills from '../../features/skills/Skills'
import Projects from '../../features/projects/Projects'
import ContactMe from '../../features/contact-me/ContactMe'
import Footer from '../../features/footer/Footer'

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