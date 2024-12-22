import React from "react";
import {
  TextField,
  Grid,
  Typography,
  Slider,
  MenuItem,
  Paper,
  Box,
} from "@mui/material";
import {
  marks,
  valuetext,
  durationOfSymptoms,
  appetiteLevels,
  sleepPatterns,
  hydrationStatuses,
} from "../Values.jsx";

const StepTwo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
      <Typography variant="h5" gutterBottom>
        Step 2: Current Symptoms
      </Typography>
      <Box mt={2}>
        <Grid container spacing={3}>
          {/* Primary Symptoms */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Primary Symptoms"
              variant="outlined"
              fullWidth
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
              name="primarySymptoms"
            />
          </Grid>

          {/* Severity of Symptoms */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Severity of Symptoms
            </Typography>
            <Slider
              aria-label="Severity of Symptoms"
              step={null}
              valueLabelDisplay="auto"
              marks={marks}
              value={formData.severityOfSymptoms}
              onChange={(e, newValue) =>
                setFormData({ ...formData, severityOfSymptoms: newValue })
              }
              getAriaValueText={valuetext}
            />
          </Grid>

          {/* Duration of Symptoms */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              select
              label="Duration of Symptoms"
              fullWidth
              value={formData.durationOfSymptoms}
              onChange={handleChange}
              name="durationOfSymptoms"
              helperText="Select Duration of Symptoms"
            >
              {durationOfSymptoms.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Pulse Rate */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Pulse Rate (bpm)"
              variant="outlined"
              fullWidth
              type="number"
              required
              error={!formData.pulseRate && formData.showErrors}
              helperText={
                !formData.pulseRate && formData.showErrors
                  ? "Pulse Rate is required"
                  : ""
              }
              value={formData.pulseRate}
              onChange={handleChange}
              name="pulseRate"
            />
          </Grid>

          {/* Body Temperature */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Body Temperature (°C)"
              variant="outlined"
              fullWidth
              type="number"
              required
              error={!formData.bodyTemp && formData.showErrors}
              helperText={
                !formData.bodyTemp && formData.showErrors
                  ? "Body Temperature is required"
                  : ""
              }
              value={formData.bodyTemp}
              onChange={handleChange}
              name="bodyTemp"
            />
          </Grid>

          {/* Blood Pressure */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Blood Pressure (e.g., 120/80)"
              variant="outlined"
              fullWidth
              required
              error={!formData.bloodPressure && formData.showErrors}
              helperText={
                !formData.bloodPressure && formData.showErrors
                  ? "Blood Pressure is required"
                  : ""
              }
              value={formData.bloodPressure}
              onChange={handleChange}
              name="bloodPressure"
            />
          </Grid>

          {/* Sugar Level */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Sugar Level (mg/dL)"
              variant="outlined"
              fullWidth
              type="number"
              value={formData.sugar}
              onChange={handleChange}
              name="sugar"
            />
          </Grid>

          {/* Appetite Level */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              select
              label="Appetite Level"
              fullWidth
              value={formData.appetite}
              onChange={handleChange}
              name="appetite"
              helperText="Select Appetite Level"
            >
              {appetiteLevels.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Sleep Patterns */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              select
              label="Sleep Patterns"
              fullWidth
              value={formData.sleepPatterns}
              onChange={handleChange}
              name="sleepPatterns"
              helperText="Select Sleep Patterns"
            >
              {sleepPatterns.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Hydration Status */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              select
              label="Hydration Status"
              fullWidth
              value={formData.hydrationStatus}
              onChange={handleChange}
              name="hydrationStatus"
              helperText="Select Hydration Status"
            >
              {hydrationStatuses.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* How Patient Feels */}
          <Grid item xs={12}>
            <TextField
              label="How the patient feels (e.g., fatigued, dizzy)"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={formData.patientsFeels}
              onChange={handleChange}
              name="patientsFeels"
            />
          </Grid>

          {/* Other Observations */}
          <Grid item xs={12}>
            <TextField
              label="Other Observations"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={formData.otherObservations}
              onChange={handleChange}
              name="otherObservations"
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default StepTwo;
