import React from "react";
import {
  TextField,
  Grid,
  Typography,
  MenuItem,
  Paper,
  Box,
} from "@mui/material";
import {
  smokingHabits,
  alcoholConsumption,
  exerciseHabits,
  stressLevels,
  vaccinationHistory,
  dietaryHabits,
} from "../Values";

const StepThree = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
      <Typography variant="h5" gutterBottom>
        Step 3: Medical History and Available Reports
      </Typography>
      <Box mt={2}>
        <Grid container spacing={3}>
          {/* Medical History Section */}
          <Grid item xs={12}>
            <TextField
              label="Current Medications (e.g., medicines, dosages, duration)"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.currentMedication}
              onChange={handleChange}
              name="currentMedication"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Existing Diagnosed Conditions (e.g., diabetes, hypertension)"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={formData.existingDiagnosedCondition}
              onChange={handleChange}
              name="existingDiagnosedCondition"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Past Medical History (e.g., surgeries, chronic illnesses)"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={formData.pastMedicalHistory}
              onChange={handleChange}
              name="pastMedicalHistory"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Family Medical History (e.g., hereditary diseases)"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={formData.familyMedicalHistory}
              onChange={handleChange}
              name="familyMedicalHistory"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Known Allergies (e.g., medication, food, environmental)"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
              value={formData.allergies}
              onChange={handleChange}
              name="allergies"
            />
          </Grid>

          {/* Lifestyle Factors Section */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Lifestyle Factors
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Smoking"
              variant="outlined"
              fullWidth
              value={formData.smoking}
              onChange={handleChange}
              name="smoking"
              helperText="Select your smoking habit"
            >
              {smokingHabits.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Alcohol Consumption"
              variant="outlined"
              fullWidth
              value={formData.alcoholConsumption}
              onChange={handleChange}
              name="alcoholConsumption"
              helperText="Select your alcohol consumption habit"
            >
              {alcoholConsumption.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Exercise Habits"
              variant="outlined"
              fullWidth
              value={formData.exerciseHabit}
              onChange={handleChange}
              name="exerciseHabit"
              helperText="Select your exercise habit"
            >
              {exerciseHabits.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Stress Level"
              variant="outlined"
              fullWidth
              value={formData.stressLevel}
              onChange={handleChange}
              name="stressLevel"
              helperText="Select your stress level"
            >
              {stressLevels.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Vaccination History"
              variant="outlined"
              fullWidth
              value={formData.vaccinationHistory}
              onChange={handleChange}
              name="vaccinationHistory"
              helperText="Select your vaccination history"
            >
              {vaccinationHistory.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Dietary Habits"
              variant="outlined"
              fullWidth
              value={formData.dietaryHabit}
              onChange={handleChange}
              name="dietaryHabit"
              helperText="Select your dietary habits"
            >
              {dietaryHabits.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Available Reports (e.g., diagnostic reports)"
              variant="outlined"
              fullWidth
              value={formData.availableReports}
              onChange={handleChange}
              name="availableReports"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Current Health Devices in Use (e.g., glucose monitor)"
              variant="outlined"
              fullWidth
              value={formData.currentHealthDevice}
              onChange={handleChange}
              name="currentHealthDevice"
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default StepThree;
