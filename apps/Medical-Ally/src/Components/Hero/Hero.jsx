import React, { useEffect, useState } from "react";
import Doctor from "../../Assets/User/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faMagnifyingGlassChart,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import { toast } from "react-toastify";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAnalyseBtnClick = () => {
    navigate("/analyse");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container" id="home">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Hospital at Home</p>
          <h2 className="text-title">
            The Best Reliable Health Service In Your Hands
          </h2>
          <p className="text-descritpion">
            Revolutionizing Healthcare by Intelligent Patient Data Management
            System with GenAI.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleAnalyseBtnClick}
          >
            <FontAwesomeIcon icon={faMagnifyingGlassChart} /> Analyse
          </button>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
