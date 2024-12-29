import React from "react";

function Dashboard() {
  return (
    <>
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div className=" flex items-center justify-between h-12 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              Dashboard
            </p>

            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className=" w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-16 mb-4 justify-evenly">
          <div className="flex items-center justify-center rounded bg-gray-50 h-36 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              Total Patients
            </p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-36 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              Today Patients
            </p>
          </div>
          <div className="flex items-center justify-evenly rounded bg-gray-50 h-36 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              Today Appointments
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center h-72 mb-4 rounded bg-gray-50 dark:bg-gray-800">
          <div className="grid grid-cols-3 w-[100%] gap-16 mb-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-60 dark:bg-gray-700">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                Patients Summary
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-60 dark:bg-gray-700">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                Today Appointments
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-60 dark:bg-gray-700">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                Next Patients
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 mb-4">
          <div className="flex items-center justify-center rounded bg-gray-50 h-48 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              Patient Review
            </p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-48 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              Appointment Request
            </p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-48 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              Calender
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
