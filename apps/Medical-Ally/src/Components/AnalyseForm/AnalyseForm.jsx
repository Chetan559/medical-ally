import React, { useState } from "react";
import MultiStep from "react-multistep";
import StepOne from "./Steps/StepOne.jsx";
import StepTwo from "./Steps/StepTwo.jsx";
import StepThree from "./Steps/StepThree.jsx";
import StepFour from "./Steps/StepFour.jsx";
import { buttonStyle } from "./Values.jsx";
import { Button, Container, Typography } from "@mui/material";

const AnalyseForm = () => {
  const [formData, setFormData] = useState({
    // section 1 personal info field
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    weight: "",
    height: "",
    bloodGroup: "",
    emergencyContact: "",
    address: "",
    city: "",
    postalCode: "",
    // section 2 : symptoms field
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
    otherObservations: "",
    // section 3 Medical history
    currentMedication: "",
    existingDiagnosedCondition: "",
    pastMedicalHistory: "",
    familyMedicalHistory: "",
    allergies: "",
    smoking: "",
    alcoholConsumption: "",
    exerciseHabit: "",
    availableReports: "",
    vaccinationHistory: "",
    currentHealthDevice: "",
    dietaryHabit: "",
    stressLevel: "",
    showErrors: false,
  });

  const steps = [
    {
      name: "Step 1",
      component: <StepOne formData={formData} setFormData={setFormData} />,
    },
    {
      name: "Step 2",
      component: <StepTwo formData={formData} setFormData={setFormData} />,
    },
    {
      name: "Step 3",
      component: <StepThree formData={formData} setFormData={setFormData} />,
    },
    {
      name: "Step 4",
      component: <StepFour formData={formData} />,
    },
  ];

  const validateStep = (stepIndex) => {
    let isValid = true;

    if (stepIndex === 0) {
      const { name, email, phone, dob, weight, height, emergencyContact } =
        formData;
      isValid =
        name.trim() &&
        email.trim() &&
        phone.trim() &&
        dob.trim() &&
        weight.trim() &&
        height.trim() &&
        emergencyContact.trim();
    } else if (stepIndex === 1) {
      const { address, city } = formData;
      isValid = address.trim() && city.trim();
    }

    if (!isValid) {
      setFormData({ ...formData, showErrors: true });
    }

    return isValid;
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Multi-Step Form
      </Typography>
      <MultiStep
        steps={steps}
        prevButton={
          <Button variant="contained" color="secondary" sx={buttonStyle}>
            Previous
          </Button>
        }
        nextButton={
          <Button
            variant="contained"
            color="primary"
            sx={buttonStyle}
            onClick={() => {
              const currentStepIndex = steps.findIndex(
                (step) =>
                  step.component === steps[formData.currentStep].component
              );
              return validateStep(currentStepIndex);
            }}
          >
            Next
          </Button>
        }
        finishButton={
          <Button
            variant="contained"
            sx={buttonStyle}
            color="success"
            onClick={() => {
              if (validateStep(steps.length - 1)) {
                alert("Form submitted successfully!");
              }
            }}
          >
            Submit
          </Button>
        }
        onNext={(stepIndex) => validateStep(stepIndex)}
      />
    </Container>
  );
};

export default AnalyseForm;
