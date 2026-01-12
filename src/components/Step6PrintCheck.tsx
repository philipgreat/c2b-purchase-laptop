import React from "react";
import { Box, Button, Typography, Grid, Divider } from "@mui/material";

const Step6PrintCheck: React.FC<{ onNext: () => void }> = ({ onNext }) => (
  <Box sx={{ padding: 3 }}>
    <Typography variant="h2" gutterBottom>
      Step 6: Print Check
    </Typography>
    <Typography variant="body1">Preparing to print the check...</Typography>
    
    {/* Grid to display buttons in a row, each taking up 1/3 width */}
    <Grid container spacing={2} sx={{ mt: 3 }}>
      {/* Print Check Button */}
      <Grid size={{ xs:4 }}>
        <Button
          variant="contained"
          sx={{
            width: "100%",  // Ensures the button takes up 100% of the grid cell
            px: 4,
            py: 2,
            fontSize: 18,
            fontWeight: 700,
          }}
          onClick={() => console.log("Print Check clicked")}
        >
          Print Check
        </Button>
      </Grid>

      {/* Print Stock Label Button */}
      <Grid size={{ xs:4 }}>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            px: 4,
            py: 2,
            fontSize: 18,
            fontWeight: 700,
            backgroundColor: "white",
            color: "black",
            border: "1px solid #ccc",
          }}
          onClick={() => console.log("Print Stock Label clicked")}
        >
          Print Stock Label
        </Button>
      </Grid>

      {/* Print Purchase Order Button */}
      <Grid size={{ xs:4 }}>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            px: 4,
            py: 2,
            fontSize: 18,
            fontWeight: 700,
            backgroundColor: "white",
            color: "black",
            border: "1px solid #ccc",
          }}
          onClick={() => console.log("Print Purchase Order clicked")}
        >
          Print Purchase Order
        </Button>
      </Grid>
    </Grid>

    {/* Next Button */}
    <Divider
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

export default Step6PrintCheck;
