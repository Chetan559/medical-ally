import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../../Components/DoctorSidebar/Sidebar";
import Maincontent from "../../Components/TempDoc/maincontent";

function Doctors() {
  const [activeContent, setActiveContent] = useState("dashboard"); // State to manage active content

  return (
    <div className="grid grid-cols-12">
      {/* Sidebar Component */}
      <div className="sm:col-span-2 bg-gray-100 dark:bg-gray-600">
        {" "}
        {/* Adjust the width */}
        <Sidebar onContentChange={setActiveContent} />
      </div>

      {/* Main Content */}
      <div className="col-span-12 sm:col-span-10 bg-gray-100 dark:bg-gray-600 ">
        <Maincontent content={activeContent} />
      </div>
    </div>
  );
}

export default Doctors;
