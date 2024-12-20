import React from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import Hero from "../../../Components/hero/Hero";
import Info from "../../../Components/User-Info/Info";
import About from "../../../Components/UserAbout/About";
import BookAppointment from "../../../Components/BookAppointment/BookAppointment";
import Reviews from "../../../Components/UserReviews/Reviews";
import Doctors from "../../../Components/UserDoctors/Doctors";

function Home() {
  return (
    <div className="home-section">
      <Header />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Reviews />
      <Doctors />
      <Footer />
    </div>
  );
}

export default Home;
