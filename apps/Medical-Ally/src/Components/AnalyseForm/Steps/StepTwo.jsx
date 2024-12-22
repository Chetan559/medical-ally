import React from "react";
import { TextField, Grid, Typography, Slider, MenuItem } from "@mui/material";

import { marks, valuetext } from "../Values.jsx";

const StepTwo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Step 2: Current Symptoms
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Primary Symptoms"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          required
          error={!formData.primarySymptoms && formData.showErrors}
          helperText={
            !formData.primarySymptoms && formData.showErrors
              ? "List of Symptoms is required"
              : ""
          }
          value={formData.primarySymptoms}
          onChange={(e) =>
            setFormData({ ...formData, primarySymptoms: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Duration of Symptoms"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          required
          error={!formData.durationOfSymptoms && formData.showErrors}
          helperText={
            !formData.durationOfSymptoms && formData.showErrors
              ? "Duration of Symptoms is required"
              : ""
          }
          value={formData.durationOfSymptoms}
          onChange={(e) =>
            setFormData({ ...formData, durationOfSymptoms: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Severity of Symptoms
        </Typography>
        <Slider
          aria-label="Severity of Symptoms"
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
          sx={{ m: 1 }}
          value={formData.severityOfSymptoms}
          onChange={(e, newValue) =>
            setFormData({ ...formData, severityOfSymptoms: newValue })
          }
          getAriaValueText={valuetext} // Using imported valuetext
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Pulse Rate (bpm)"
          variant="outlined"
          margin="normal"
          type="number"
          fullWidth
          sx={{ m: 1 }}
          required
          error={!formData.pulseRate && formData.showErrors}
          helperText={
            !formData.pulseRate && formData.showErrors
              ? "Pulse Rate is required"
              : ""
          }
          value={formData.pulseRate}
          onChange={(e) =>
            setFormData({ ...formData, pulseRate: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Body Temperature (°C)"
          variant="outlined"
          margin="normal"
          type="number"
          fullWidth
          sx={{ m: 1 }}
          required
          error={!formData.bodyTemp && formData.showErrors}
          helperText={
            !formData.bodyTemp && formData.showErrors
              ? "Body Temperature is required"
              : ""
          }
          value={formData.bodyTemp}
          onChange={(e) =>
            setFormData({ ...formData, bodyTemp: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Blood Pressure (e.g., 120/80)"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          required
          error={!formData.bloodPressure && formData.showErrors}
          helperText={
            !formData.bloodPressure && formData.showErrors
              ? "Blood Pressure is required"
              : ""
          }
          value={formData.bloodPressure}
          onChange={(e) =>
            setFormData({ ...formData, bloodPressure: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Sugar Level (mg/dL)"
          variant="outlined"
          margin="normal"
          type="number"
          fullWidth
          sx={{ m: 1 }}
          value={formData.sugar}
          onChange={(e) => setFormData({ ...formData, sugar: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="How the patient feels (e.g., fatigued, dizzy)"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          multiline
          rows={3}
          value={formData.patientsFeels}
          onChange={(e) =>
            setFormData({ ...formData, patientsFeels: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Appetite Level (e.g., good, reduced)"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          value={formData.appetite}
          onChange={(e) =>
            setFormData({ ...formData, appetite: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Sleep Patterns (e.g., good, disrupted)"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          value={formData.sleepPatters}
          onChange={(e) =>
            setFormData({ ...formData, sleepPatters: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Hydration Status (e.g., adequate, low)"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          value={formData.hydrationStatus}
          onChange={(e) =>
            setFormData({ ...formData, hydrationStatus: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Other Observations"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          multiline
          rows={3}
          value={formData.otherObservations}
          onChange={(e) =>
            setFormData({ ...formData, otherObservations: e.target.value })
          }
        />
      </Grid>
    </Grid>
  );
};

export default StepTwo;
