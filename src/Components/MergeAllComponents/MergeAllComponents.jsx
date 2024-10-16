import Navbar from '../Navebar/Navebar'
import Home from '../Home/Home'
import Services from '../Services/Services'
import Projects from '../Projects/Projects'
import ContactUs from '../ContactUS/ContactUs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function MergeAllComponents() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element ={<ContactUs/>} />
          {/* Add other routes for Consulting, Pricing, etc. */}
        </Routes>
      </div>
    </Router>
  )
}

export default MergeAllComponents
