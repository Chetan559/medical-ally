import React from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import Hero from "../../../Components/hero/Hero";

function Home() {
  return (
    <div className="home-section">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
