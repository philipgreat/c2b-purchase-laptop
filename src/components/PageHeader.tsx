import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const PageHeader = ({setPage,text}) => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    sx={{ mb: 4 }}
  >
    <Typography variant="h4" fontWeight={700}>
     {text}
    </Typography>

    <Button
      variant="outlined"
      color="error"
      startIcon={<LogoutIcon />}
      sx={{ fontWeight: 700 }}
      onClick={() =>setPage("purchase")}
    >
      Continue
    </Button>
  </Box>
);

export default PageHeader;