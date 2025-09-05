import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services';
import DigiMarketing from './pages/DigiMarketing/DigiMarketing';
import WebDevelopment from './pages/WebDevelopment/WebDevelopment';
import ContactUs from './pages/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
  {/* <Navbar /> */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="/services" element={<Services />} />
    <Route path="/digital_marketing" element={<DigiMarketing />} />
    <Route path="/web_development" element={<WebDevelopment />} />
  </Routes>
  <Footer />
</Router>

         
  )
}

export default App