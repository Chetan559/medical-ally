import React from "react";

function Summary({ userData }) {
  return (
    <div className="p-4 mt-4 max-h-56 bg-gray-50 dark:bg-gray-800 overflow-auto  text-gray-900 dark:text-white rounded-lg shadow-md">
      <div className="sticky top-0 bg-gray-50 dark:bg-gray-800 z-10">
        <p className="text-lg text-center font-semibold ">Gpt Summary</p>
        <hr />
      </div>
      <p className="mt-2">{userData.gptSummary || "N\A"}</p>
    </div>
  );
}

export default Summary;
