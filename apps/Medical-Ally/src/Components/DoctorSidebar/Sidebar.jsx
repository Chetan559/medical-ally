import React, { useEffect, useState } from "react";
import sharmaji from "../../Assets/Doctor/sharmaji.png";
import { useSelector } from "react-redux";

function Sidebar({ onContentChange }) {
  const [userCount, setUserCount] = useState(null);

  const selectedPatientId = useSelector(
    (state) => state.patient.selectedPatientId
  );
  const resolvedId = selectedPatientId ?? 5; // Use default ID if not set

  useEffect(() => {
    fetch(
      `https://676be687bc36a202bb86197f.mockapi.io/api/appointments/symptomData/${resolvedId}`
    )
      .then((response) => response.json())
      .then((data) => setSymptomsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [resolvedId]);

  useEffect(() => {
    // Replace this URL with your actual API endpoint
    fetch("https://676be687bc36a202bb86197f.mockapi.io/api/appointments/users/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setUserCount(data.length);
      })
      .catch((error) => console.error("Error fetching user count:", error));
  }, []);

  const handleContentChange = (content) => {
    onContentChange(content);
  };
  console.log(userCount);
  return (
    <div>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col  px-4 py-6 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          {/* Profile Section */}
          <div className="flex flex-col items-center py-6 space-y-2">
            <img
              src={sharmaji}
              alt="Profile"
              className="w-24 h-24 rounded-full mb-3"
            />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Dr. Sharma
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              MBBS, FCPS-MD (MEDICINE)
            </p>
          </div>
          <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-500" />

          {/* Navigation Menu */}
          <ul className="space-y-4 font-medium flex flex-col items-start">
            <li>
              <button
                onClick={() => handleContentChange("dashboard")}
                className="flex items-center justify-between w-full p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleContentChange("appointments")}
                className="flex items-center  w-full p-3 text-gray-900 justify-between rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                  />
                </svg>

                <span className=" ml-3 whitespace-nowrap">Appointment</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  {userCount || 10}
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleContentChange("patients")}
                className="flex items-center  w-full justify-between p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className=" ml-3 whitespace-nowrap">Patients</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleContentChange("dashboard")}
                className="flex items-center justify-between w-full p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className=" ml-3 whitespace-nowrap">Users</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleContentChange("dashboard")}
                className="flex items-center justify-between  w-full p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                  />
                </svg>

                <span className=" ml-3 whitespace-nowrap">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
