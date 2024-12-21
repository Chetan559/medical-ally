import React, { useState } from "react";
import MultiStep from "react-multistep";
import {
  TextField,
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Box,
} from "@mui/material";
import { genders, blood } from "./Values.jsx";

const StepOne = ({ formData, setFormData }) => (
  <Container fixed>
    <Typography variant="h4" gutterBottom>
      Step 1: Personal Information
    </Typography>

    <TextField
      label="Name"
      variant="outlined"
      margin="normal"
      fullWidth
      sx={{ m: 1 }}
      required
      error={!formData.name && formData.showErrors}
      helperText={
        !formData.name && formData.showErrors ? "Name is required" : ""
      }
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    />
    <TextField
      label="Email"
      variant="outlined"
      fullWidth
      margin="normal"
      sx={{ m: 1, width: "40ch" }}
      type="email"
      required
      error={!formData.email && formData.showErrors}
      helperText={
        !formData.email && formData.showErrors ? "Email is required" : ""
      }
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    />
    <TextField
      label="Phone Number"
      variant="outlined"
      fullWidth
      margin="normal"
      sx={{ m: 1, width: "40ch" }}
      required
      error={!formData.phone && formData.showErrors}
      helperText={
        !formData.phone && formData.showErrors ? "Phone number is required" : ""
      }
      value={formData.phone}
      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
    />
    <TextField
      label="Date Of Birth"
      variant="outlined"
      margin="normal"
      sx={{ m: 1, width: "25ch" }}
      type="date"
      InputLabelProps={{ shrink: true, required: true }}
      required
      error={!formData.dob && formData.showErrors}
      helperText={
        !formData.dob && formData.showErrors ? "Phone number is required" : ""
      }
      value={formData.dob}
      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
    />
    <TextField
      select
      label="Gender"
      margin="normal"
      sx={{ m: 1, width: "25ch" }}
      value={formData.gender}
      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
      helperText="Please select your Gender"
    >
      {genders.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
    <TextField
      label="Weight"
      variant="outlined"
      fullWidth
      type="number"
      margin="normal"
      sx={{ m: 1, width: "30ch" }}
      required
      error={!formData.weight && formData.showErrors}
      helperText={
        !formData.weight && formData.showErrors ? "Weight is required" : ""
      }
      value={formData.weight}
      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
    />
    <TextField
      label="Height"
      variant="outlined"
      fullWidth
      margin="normal"
      type="number"
      sx={{ m: 1, width: "30ch" }}
      required
      error={!formData.height && formData.showErrors}
      helperText={
        !formData.height && formData.showErrors ? "Height is required" : ""
      }
      value={formData.height}
      onChange={(e) => setFormData({ ...formData, height: e.target.value })}
    />
    <TextField
      select
      label="Blood Group"
      margin="normal"
      sx={{ m: 1, width: "25ch" }}
      value={formData.bloodGroup}
      onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
      helperText="Select your Blood Group"
    >
      {blood.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
    <TextField
      label="Emergency Contact"
      variant="outlined"
      fullWidth
      margin="normal"
      sx={{ m: 1, width: "40ch" }}
      required
      error={!formData.emergencyContact && formData.showErrors}
      helperText={
        !formData.emergencyContact && formData.showErrors
          ? "Emergency Contact number is required"
          : ""
      }
      value={formData.emergencyContact}
      onChange={(e) =>
        setFormData({ ...formData, emergencyContact: e.target.value })
      }
    />
    <TextField
      label="Address (optional)"
      variant="outlined"
      margin="normal"
      fullWidth
      sx={{ m: 1 }}
      value={formData.address}
      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      multiline
      rows={4}
    />
  </Container>
);

const StepTwo = ({ formData, setFormData }) => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Step 2: Address Details
    </Typography>
    <TextField
      label="Address"
      variant="outlined"
      fullWidth
      margin="normal"
      required
      error={!formData.address && formData.showErrors}
      helperText={
        !formData.address && formData.showErrors ? "Address is required" : ""
      }
      multiline
      rows={4}
      value={formData.address}
      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
    />
    <TextField
      label="Address Line 2 (Optional)"
      variant="outlined"
      fullWidth
      margin="normal"
      value={formData.addressLine2}
      onChange={(e) =>
        setFormData({ ...formData, addressLine2: e.target.value })
      }
    />
    <TextField
      label="City"
      variant="outlined"
      fullWidth
      margin="normal"
      IsRequired
      error={!formData.city && formData.showErrors}
      helperText={
        !formData.city && formData.showErrors ? "City is required" : ""
      }
      value={formData.city}
      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
    />
    <TextField
      label="Postal Code (Optional)"
      variant="outlined"
      fullWidth
      margin="normal"
      value={formData.postalCode}
      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
    />
  </Container>
);

const StepThree = ({ formData }) => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Step 3: Review Your Information
    </Typography>
    <List>
      <ListItem>
        <ListItemText
          primary={<strong>Name:</strong>}
          secondary={formData.name}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={<strong>Email:</strong>}
          secondary={formData.email}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={<strong>Phone Number:</strong>}
          secondary={formData.phone}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={<strong>Date Of Birth:</strong>}
          secondary={formData.dob}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={<strong>Gender:</strong>}
          secondary={formData.gender}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={<strong>Weight:</strong>}
          secondary={formData.weight}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={<strong>Height:</strong>}
          secondary={formData.height}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={<strong>Blood Group:</strong>}
          secondary={formData.bloodGroup}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={<strong>Address:</strong>}
          secondary={formData.address}
        />
        {formData.addressLine2 && (
          <ListItemText
            primary={<strong>Address Line 2:</strong>}
            secondary={formData.addressLine2}
          />
        )}
        {formData.postalCode && (
          <ListItemText
            primary={<strong>Postal Code:</strong>}
            secondary={formData.postalCode}
          />
        )}
      </ListItem>
      <ListItem>
        <ListItemText
          primary={<strong>City:</strong>}
          secondary={formData.city}
        />
      </ListItem>
    </List>
  </Container>
);

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
    // section 2 : symptoms field
    city: "",
    postalCode: "",
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
    { name: "Step 3", component: <StepThree formData={formData} /> },
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
          <Button variant="contained" color="secondary">
            Previous
          </Button>
        }
        nextButton={
          <Button
            variant="contained"
            color="primary"
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
