import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./PatientCard/Card";
import Summary from "./GptSummary/Summary";
import Report from "./PatientReports/Report";

function Sidebar() {
  const { id } = useParams();
  const resolvedId = id ?? 5;
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    weight: "",
    height: "",
    bloodGroup: "",
    emergencyContact: "",
    img: "",
    gptSummary: "",
    availableReports: "",
  });

  useEffect(() => {
    // Fetch data from the API
    fetch(
      `https://676be687bc36a202bb86197f.mockapi.io/api/appointments/users/${resolvedId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUserData({
          name: data.name,
          email: data.email,
          phone: data.phone,
          dob: data.dob,
          gender: data.gender,
          weight: data.weight,
          height: data.height,
          bloodGroup: data.bloodGroup,
          emergencyContact: data.emergencyContact,
          img: data.img,
          gptSummary: data.gptSummary,
          availableReports: data.availableReports,
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [resolvedId]);

  return (
    <div className="overflow-auto ">
      <Card userData={userData} />
      <Summary userData={userData} />
      <Report userData={userData} />
    </div>
  );
}

export default Sidebar;
