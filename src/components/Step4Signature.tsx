import React from "react";
import { Box, Button, Typography } from "@mui/material";
import PurchaseOrderPage from './OrderSample'
const Step4Signature: React.FC<{ onNext: (sig: string) => void }> = ({
  onNext,
}) => (
  <Box>
    <Typography variant="h2" gutterBottom>
      Step 4: Confirm Purchase Order
    </Typography>
    

<PurchaseOrderPage/>


   


    <Button variant="contained"
    
    sx={{
          mt: 5,
          px: 4,
          py: 2,
          fontSize: 18,
          fontWeight: 700,
        }}

    onClick={() => onNext("signature-data")}>
     Next
    </Button>
  </Box>
);

export default Step4Signature;

