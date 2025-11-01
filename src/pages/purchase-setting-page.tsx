import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Tab,
  Tabs,
  Grid,
  Paper,
} from "@mui/material";
import PageHeader from "../components/PageHeader";

// Tab components for Buyer Info and Bank Info
const PurchaseSettingsPage: React.FC = ({setPage}) => {
  const [tabIndex, setTabIndex] = useState(0);

  // Buyer Info State
  const [buyerInfo, setBuyerInfo] = useState({
    businessName: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
  });

  // Bank Info State
  const [bankInfo, setBankInfo] = useState({
    bankName: "",
    bankNotes: "",
    routingNumber: "",
    accountNumber: "",
    startingCheckNumber: "",
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ p: 5 }}>
      <PageHeader text="Purchase Settings" setPage={setPage}/>

      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="Buyer Info" />
        <Tab label="Bank Info" />
      </Tabs>

      {/* Tab Content */}
      <Box sx={{ mt: 3 }}>
        {tabIndex === 0 && (
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
              Buyer Information
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Business Name"
                  value={buyerInfo.businessName}
                  onChange={(e) =>
                    setBuyerInfo({ ...buyerInfo, businessName: e.target.value })
                  }
                  InputProps={{ sx: { fontSize: 16, py: 2 } }}
                  InputLabelProps={{ sx: { fontSize: 16 } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Contact Name"
                  value={buyerInfo.contactName}
                  onChange={(e) =>
                    setBuyerInfo({ ...buyerInfo, contactName: e.target.value })
                  }
                  InputProps={{ sx: { fontSize: 16, py: 2 } }}
                  InputLabelProps={{ sx: { fontSize: 16 } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Contact Phone"
                  value={buyerInfo.contactPhone}
                  onChange={(e) =>
                    setBuyerInfo({ ...buyerInfo, contactPhone: e.target.value })
                  }
                  InputProps={{ sx: { fontSize: 16, py: 2 } }}
                  InputLabelProps={{ sx: { fontSize: 16 } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Contact Email"
                  value={buyerInfo.contactEmail}
                  onChange={(e) =>
                    setBuyerInfo({ ...buyerInfo, contactEmail: e.target.value })
                  }
                  InputProps={{ sx: { fontSize: 16, py: 2 } }}
                  InputLabelProps={{ sx: { fontSize: 16 } }}
                />
              </Grid>
            </Grid>
            <Box sx={{ mt: 3, textAlign: "right" }}>
              <Button variant="contained" sx={{ px: 5, py: 2 }} onClick={() => {}}>
                Save Buyer Info
              </Button>
            </Box>
          </Paper>
        )}

        {tabIndex === 1 && (
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
              Bank Information
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Bank Name"
                  value={bankInfo.bankName}
                  onChange={(e) =>
                    setBankInfo({ ...bankInfo, bankName: e.target.value })
                  }
                  InputProps={{ sx: { fontSize: 16, py: 2 } }}
                  InputLabelProps={{ sx: { fontSize: 16 } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Bank Notes"
                  value={bankInfo.bankNotes}
                  onChange={(e) =>
                    setBankInfo({ ...bankInfo, bankNotes: e.target.value })
                  }
                  InputProps={{ sx: { fontSize: 16, py: 2 } }}
                  InputLabelProps={{ sx: { fontSize: 16 } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Routing Number"
                  value={bankInfo.routingNumber}
                  onChange={(e) =>
                    setBankInfo({ ...bankInfo, routingNumber: e.target.value })
                  }
                  InputProps={{ sx: { fontSize: 16, py: 2 } }}
                  InputLabelProps={{ sx: { fontSize: 16 } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Account Number"
                  value={bankInfo.accountNumber}
                  onChange={(e) =>
                    setBankInfo({ ...bankInfo, accountNumber: e.target.value })
                  }
                  InputProps={{ sx: { fontSize: 16, py: 2 } }}
                  InputLabelProps={{ sx: { fontSize: 16 } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Starting Check Number"
                  value={bankInfo.startingCheckNumber}
                  onChange={(e) =>
                    setBankInfo({ ...bankInfo, startingCheckNumber: e.target.value })
                  }
                  InputProps={{ sx: { fontSize: 16, py: 2 } }}
                  InputLabelProps={{ sx: { fontSize: 16 } }}
                />
              </Grid>
            </Grid>
            <Box sx={{ mt: 3, textAlign: "right" }}>
              <Button variant="contained" sx={{ px: 5, py: 2 }} onClick={() => {}}>
                Save Bank Info
              </Button>
            </Box>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default PurchaseSettingsPage;
