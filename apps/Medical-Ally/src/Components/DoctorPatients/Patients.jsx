import React from "react";
import Tabs from "./Tabs/Tabs";
import Sidebar from "./PatientSidebar/Sidebar";

function Patients() {
  return (
    <>
      <div className="p-4 border-2 h-full cursor-pointer grid grid-cols-12 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="p-4 mr-4 border-2 h-screen border-gray-200 border-dashed rounded-lg dark:border-gray-700 bg-gray-100 dark:bg-gray-600 sm:col-span-3 col-span-12">
          {/* patient sidebar*/}
          <Sidebar />
        </div>

        {/*primary symptoms, habis, history cards  */}
        <div className="px-4 border-2 h-screen grid border-gray-200 border-dashed rounded-lg dark:border-gray-700 sm:col-span-9 col-span-12">
          <Tabs />
        </div>
      </div>
    </>
  );
}

export default Patients;
