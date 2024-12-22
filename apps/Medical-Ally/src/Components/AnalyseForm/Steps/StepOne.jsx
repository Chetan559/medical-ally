import React from "react";
import { TextField, Grid, Typography, MenuItem } from "@mui/material";

import { genders, blood } from "../Values";

const StepOne = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Step 1: Personal Information
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          error={!formData.name && formData.showErrors}
          helperText={
            !formData.name && formData.showErrors ? "Name is required" : ""
          }
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          required
          error={!formData.email && formData.showErrors}
          helperText={
            !formData.email && formData.showErrors ? "Email is required" : ""
          }
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          type="number"
          margin="normal"
          required
          error={!formData.phone && formData.showErrors}
          helperText={
            !formData.phone && formData.showErrors
              ? "Phone number is required"
              : ""
          }
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Date Of Birth"
          variant="outlined"
          margin="normal"
          type="date"
          InputLabelProps={{ shrink: true, required: true }}
          required
          error={!formData.dob && formData.showErrors}
          helperText={
            !formData.dob && formData.showErrors
              ? "Phone number is required"
              : ""
          }
          value={formData.dob}
          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          select
          label="Gender"
          margin="normal"
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
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Weight"
          variant="outlined"
          fullWidth
          type="number"
          margin="normal"
          required
          error={!formData.weight && formData.showErrors}
          helperText={
            !formData.weight && formData.showErrors ? "Weight is required" : ""
          }
          value={formData.weight}
          onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Height"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          required
          error={!formData.height && formData.showErrors}
          helperText={
            !formData.height && formData.showErrors ? "Height is required" : ""
          }
          value={formData.height}
          onChange={(e) => setFormData({ ...formData, height: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          select
          label="Blood Group"
          margin="normal"
          value={formData.bloodGroup}
          onChange={(e) =>
            setFormData({ ...formData, bloodGroup: e.target.value })
          }
          helperText="Select your Blood Group"
        >
          {blood.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Emergency Contact"
          variant="outlined"
          fullWidth
          type="number"
          margin="normal"
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
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          margin="normal"
          error={!formData.address && formData.showErrors}
          helperText={
            !formData.address && formData.showErrors
              ? "Address is required"
              : ""
          }
          multiline
          rows={4}
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="City"
          variant="outlined"
          margin="normal"
          IsRequired
          error={!formData.city && formData.showErrors}
          helperText={
            !formData.city && formData.showErrors ? "City is required" : ""
          }
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Postal Code (Optional)"
          variant="outlined"
          type="number"
          margin="normal"
          value={formData.postalCode}
          onChange={(e) =>
            setFormData({ ...formData, postalCode: e.target.value })
          }
        />
      </Grid>
    </Grid>
  );
};

export default StepOne;
