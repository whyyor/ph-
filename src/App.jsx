import Hero from "./pages/Hero";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Footer from "./pages/Footer";
import "./App.css";
import About from "./pages/About";

function App() {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <Contact />
      <About id="about" />
      <Footer />
    </>
  );
}

export default App;
