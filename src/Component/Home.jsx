import React from "react";
import Hero from "./Home/Hero";
import About from "./Home/About";
import Products from "./Home/Products";
import Gallery from "./Home/Gallery";
import Paterners from "./Home/Paterners";
import ContactUs from "./Home/ContactUs";
import News from "./Home/News";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Paterners />
      <ContactUs />
      <News />
    </div>
  );
}
