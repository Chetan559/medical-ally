import React from "react";

function Report(userData) {
  return (
    <div className="p-4 mt-4  bg-gray-50 dark:bg-gray-800 overflow-auto text-gray-900 dark:text-white rounded-lg shadow-md">
      <p className="text-lg text-center font-semibold ">Lab Reports</p>
      <hr />
      <p>{userData.availableReports || "N/A"}</p>
    </div>
  );
}

export default Report;
