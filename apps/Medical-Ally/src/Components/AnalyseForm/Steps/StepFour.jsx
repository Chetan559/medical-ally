import React from "react";
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import {
  Person,
  HealthAndSafety,
  Medication,
  LocalHospital,
} from "@mui/icons-material";

const StepFour = ({ formData }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Step 4: Review Your Information
        </Typography>
      </Grid>
      {/* Personal Information Section */}
      <Grid item xs={12} sm={6}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" color="primary" gutterBottom>
              <Person sx={{ marginRight: 1 }} /> Personal Information
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
                  primary={<strong>Emergency Contact:</strong>}
                  secondary={formData.emergencyContact}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>

      {/* Symptoms Section */}
      <Grid item xs={12} sm={6}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" color="primary" gutterBottom>
              <HealthAndSafety sx={{ marginRight: 1 }} /> Symptoms Information
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary={<strong>Primary Symptoms:</strong>}
                  secondary={formData.primarySymptoms}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>Duration of Symptoms:</strong>}
                  secondary={formData.durationOfSymptoms}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>Severity of Symptoms:</strong>}
                  secondary={formData.severityOfSymptoms}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>Pulse Rate:</strong>}
                  secondary={formData.pulseRate}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>Body Temperature:</strong>}
                  secondary={formData.bodyTemp}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>Blood Pressure:</strong>}
                  secondary={formData.bloodPressure}
                />
              </ListItem>
              {formData.sugar && (
                <ListItem>
                  <ListItemText
                    primary={<strong>Sugar Level:</strong>}
                    secondary={formData.sugar}
                  />
                </ListItem>
              )}
              <ListItem>
                <ListItemText
                  primary={<strong>How the patient feels:</strong>}
                  secondary={formData.patientsFeels}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>Appetite Level:</strong>}
                  secondary={formData.appetite}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>Sleep Patterns:</strong>}
                  secondary={formData.sleepPatterns}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>Hydration Status:</strong>}
                  secondary={formData.hydrationStatus}
                />
              </ListItem>
              {formData.otherObservations && (
                <ListItem>
                  <ListItemText
                    primary={<strong>Other Observations:</strong>}
                    secondary={formData.otherObservations}
                  />
                </ListItem>
              )}
            </List>
          </CardContent>
        </Card>
      </Grid>

      {/* Medical History Section */}
      <Grid item xs={12} sm={6}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" color="primary" gutterBottom>
              <Medication sx={{ marginRight: 1 }} /> Medical History
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary={<strong>Current Medications:</strong>}
                  secondary={formData.currentMedication}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>Existing Diagnosed Conditions:</strong>}
                  secondary={formData.existingDiagnosedCondition}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>Past Medical History:</strong>}
                  secondary={formData.pastMedicalHistory}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>Family Medical History:</strong>}
                  secondary={formData.familyMedicalHistory}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>Known Allergies:</strong>}
                  secondary={formData.allergies}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>Smoking:</strong>}
                  secondary={formData.smoking}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>Alcohol Consumption:</strong>}
                  secondary={formData.alcoholConsumption}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>Exercise Habits:</strong>}
                  secondary={formData.exerciseHabit}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>Vaccination History:</strong>}
                  secondary={formData.vaccinationHistory}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>Available Reports:</strong>}
                  secondary={formData.availableReports}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>Current Health Devices:</strong>}
                  secondary={formData.currentHealthDevice}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>Dietary Habits:</strong>}
                  secondary={formData.dietaryHabit}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>Stress Level:</strong>}
                  secondary={formData.stressLevel}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>

      <Divider sx={{ marginTop: 2 }} />
    </Grid>
  );
};

export default StepFour;
