import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function History() {
  const { id } = useParams();
  const resolvedId = id ?? 5;

  const [symptomsData, setSymptomsData] = useState({
    currentMedication: "",
    existingDiagnosedCondition: "",
    pastMedicalHistory: "",
    familyMedicalHistory: "",
    allergies: "",
  });

  useEffect(() => {
    // Fetch data from the API
    fetch(
      `https://676be687bc36a202bb86197f.mockapi.io/api/appointments/symptomData/${resolvedId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSymptomsData({
          currentMedication: data.currentMedication,
          existingDiagnosedCondition: data.existingDiagnosedCondition,
          pastMedicalHistory: data.pastMedicalHistory,
          familyMedicalHistory: data.familyMedicalHistory,
          allergies: data.allergies,
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [resolvedId]);
  return (
    <div className="p-4 border-2  grid object-contain border-gray-200 border-dashed rounded-lg text-gray-900 dark:text-white dark:border-gray-700 ">
      <div className="grid grid-cols-1 gap-4 mb-4 ">
        <div className="max-h-36 rounded bg-gray-50 dark:bg-gray-800 overflow-auto p-4">
          <div className="sticky top-0 bg-gray-50 dark:bg-gray-800 z-10">
            <p className="text-lg text-left font-semibold ">
              Current Medications:
            </p>
            <hr />
          </div>
          <p className="mt-2">{symptomsData.currentMedication || "N/A"}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4 ">
        <div className="max-h-36 rounded bg-gray-50 dark:bg-gray-800 overflow-auto p-4">
          <div className="sticky top-0 bg-gray-50 dark:bg-gray-800 z-10">
            <p className="text-lg text-left font-semibold ">
              Existing Diagnosed Conditions:
            </p>
            <hr />
          </div>
          <p className="mt-2">
            {symptomsData.existingDiagnosedCondition || "N/A"}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-16 mb-4 justify-evenly">
        <div className=" rounded bg-gray-50 max-h-48 dark:bg-gray-800 p-4 overflow-auto">
          <div className="sticky top-0 bg-gray-50 dark:bg-gray-800 z-10">
            <p className="text-lg text-left font-semibold ">
              Past Medical History:
            </p>
            <hr />
          </div>
          <p className="mt-2">{symptomsData.pastMedicalHistory || "N/A"}</p>
        </div>
        <div className=" rounded bg-gray-50 max-h-48 dark:bg-gray-800 p-4 overflow-auto">
          <div className="sticky top-0 bg-gray-50 dark:bg-gray-800 z-10">
            <p className="text-lg text-left font-semibold ">
              Family Medical History:
            </p>
            <hr />
          </div>
          <p className="mt-2">{symptomsData.familyMedicalHistory || "N/A"}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-4 ">
        <div className="max-h-36 rounded bg-gray-50 dark:bg-gray-800 overflow-auto p-4">
          <div className="sticky top-0 bg-gray-50 dark:bg-gray-800 z-10">
            <p className="text-lg text-left font-semibold ">Known Allergies:</p>
            <hr />
          </div>
          <p className="mt-2">{symptomsData.allergies || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}

export default History;
