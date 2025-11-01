import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Fade } from "@mui/material";

const Step1ScanAdvisor: React.FC<{
  onNext: (advisor: any, nextAction?: "purchase" | "scan") => void;
}> = ({ onNext,setPage }) => {
  const [scanned, setScanned] = useState(false);
  const [advisor, setAdvisor] = useState<{ name: string; id: string } | null>(
    null
  );

  // Simulate QR code scan when any key is pressed
  useEffect(() => {
    const handleKeyPress = () => {
      if (!scanned) {
        setScanned(true);
        setAdvisor({ name: "Helen  White", id: "EMP-1024" });
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [scanned]);

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {!scanned ? (
        <Fade in timeout={500}>
          <Box>
            <Typography
              variant="h2"
              fontWeight={700}
              gutterBottom
              sx={{ mb: 3 }}
            >
              Step 1: Scan Advisor QR Code
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              sx={{ fontWeight: 500, mb: 5 }}
            >
              Waiting for QR code scan...
            </Typography>
            <Typography variant="h6" color="text.secondary">
              (Press any key to simulate QR scan)
            </Typography>
          </Box>
        </Fade>
      ) : (
        <Fade in timeout={600}>
          <Box>
            <Typography
              variant="h2"
              fontWeight={700}
              color="primary"
              gutterBottom
            >
              Hello, {advisor?.name}!
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, mb: 5 }}
              color="text.secondary"
            >
              Employee ID: {advisor?.id}
            </Typography>

            <Box display="flex" gap={4} justifyContent="center">
             
              <Button
                
                variant="contained"
                color="primary"
                size="large"
                sx={{ px: 6, py: 2, fontSize: 20, fontWeight: 700 }}
                onClick={() => onNext(advisor, "scan")}
              >
                Start Customer ID Scan
              </Button>


               <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ px: 6, py: 2, fontSize: 20, fontWeight: 700 }}
                onClick={() => setPage("orders")}
              >
                 Orders
              </Button>

               <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ px: 6, py: 2, fontSize: 20, fontWeight: 700 }}
                onClick={() => setPage("setting")}
              >
                Setting
              </Button>
            </Box>
          </Box>
        </Fade>
      )}
    </Box>
  );
};

export default Step1ScanAdvisor;
