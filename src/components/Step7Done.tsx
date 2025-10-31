import React from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Step7Done: React.FC = () => (
  <Box textAlign="center">
    <CheckCircleIcon color="success" sx={{ fontSize: 180, mb: 2 }} />
    <Typography variant="h5">Process Complete!</Typography>
    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
      Thank you for your cooperation.
    </Typography>
  </Box>
);

export default Step7Done;
