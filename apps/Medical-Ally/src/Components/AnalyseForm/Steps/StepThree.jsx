import React from "react";
import { TextField, Grid, Typography } from "@mui/material";

const StepThree = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Step 3: Medical History and Available Reports
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Current Medications (e.g., medicines, dosages, duration)"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          multiline
          rows={4}
          value={formData.currentMedication}
          onChange={(e) =>
            setFormData({ ...formData, currentMedication: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Existing Diagnosed Conditions (e.g., diabetes, hypertension)"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          multiline
          rows={3}
          value={formData.existingDiagnosedCondition}
          onChange={(e) =>
            setFormData({
              ...formData,
              existingDiagnosedCondition: e.target.value,
            })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Past Medical History (e.g., surgeries, chronic illnesses)"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          multiline
          rows={3}
          value={formData.pastMedicalHistory}
          onChange={(e) =>
            setFormData({ ...formData, pastMedicalHistory: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Family Medical History (e.g., hereditary diseases)"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          multiline
          rows={3}
          value={formData.familyMedicalHistory}
          onChange={(e) =>
            setFormData({ ...formData, familyMedicalHistory: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Known Allergies (e.g., medication, food, environmental)"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          multiline
          rows={2}
          value={formData.allergies}
          onChange={(e) =>
            setFormData({ ...formData, allergies: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Lifestyle Factors
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Smoking (e.g., yes/no; frequency)"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          value={formData.smoking}
          onChange={(e) =>
            setFormData({ ...formData, smoking: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Alcohol Consumption (e.g., yes/no; frequency)"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          value={formData.alcoholConsumption}
          onChange={(e) =>
            setFormData({ ...formData, alcoholConsumption: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Exercise Habits (e.g., sedentary, active)"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          value={formData.exerciseHabit}
          onChange={(e) =>
            setFormData({ ...formData, exerciseHabit: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Vaccination History (e.g., COVID-19, tetanus)"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          value={formData.vaccinationHistory}
          onChange={(e) =>
            setFormData({ ...formData, vaccinationHistory: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Available Reports (e.g., diagnostic reports)"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          value={formData.availableReports}
          onChange={(e) =>
            setFormData({ ...formData, availableReports: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Current Health Devices in Use (e.g., glucose monitor)"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          value={formData.currentHealthDevice}
          onChange={(e) =>
            setFormData({ ...formData, currentHealthDevice: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Dietary Habits (e.g., vegetarian, vegan)"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          value={formData.dietaryHabit}
          onChange={(e) =>
            setFormData({ ...formData, dietaryHabit: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Stress Level (low, moderate, high – description optional)"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{ m: 1 }}
          multiline
          rows={2}
          value={formData.stressLevel}
          onChange={(e) =>
            setFormData({ ...formData, stressLevel: e.target.value })
          }
        />
      </Grid>
    </Grid>
  );
};

export default StepThree;
