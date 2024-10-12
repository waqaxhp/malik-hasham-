
import './App.css'
import Navbar from './Components/Navebar/Navebar.jsx'
import Home from './Components/Home/Home.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Services from './Components/Services/Services.jsx'
import Consulting from './Components/Consulting/Consulting.jsx'

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      
      {/* All sections on Home Page */}
      <section id="home">
        <Home />
      </section>
      
      <section id="services">
        <Services />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="consulting">
        <Consulting />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
