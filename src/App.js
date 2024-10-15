
import './App.css';
import Navbar from './Components/Navebar/Navebar.jsx';
import Home from './Components/Home/Home.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Services from './Components/Services/Services.jsx';
import Consulting from './Components/Consulting/Consulting.jsx';
import ContactUs from './Components/ContactUS/ContactUs.jsx';
import Quality from './Components/Quality/Quality.jsx';
import Consultants from './Components/Consultants/Consultants.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <section id="home">
        <Home />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id='quality'>
        <Quality/>
      </section>
      
      <section id="consultants">
        <Consultants />
      </section> 

      <section id="consulting">
        <Consulting />
      </section>

      <section id="contactUs">
        <ContactUs/>
      </section>

      <Footer />
    </div>
  );
}

export default App;
