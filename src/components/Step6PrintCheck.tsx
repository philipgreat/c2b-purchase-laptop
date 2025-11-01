import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Step6PrintCheck: React.FC<{ onNext: () => void }> = ({ onNext }) => (
  <Box>
    <Typography variant="h2" gutterBottom>
      Step 6: Print Check
    </Typography>
    <Typography variant="body1">Preparing to print the check...</Typography>
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

export default Step6PrintCheck;
