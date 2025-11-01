import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import USCheck from "./USCheck";
import CheckLayout from "./CheckLayout";
const Step5Review: React.FC<{ data: any; onNext: () => void }> = ({
  data,
  onNext,
}) => (
  <Box>
    <Typography variant="h2" gutterBottom>
      Step 5: Prepare Check
    </Typography>

    <CheckLayout
      bankName="Chase Bank"
      date="Oct 31, 2025"
      payee="Emily Carter"
      amountText="Five Thousand and 00/100"
      amountNumeric="$5,000.00"
      memo="Diamond Necklace"
      signerName="Philip Zhang"
    />

    <Button
      variant="contained"
      sx={{
        mt: 5,
        px: 4,
        py: 2,
        fontSize: 18,
        fontWeight: 700,
      }}
      onClick={onNext}
    >
      Next
    </Button>
  </Box>
);

export default Step5Review;
