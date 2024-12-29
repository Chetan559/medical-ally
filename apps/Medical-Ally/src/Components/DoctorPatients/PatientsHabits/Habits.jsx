import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Habits() {
  const { id } = useParams();
  const resolvedId = id ?? 5;

  const [symptomsData, setSymptomsData] = useState({
    smoking: "",
    alcoholConsumption: "",
    exerciseHabit: "",
    vaccinationHistory: "",
    currentHealthDevice: "",
    dietaryHabit: "",
    stressLevel: "",
  });

  useEffect(() => {
    // Fetch data from the API
    fetch(
      `https://676be687bc36a202bb86197f.mockapi.io/api/appointments/symptomData/${resolvedId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSymptomsData({
          smoking: data.smoking,
          alcoholConsumption: data.alcoholConsumption,
          exerciseHabit: data.exerciseHabit,
          vaccinationHistory: data.vaccinationHistory,
          currentHealthDevice: data.currentHealthDevice,
          dietaryHabit: data.dietaryHabit,
          stressLevel: data.stressLevel,
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [resolvedId]);

  return (
    <div className="p-4 border-2  grid object-contain border-gray-200 border-dashed rounded-lg text-gray-900 dark:text-white dark:border-gray-700 ">
      <div className="grid grid-cols-2 gap-16 mb-4 justify-evenly">
        <div className="flex items-center justify-between rounded bg-gray-50 h-12 dark:bg-gray-800 p-4">
          <p className="text-lg text-left font-semibold">
            Smoking:-
            <span className="font-normal text-gray-500 dark:text-gray-400">
              {symptomsData.smoking || "N/A"}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between rounded bg-gray-50 h-12 dark:bg-gray-800 p-4">
          <p className="text-lg text-left font-semibold">
            Alcohol Consumption:-
            <span className="font-normal text-gray-500 dark:text-gray-400">
              {symptomsData.alcoholConsumption || "N/A"}
            </span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-16 mb-4 justify-evenly">
        <div className="flex items-center justify-between rounded bg-gray-50 h-12 dark:bg-gray-800 p-4">
          <p className="text-lg text-left font-semibold">
            Exercise Habits:-
            <span className="font-normal text-gray-500 dark:text-gray-400">
              {symptomsData.exerciseHabit || "N/A"}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between rounded bg-gray-50 h-12 dark:bg-gray-800 p-4">
          <p className="text-lg text-left font-semibold">
            Dietary Habits:-
            <span className="font-normal text-gray-500 dark:text-gray-400">
              {symptomsData.dietaryHabit || "N/A"}
            </span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-16 mb-4 justify-evenly">
        <div className="flex items-center justify-between rounded bg-gray-50 h-12 dark:bg-gray-800 p-4">
          <p className="text-lg text-left font-semibold">
            Stress Level:-
            <span className="font-normal text-gray-500 dark:text-gray-400">
              {symptomsData.stressLevel || "N/A"}
            </span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-4 ">
        <div className="max-h-36 rounded bg-gray-50 dark:bg-gray-800 overflow-auto p-4">
          <div className="sticky top-0 bg-gray-50 dark:bg-gray-800 z-10">
            <p className="text-lg text-left font-semibold ">
              Vaccination History:-
            </p>
            <hr />
          </div>
          <p className="mt-2">{symptomsData.vaccinationHistory || "N/A"}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4 ">
        <div className="max-h-36 rounded bg-gray-50 dark:bg-gray-800 overflow-auto p-4">
          <div className="sticky top-0 bg-gray-50 dark:bg-gray-800 z-10">
            <p className="text-lg text-left font-semibold ">
              Current Heath Devices:-
            </p>
            <hr />
          </div>
          <p className="mt-2">{symptomsData.currentHealthDevice || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}

export default Habits;
