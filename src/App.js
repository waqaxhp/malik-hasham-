import './App.css'
import Navbar from './Components/Navebar/Navebar.jsx'
import Home from './Components/Home/Home.jsx'
// import AllComponents from './Components/MergeAllComponents/MergeAllComponents.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Services from './Components/Services/Services.jsx'
import Consulting from './Components/Consulting/Consulting.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services/>
      <Projects/>
      {/* <AllComponents /> */}
      <Consulting/>
      <Footer />
    </div>
  )
}

export default App
