// src/CoverPage.js
import React from "react";
import { Box, Paper, Typography, Divider, Grid } from "@mui/material";

export default function CoverPageLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f6fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "794px", // A4 width
          height: "1123px", // A4 height
          p: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 4,
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        {/* Header */}
        <Box>
          <Typography variant="h5" color="primary" fontWeight="bold">
            DoubleChaintech.com
          </Typography>
          <Divider sx={{ my: 2 }} />
        </Box>

        {/* Center Title */}
        <Box textAlign="center" sx={{ flexGrow: 1 }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
          >
            Database Design Document
          </Typography>

          <Typography variant="h5" color="text.secondary">
            — Project: Gas Filling Automation Platform —
          </Typography>
        </Box>

        {/* Info Section */}
        <Box>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6 }}>
              <Typography variant="subtitle1" color="text.secondary">
                Author:
              </Typography>
              <Typography variant="body1">Philip Guo</Typography>
            </Grid>

            <Grid size={{ xs: 6 }}>
              <Typography variant="subtitle1" color="text.secondary">
                Reviewer:
              </Typography>
              <Typography variant="body1">Helen  White</Typography>
            </Grid>

            <Grid size={{ xs: 6 }}>
              <Typography variant="subtitle1" color="text.secondary">
                Version:
              </Typography>
              <Typography variant="body1">v1.0</Typography>
            </Grid>

            <Grid size={{ xs: 6 }}>
              <Typography variant="subtitle1" color="text.secondary">
                Date:
              </Typography>
              <Typography variant="body1">{new Date().toLocaleDateString()}</Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            fontStyle="italic"
          >
            © 2025 Doublechain Tech, all rights reserved.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
