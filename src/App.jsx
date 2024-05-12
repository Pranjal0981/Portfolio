import Test from "./Test";
import "./app.scss";
import Footer from "./components/Footer";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Work from "./components/whatwedid/Work";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Work">
        <Parallax type="Work" />
      </section>
      <div>
        <Work />
      </div>
      <div id="Our Team">
        <Portfolio />

      </div>
      
      <section id="Contact">
        <Contact />
      </section>
      <div className="foot">

        <Footer />
      </div>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
