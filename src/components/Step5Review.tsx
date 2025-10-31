import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import USCheck from "./USCheck";
const Step5Review: React.FC<{ data: any; onNext: () => void }> = ({
  data,
  onNext,
}) => (
  <Box>
    <Typography variant="h2" gutterBottom>
      Step 5: Prepare Check
    </Typography>


<USCheck
      bankName="Chase Bank"
      date="Oct 31, 2025"
      payee="Emily Carter"
      amountText="Five Thousand and 00/100"
      amountNumeric="$5,000.00"
      memo="Diamond Necklace"
      signerName="Philip Zhang"
    />


    <Button variant="contained" onClick={onNext}>
      Confirm and Print Check
    </Button>
  </Box>
);

export default Step5Review;
