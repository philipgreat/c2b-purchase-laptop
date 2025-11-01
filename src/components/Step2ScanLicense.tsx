import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  Divider,
  Grid,
  TextField,
} from "@mui/material";

const Step2ScanLicense: React.FC<{ onNext: (customer: any) => void }> = ({
  onNext,
}) => {
  const [customer, setCustomer] = useState({
    fullName: "Jane Elizabeth Carter",
    dateOfBirth: "1988-07-12",
    licenseNumber: "C1234567",
    issuingState: "CA",
    expirationDate: "2030-09-15",
    address: "742 Evergreen Terrace, Springfield, CA 90032",
    eyeColor: "Green",
    height: "5'6\"",
    gender: "Female",
    signatureBase64: "data:image/png;base64,iVBORw0KGgoAAA...",
    photoBase64: "data:image/png;base64,iVBORw0KGgoAAA...",
  });

  const handleChange = (field: keyof typeof customer, value: string) => {
    setCustomer({ ...customer, [field]: value });
  };

  const handleConfirm = () => {
    onNext(customer);
  };

  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography variant="h3" fontWeight={700} gutterBottom sx={{ mb: 3 }}>
        Step 2: Scan Customer License
      </Typography>

      <Typography
        variant="h5"
        sx={{ mb: 4, color: "text.secondary", fontWeight: 500, lineHeight: 1.6 }}
      >
        Please scan the customer’s U.S. Driver’s License.  
        The system will automatically extract and fill in the fields below — review or correct them before proceeding.
      </Typography>

      <Paper
        variant="outlined"
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: "#fafafa",
          mb: 4,
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 3, fontWeight: 600, color: "primary.main" }}
        >
          Extracted License Information
        </Typography>

        {/* Editable Form */}
        <Grid container spacing={3}>
          <Grid size={{xs:12,sm:6}}>
            <TextField
              fullWidth
              label="Full Name"
              value={customer.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              InputProps={{ sx: { fontSize: 20, py: 2, fontWeight: 600 } }}
              InputLabelProps={{ sx: { fontSize: 16 } }}
            />
          </Grid>

          <Grid size={{xs:12,sm:6}}>
            <TextField
              fullWidth
              label="Date of Birth"
              type="date"
              value={customer.dateOfBirth}
              onChange={(e) => handleChange("dateOfBirth", e.target.value)}
              InputLabelProps={{ shrink: true, sx: { fontSize: 16 } }}
              InputProps={{ sx: { fontSize: 20, py: 2, fontWeight: 600 } }}
            />
          </Grid>

          <Grid size={{xs:12,sm:6}}>
            <TextField
              fullWidth
              label="License Number"
              value={customer.licenseNumber}
              onChange={(e) => handleChange("licenseNumber", e.target.value)}
              InputProps={{ sx: { fontSize: 20, py: 2, fontWeight: 600 } }}
              InputLabelProps={{ sx: { fontSize: 16 } }}
            />
          </Grid>

          <Grid size={{xs:12,sm:6}}>
            <TextField
              fullWidth
              label="Issuing State"
              value={customer.issuingState}
              onChange={(e) => handleChange("issuingState", e.target.value)}
              InputProps={{ sx: { fontSize: 20, py: 2, fontWeight: 600 } }}
              InputLabelProps={{ sx: { fontSize: 16 } }}
            />
          </Grid>

          <Grid size={{xs:12,sm:6}}>
            <TextField
              fullWidth
              label="Expiration Date"
              type="date"
              value={customer.expirationDate}
              onChange={(e) => handleChange("expirationDate", e.target.value)}
              InputLabelProps={{ shrink: true, sx: { fontSize: 16 } }}
              InputProps={{ sx: { fontSize: 20, py: 2, fontWeight: 600 } }}
            />
          </Grid>

          <Grid size={{xs:12,sm:6}}>
            <TextField
              fullWidth
              label="Eye Color"
              value={customer.eyeColor}
              onChange={(e) => handleChange("eyeColor", e.target.value)}
              InputProps={{ sx: { fontSize: 20, py: 2, fontWeight: 600 } }}
              InputLabelProps={{ sx: { fontSize: 16 } }}
            />
          </Grid>

          <Grid size={{xs:12,sm:6}}>
            <TextField
              fullWidth
              label="Height"
              value={customer.height}
              onChange={(e) => handleChange("height", e.target.value)}
              InputProps={{ sx: { fontSize: 20, py: 2, fontWeight: 600 } }}
              InputLabelProps={{ sx: { fontSize: 16 } }}
            />
          </Grid>

          <Grid size={{xs:12,sm:6}}>
            <TextField
              fullWidth
              label="Gender"
              value={customer.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              InputProps={{ sx: { fontSize: 20, py: 2, fontWeight: 600 } }}
              InputLabelProps={{ sx: { fontSize: 16 } }}
            />
          </Grid>

          <Grid size={{xs:12,sm:12}}>
            <TextField
              fullWidth
              
              label="Address"
              value={customer.address}
              onChange={(e) => handleChange("address", e.target.value)}
              InputProps={{ sx: { fontSize: 20, py: 2, fontWeight: 600 } }}
              InputLabelProps={{ sx: { fontSize: 16 } }}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body1" color="text.secondary">
          The system also stores the license image and digital signature for verification and record keeping.
        </Typography>
      </Paper>

      <Button
        variant="contained"
        size="large"
        sx={{
          mt: 2,
          py: 2,
          px: 4,
          fontSize: 20,
          fontWeight: 700,
        }}
        onClick={handleConfirm}
      >
        Confirm Scanned Information
      </Button>
    </Box>
  );
};

export default Step2ScanLicense;
