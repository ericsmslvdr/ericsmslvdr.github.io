import ContactMe from "./components/contact-me/ContactMe"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Projects from "./components/projects/Projects"
import Technologies from "./components/technologies/Technologies"

function App() {

  return (
    <div className="bg-dark">
      <Header />
      <Hero />
      <Technologies />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
