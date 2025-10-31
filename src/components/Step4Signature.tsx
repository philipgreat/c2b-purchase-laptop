import React from "react";
import { Box, Button, Typography } from "@mui/material";
import PurchaseOrderPage from './OrderSample'
const Step4Signature: React.FC<{ onNext: (sig: string) => void }> = ({
  onNext,
}) => (
  <Box>
    <Typography variant="h2" gutterBottom>
      Step 4: Customer Signature
    </Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      Please have the customer sign below.
    </Typography>

<PurchaseOrderPage/>


   


    <Button variant="contained" onClick={() => onNext("signature-data")}>
      Simulate Signature Complete
    </Button>
  </Box>
);

export default Step4Signature;