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
    patientsFeels: "",
    appetite: "",
    sleepPatterns: "",
    hydrationStatus: "",
  });

  useEffect(() => {
    // Fetch data from the API
    fetch(
      "https://676be687bc36a202bb86197f.mockapi.io/api/appointments/symptomData/1"
    )
      .then((response) => response.json())
      .then((data) => {
        setSymptomsData({
          primarySymptoms: data.primarySymptoms,
          durationOfSymptoms: data.durationOfSymptoms,
          severityOfSymptoms: data.severityOfSymptoms,
          pulseRate: data.pulseRate,
          bodyTemp: data.bodyTemp,
          bloodPressure: data.bloodPressure,
          sugar: data.sugar,
          patientsFeels: data.patientsFeels,
          appetite: data.appetite,
          sleepPatterns: data.sleepPatterns,
          hydrationStatus: data.hydrationStatus,
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-4 border-2  grid object-contain border-gray-200 border-dashed rounded-lg text-gray-900 dark:text-white dark:border-gray-700 ">
      <div className="grid grid-cols-1 gap-4 mb-4 ">
        <div className="p-4 max-h-24 rounded bg-gray-50 dark:bg-gray-800 overflow-auto">
          <div className="sticky top-0 bg-gray-50 dark:bg-gray-800 z-10">
            <p className="text-lg text-left font-semibold ">Primary Symptoms</p>
            <hr />
          </div>
          <p className="mt-2">{symptomsData.primarySymptoms || "N/A"}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-16 mb-4 justify-evenly">
        <div className="flex items-center justify-between rounded bg-gray-50 h-12 dark:bg-gray-800 p-4">
          <p className="text-lg text-left font-semibold">
            Duration of Symptoms:-
            <span className="font-normal text-gray-500 dark:text-gray-400">
              {symptomsData.durationOfSymptoms || "N/A"}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between rounded bg-gray-50 h-12 dark:bg-gray-800 p-4">
          <p className="text-lg text-left font-semibold">
            Severity of Symptoms:-
            <span className="font-normal text-gray-500 dark:text-gray-400">
              {symptomsData.severityOfSymptoms || "N/A"}
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
        <div className="grid grid-cols-4 w-[100%] gap-16 mb-4">
          <div className="rounded bg-gray-50 dark:bg-gray-700 p-4 shadow-md h-40 flex flex-col justify-between">
            <p className="text-lg text-center font-semibold text-gray-800 dark:text-gray-200">
              Pulse Rate
            </p>
            <div className="flex items-center justify-between mt-2">
              <img src={HeartBeat} className="w-12 h-12" alt="Heartbeat Icon" />
              <div className="text-right">
                <p className="text-xl font-medium text-gray-800 dark:text-gray-100">
                  {symptomsData.pulseRate || "N/A"}
                </p>
                <p
                  className={`text-sm font-semibold ${
                    symptomsData.pulseRate < 60 || symptomsData.pulseRate > 100
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {symptomsData.pulseRate < 60
                    ? "Low"
                    : symptomsData.pulseRate > 100
                      ? "High"
                      : "Normal Range"}
                </p>
              </div>
            </div>
          </div>
          <div className="rounded bg-gray-50 dark:bg-gray-700 p-4 shadow-md h-40 flex flex-col justify-between">
            <p className="text-lg text-center font-semibold text-gray-800 dark:text-gray-200">
              Body Tempreture
            </p>
            <div className="flex items-center justify-between mt-2">
              <img src={BodyTemp} className="w-12 h-12" alt="Heartbeat Icon" />
              <div className="text-right">
                <p className="text-xl font-medium text-gray-800 dark:text-gray-100">
                  {symptomsData.bodyTemp || "N/A"}
                </p>
                <p
                  className={`text-sm font-semibold ${
                    symptomsData.bodyTemp < 36.1 || symptomsData.bodyTemp > 37.2
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {symptomsData.bodyTemp < 36.1
                    ? "Low"
                    : symptomsData.bodyTemp > 37.2
                      ? "High"
                      : "Normal Range"}
                </p>
              </div>
            </div>
          </div>
          <div className="rounded bg-gray-50 dark:bg-gray-700 p-4 shadow-md h-40 flex flex-col justify-between">
            <p className="text-lg text-center font-semibold text-gray-800 dark:text-gray-200">
              Blood Pressure
            </p>
            <div className="flex items-center justify-between mt-2">
              <img
                src={BloodPressure}
                className="w-12 h-12"
                alt="Heartbeat Icon"
              />
              <div className="text-right">
                <p className="text-xl font-medium text-gray-800 dark:text-gray-100">
                  {symptomsData.bloodPressure || "N/A"}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Normal Range
                </p>
              </div>
            </div>
          </div>
          <div className="rounded bg-gray-50 dark:bg-gray-700 p-4 shadow-md h-40 flex flex-col justify-between">
            <p className="text-lg text-center font-semibold text-gray-800 dark:text-gray-200">
              Blood Glucose
            </p>
            <div className="flex items-center justify-between mt-2">
              <img src={Glucose} className="w-12 h-12" alt="Heartbeat Icon" />
              <div className="text-right">
                <p className="text-xl font-medium text-gray-800 dark:text-gray-100">
                  {symptomsData.sugar || "N/A"}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Normal Range
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4 ">
        <div className="max-h-36 rounded bg-gray-50 dark:bg-gray-800 overflow-auto p-4">
          <div className="sticky top-0 bg-gray-50 dark:bg-gray-800 z-10">
            <p className="text-lg text-left font-semibold ">
              How does Patients Feel
            </p>
            <hr />
          </div>
          <p className="mt-2">{symptomsData.patientsFeels || "N/A"}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 mb-4">
        <div className=" items-center justify-between rounded bg-gray-50 h-fit dark:bg-gray-800 p-4">
          <p className="text-lg text-center font-semibold">
            Appetite Level
            <span className="block font-normal text-gray-500 dark:text-gray-400">
              {symptomsData.appetite || "N/A"}
            </span>
          </p>
        </div>
        <div className=" items-center justify-between rounded bg-gray-50 h-fit dark:bg-gray-800 p-4">
          <p className="text-lg text-center font-semibold">
            Sleep Patterns
            <span className="block font-normal text-gray-500 dark:text-gray-400">
              {symptomsData.sleepPatterns || "N/A"}
            </span>
          </p>
        </div>
        <div className=" items-center justify-between rounded bg-gray-50 h-fit dark:bg-gray-800 p-4">
          <p className="text-lg text-center font-semibold">
            Hydration Level
            <span className="block font-normal text-gray-500 dark:text-gray-400">
              {symptomsData.hydrationStatus || "N/A"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrimarySymptoms;
