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
} from "@mui/material";

const StepOne = ({ formData, setFormData }) => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Step 1: Personal Information
    </Typography>
    <TextField
      label="Name"
      variant="outlined"
      fullWidth
      margin="normal"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    />
    <TextField
      label="Email"
      variant="outlined"
      fullWidth
      margin="normal"
      type="email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
      multiline
      rows={4}
      value={formData.address}
      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
    />
    <TextField
      label="City"
      variant="outlined"
      fullWidth
      margin="normal"
      value={formData.city}
      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
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
          primary={<strong>Address:</strong>}
          secondary={formData.address}
        />
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
          <Button variant="contained" color="primary">
            Next
          </Button>
        }
        finishButton={
          <Button variant="contained" color="success">
            Submit
          </Button>
        }
      />
    </Container>
  );
};

export default AnalyseForm;
