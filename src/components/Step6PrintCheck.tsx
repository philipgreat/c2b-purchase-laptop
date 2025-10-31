import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Step6PrintCheck: React.FC<{ onNext: () => void }> = ({ onNext }) => (
  <Box>
    <Typography variant="h2" gutterBottom>
      Step 6: Print Check
    </Typography>
    <Typography variant="body1">Preparing to print the check...</Typography>
    <Button variant="contained" sx={{ mt: 3 }} onClick={onNext}>
      Simulate Print Complete
    </Button>
  </Box>
);

export default Step6PrintCheck;
