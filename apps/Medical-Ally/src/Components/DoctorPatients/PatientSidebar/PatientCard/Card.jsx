import React from "react";
import sharmaji from "../../../../Assets/Doctor/sharmaji.png";

function Card({ userData }) {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-md">
      <div className="flex items-start">
        {/* Image Placeholder */}
        <div className="flex-shrink-0 w-16 h-16 bg-slate-50 dark:bg-gray-600 rounded-full flex items-center justify-center">
          <img
            className="rounded-full "
            src={userData.img || sharmaji}
            alt="Profile"
          />
        </div>

        {/* Name and Email */}
        <div className="ml-4">
          <p className="text-lg font-semibold">{userData.name || "Name"}</p>
          <p className="text-sm text-gray-400 ">{userData.email || "email"}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
        {/* Left Column */}
        <div>
          <p className="font-semibold">
            phone
            <span className="block font-normal text-gray-500 dark:text-gray-400">
              {userData.phone || "N/A"}
            </span>
          </p>
          <p className="font-semibold">
            Weight
            <span className="block font-normal text-gray-500 dark:text-gray-400">
              {userData.weight || "N/A"}
            </span>
          </p>
          <p className="font-semibold">
            gender
            <span className="block font-normal text-gray-500 dark:text-gray-400">
              {userData.gender || "N/A"}
            </span>
          </p>
          <p className="font-semibold">
            Date Of Birth
            <span className="block font-normal text-gray-500 dark:text-gray-400">
              {userData.dob || "N/A"}
            </span>
          </p>
        </div>

        {/* Right Column */}
        <div>
          <p className="font-semibold">
            emergency
            <span className="block font-normal text-gray-500 dark:text-gray-400">
              {userData.emergencyContact || "N/A"}
            </span>
          </p>
          <p className="font-semibold">
            Height
            <span className="block font-normal text-gray-500 dark:text-gray-400">
              {userData.height || "N/A"}
            </span>
          </p>
          <p className="font-semibold">
            Blood Group
            <span className="block font-normal text-gray-500 dark:text-gray-400">
              {userData.bloodGroup || "N/A"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
