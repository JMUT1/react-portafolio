import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experince from "./components/experience/Experience";
import Service from "./components/service/Service";
import Portafolio from "./components/service/Service";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experince />
      {/* <Service /> */}
      <Portafolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
