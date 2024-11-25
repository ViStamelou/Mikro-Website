import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import HeroSection from "./pages/HeroSection/HeroSection";
import About from "./pages/AboutSection/AboutSection";
import GallerySection from "./pages/GallerySection/GallerySection";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <Router basename="/mikro-website">
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<GallerySection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

