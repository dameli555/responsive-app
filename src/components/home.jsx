import React from "react";
import Hero from "./hero";
import "./home-style.css";
import Navbar from "./navbar";
import Price from "./price";
import Testimonials from "./testimonials";
import Faq from "./faq";
import Contact from "./contact";
import Footer from "./footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Price />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
