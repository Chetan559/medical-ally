import React from "react";
import {
  TextField,
  Grid,
  Typography,
  MenuItem,
  Paper,
  Box,
} from "@mui/material";
import { genders, blood } from "../Values";

const StepOne = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
      <Typography variant="h5" gutterBottom>
        Step 1: Personal Information
      </Typography>
      <Box mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              error={!formData.name && formData.showErrors}
              helperText={
                !formData.name && formData.showErrors ? "Name is required" : ""
              }
              value={formData.name}
              onChange={handleChange}
              name="name"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              error={!formData.email && formData.showErrors}
              helperText={
                !formData.email && formData.showErrors
                  ? "Email is required"
                  : ""
              }
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Date of Birth"
              variant="outlined"
              fullWidth
              type="date"
              InputLabelProps={{ shrink: true }}
              required
              error={!formData.dob && formData.showErrors}
              helperText={
                !formData.dob && formData.showErrors ? "DOB is required" : ""
              }
              value={formData.dob}
              onChange={handleChange}
              name="dob"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Gender"
              variant="outlined"
              fullWidth
              value={formData.gender}
              onChange={handleChange}
              name="gender"
              helperText="Please select your gender"
            >
              {genders.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              required
              type="number"
              error={!formData.phone && formData.showErrors}
              helperText={
                !formData.phone && formData.showErrors
                  ? "Phone number is required"
                  : ""
              }
              value={formData.phone}
              onChange={handleChange}
              name="phone"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Weight (kg)"
              variant="outlined"
              fullWidth
              required
              type="number"
              error={!formData.weight && formData.showErrors}
              helperText={
                !formData.weight && formData.showErrors
                  ? "Weight is required"
                  : ""
              }
              value={formData.weight}
              onChange={handleChange}
              name="weight"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Height (cm)"
              variant="outlined"
              fullWidth
              required
              type="number"
              error={!formData.height && formData.showErrors}
              helperText={
                !formData.height && formData.showErrors
                  ? "Height is required"
                  : ""
              }
              value={formData.height}
              onChange={handleChange}
              name="height"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Blood Group"
              variant="outlined"
              fullWidth
              value={formData.bloodGroup}
              onChange={handleChange}
              name="bloodGroup"
              helperText="Select your blood group"
            >
              {blood.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Emergency Contact"
              variant="outlined"
              fullWidth
              required
              type="number"
              error={!formData.emergencyContact && formData.showErrors}
              helperText={
                !formData.emergencyContact && formData.showErrors
                  ? "Emergency contact is required"
                  : ""
              }
              value={formData.emergencyContact}
              onChange={handleChange}
              name="emergencyContact"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={3}
              error={!formData.address && formData.showErrors}
              helperText={
                !formData.address && formData.showErrors
                  ? "Address is required"
                  : ""
              }
              value={formData.address}
              onChange={handleChange}
              name="address"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              required
              error={!formData.city && formData.showErrors}
              helperText={
                !formData.city && formData.showErrors ? "City is required" : ""
              }
              value={formData.city}
              onChange={handleChange}
              name="city"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Postal Code (Optional)"
              variant="outlined"
              fullWidth
              type="number"
              value={formData.postalCode}
              onChange={handleChange}
              name="postalCode"
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default StepOne;
