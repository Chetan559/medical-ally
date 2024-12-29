import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../../Assets/User/profile-1.png";
import profile2 from "../../Assets/User/profile-2.png";
import profile3 from "../../Assets/User/profile-3.png";
import profile4 from "../../Assets/User/profile-4.png";
import "./Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Medical-Ally. Trust in
          their knowledge and experience to lead you towards a healthier and
          happier life.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Sudhanshu"
          title="General Surgeons"
          stars="4.5"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Mahendra"
          title="Neurosurgeon"
          stars="4.9"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Sneha"
          title="Physician"
          stars="4.2"
          reviews="450"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Chaitanya"
          title="Cardiologist"
          stars="5"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Doctors;
