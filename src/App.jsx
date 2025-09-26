import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollTTop/ScrollToTop";
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services';
import DigiMarketing from './pages/DigiMarketing/DigiMarketing';
import WebDevelopment from './pages/WebDevelopment/WebDevelopment';
import ContactUs from './pages/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Preloader from "./pages/Preloder/Preloader";
import SocialMediaManagement from "./pages/SocialMediaManagement/SocialMediaManagement";
import CloudITInfrastructureSupport from "./pages/CloudITInfrastructureSupport/CloudITInfrastructureSupport";
import CreativeDesign from "./pages/CreativeDesign/CreativeDesign";

function App() {
  return (
    <Router>
      <ScrollToTop/>
<Routes>
  <Route path="/" element={<Preloader />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<AboutUs />} />
  <Route path="/contact" element={<ContactUs />} />
  <Route path="/services" element={<Services />} />
</Routes>

  {/* <Footer /> */}
</Router>


         
  )
}

export default App