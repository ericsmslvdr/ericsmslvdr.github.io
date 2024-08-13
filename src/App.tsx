import ContactMe from "./components/contact-me/ContactMe"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Projects from "./components/projects/Projects"
import Technologies from "./components/technologies/Technologies"

function App() {

  return (
    <div className="bg-lightBackground dark:bg-darkBackground">
      <Header />
      <main>
        <Hero />
        <Technologies />
        <Projects />
        <ContactMe />
      </main>
      <Footer />
    </div>
  )
}

export default App
