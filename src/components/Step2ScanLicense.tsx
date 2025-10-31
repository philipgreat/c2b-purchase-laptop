import React from "react";
import { Box, Button, Typography, Paper, Divider, Grid } from "@mui/material";

const Step2ScanLicense: React.FC<{ onNext: (customer: any) => void }> = ({
  onNext,
}) => {
  const handleSimulateScan = () => {
    onNext({
      fullName: "Jane Elizabeth Carter",
      dateOfBirth: "1988-07-12",
      licenseNumber: "C1234567",
      issuingState: "CA",
      expirationDate: "2030-09-15",
      address: "742 Evergreen Terrace, Springfield, CA 90032",
      eyeColor: "Green",
      height: "5'6\"",
      gender: "Female",
      signatureBase64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA...", // example base64 signature
      photoBase64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA...", // optional: cropped license photo
    });
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
        The system will automatically extract the required identity details for compliance and record keeping.
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

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="body1" fontWeight={600}>
              Full Name:
            </Typography>
            <Typography variant="h6">Jane Elizabeth Carter</Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="body1" fontWeight={600}>
              Date of Birth:
            </Typography>
            <Typography variant="h6">July 12, 1988</Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="body1" fontWeight={600}>
              License Number:
            </Typography>
            <Typography variant="h6">C1234567</Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="body1" fontWeight={600}>
              Issuing State:
            </Typography>
            <Typography variant="h6">California (CA)</Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="body1" fontWeight={600}>
              Expiration Date:
            </Typography>
            <Typography variant="h6">September 15, 2030</Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="body1" fontWeight={600}>
              Eye Color:
            </Typography>
            <Typography variant="h6">Green</Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="body1" fontWeight={600}>
              Height:
            </Typography>
            <Typography variant="h6">5'6"</Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="body1" fontWeight={600}>
              Gender:
            </Typography>
            <Typography variant="h6">Female</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" fontWeight={600}>
              Address:
            </Typography>
            <Typography variant="h6">
              742 Evergreen Terrace, Springfield, CA 90032
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body1" color="text.secondary">
          The system also saves a cropped image of the license and the digital signature for verification purposes.
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
        onClick={handleSimulateScan}
      >
        Confirm Scanned Information
      </Button>
    </Box>
  );
};

export default Step2ScanLicense;
