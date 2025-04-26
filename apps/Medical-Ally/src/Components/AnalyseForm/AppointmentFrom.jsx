import React, { useState } from "react";
import MultiStep from "react-multistep";
import "bootstrap/dist/css/bootstrap.min.css";

const StepOne = ({ formData, setFormData }) => (
  <div className="container">
    <h2>Step 1: Personal Information</h2>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <input
        type="text"
        id="name"
        className="form-control"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="form-control"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
    </div>
  </div>
);

const StepTwo = ({ formData, setFormData }) => (
  <div className="container">
    <h2>Step 2: Address Details</h2>
    <div className="mb-3">
      <label htmlFor="address" className="form-label">
        Address
      </label>
      <textarea
        id="address"
        className="form-control"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="city" className="form-label">
        City
      </label>
      <input
        type="text"
        id="city"
        className="form-control"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
    </div>
  </div>
);

const StepThree = ({ formData }) => (
  <div className="container">
    <h2>Step 3: Review Your Information</h2>
    <ul className="list-group">
      <li className="list-group-item">
        <strong>Name:</strong> {formData.name}
      </li>
      <li className="list-group-item">
        <strong>Email:</strong> {formData.email}
      </li>
      <li className="list-group-item">
        <strong>Address:</strong> {formData.address}
      </li>
      <li className="list-group-item">
        <strong>City:</strong> {formData.city}
      </li>
    </ul>
  </div>
);

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
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
    { name: "Step 3", component: <StepThree formData={formData} /> },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Multi-Step Form</h1>
      <MultiStep
        steps={steps}
        prevButton={{ title: "Previous", className: "btn btn-secondary" }}
        nextButton={{ title: "Next", className: "btn btn-primary" }}
        finishButton={{ title: "Submit", className: "btn btn-success" }}
      />
    </div>
  );
};

export default MultiStepForm;
