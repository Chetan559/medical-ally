import React from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import Hero from "../../../Components/hero/Hero";
import Info from "../../../Components/User-Info/Info";

function Home() {
  return (
    <div className="home-section">
      <Header />
      <Hero />
      <Info />
      <Footer />
    </div>
  );
}

export default Home;
