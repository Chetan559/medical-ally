import React, { useEffect, useState } from "react";
import BloodPressure from "../../../../public/blood-pressure.svg";
import BodyTemp from "../../../../public/body-temp.svg";
import HeartBeat from "../../../../public/heart-beat-svgrepo-com.svg";
import Glucose from "../../../../public/glucose.svg";

function PrimarySymptoms() {
  const [symptomsData, setSymptomsData] = useState({
    primarySymptoms: "",
    durationOfSymptoms: "",
    severityOfSymptoms: "",
    pulseRate: "",
    bodyTemp: "",
    bloodPressure: "",
    sugar: "",
  });

  return (
    <div className="p-4 border-2  grid object-contain border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className=" flex items-center justify-between h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            Primary Symptoms
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-16 mb-4 justify-evenly">
        <div className="flex items-center justify-center rounded bg-gray-50 h-12 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            Duration of Symptoms
          </p>
        </div>
        <div className="flex items-center justify-evenly rounded bg-gray-50 h-12 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            Severity of Symptoms
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
        <div className="grid grid-cols-4 w-[100%] gap-16 mb-4">
          <div className="flex items-center justify-center rounded bg-gray-50 h-40 dark:bg-gray-700">
            <img src={HeartBeat} width={50} height={50} />
            <p className=" text-gray-400 dark:text-gray-500">Pulse Rate</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-40 dark:bg-gray-700">
            <img src={BodyTemp} width={50} height={50} />
            <p className=" text-gray-400 dark:text-gray-500">Body Tempreture</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-40 dark:bg-gray-700">
            <img src={BloodPressure} width={50} height={50} />
            <p className=" text-gray-400 dark:text-gray-500">Blood Pressure</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-40 dark:bg-gray-700">
            <img src={Glucose} width={50} height={50} />
            <p className=" text-gray-400 dark:text-gray-500">Blood Glucose</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className=" flex items-center justify-between h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            How does Patients Feel
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 mb-4">
        <div className="flex items-center justify-center rounded bg-gray-50 h-12 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            Appetite Level
          </p>
        </div>
        <div className="flex items-center justify-center rounded bg-gray-50 h-12 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            Sleep Patterns
          </p>
        </div>
        <div className="flex items-center justify-center rounded bg-gray-50 h-12 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            Hydration Level
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrimarySymptoms;
