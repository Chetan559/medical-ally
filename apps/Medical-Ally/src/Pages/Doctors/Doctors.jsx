import React, { useState } from "react";
import Sidebar from "../../Components/DoctorSidebar/Sidebar";
import Maincontent from "../../Components/TempDoc/maincontent";

function Doctors() {
  const [activeContent, setActiveContent] = useState("dashboard"); // State to manage active content

  return (
    <div className="grid ">
      {/* Sidebar Component */}
      <div className=" bg-gray-100 dark:bg-gray-600">
        {/* Adjust the width */}
        <Sidebar onContentChange={setActiveContent} />
      </div>

      {/* Main Content */}
      <div className="sm:ml-[15.5rem] bg-gray-100 dark:bg-gray-600 ">
        <Maincontent content={activeContent} />
      </div>
    </div>
  );
}

export default Doctors;
