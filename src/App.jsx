import "./App.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </>
  );
};

export default App;
