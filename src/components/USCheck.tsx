import React from "react";
import { Box, Paper, Typography, Divider } from "@mui/material";

// Props for customization
interface USCheckProps {
  bankName?: string;
  date?: string;
  payee?: string;
  amountText?: string; // e.g., "One thousand dollars"
  amountNumeric?: string; // e.g., "$1,000.00"
  memo?: string;
  accountNumber?: string;
  routingNumber?: string;
  checkNumber?: string;
  signerName?: string;
}

const USCheck: React.FC<USCheckProps> = ({
  bankName = "Bank of America",
  date = "October 31, 2025",
  payee = "John Doe",
  amountText = "One Thousand and 00/100 Dollars",
  amountNumeric = "$1,000.00",
  memo = "Jewelry Purchase",
  accountNumber = "123456789",
  routingNumber = "021000021",
  checkNumber = "1025",
  signerName = "Philip Zhang",
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        maxWidth: 1100,
        height: 300,
        border: "1px solid #ccc",
        borderRadius: 2,
        p: 3,
        backgroundColor: "#fdfdfd",
        fontFamily: "Courier, monospace",
        position: "relative",
      }}
    >
      {/* Bank and check number */}
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h2" sx={{ fontWeight: 600 }}>
          {bankName}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          No. {checkNumber}
        </Typography>
      </Box>

      {/* Date */}
      <Box display="flex" justifyContent="flex-end" mt={1}>
        <Typography variant="body2">
          Date: <span style={{ textDecoration: "underline" }}>{date}</span>
        </Typography>
      </Box>

      {/* Payee */}
      <Box display="flex" alignItems="center" mt={2}>
        <Typography variant="body2" sx={{ minWidth: 70 }}>
          Pay to the
        </Typography>
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            textDecoration: "underline",
            fontWeight: 600,
            ml: 1,
          }}
        >
          {payee}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            ml: 2,
          }}
        >
          {amountNumeric}
        </Typography>
      </Box>

      {/* Amount in words */}
      <Box mt={2}>
        <Typography
          variant="body2"
          sx={{
            textDecoration: "underline",
            display: "inline-block",
            width: "80%",
          }}
        >
          {amountText}
        </Typography>
        <Typography variant="body2" sx={{ display: "inline-block", ml: 1 }}>
          Dollars
        </Typography>
      </Box>

      {/* Memo and signature */}
      <Box display="flex" justifyContent="space-between" alignItems="flex-end" mt={4}>
        <Typography variant="body2">
          Memo: <span style={{ textDecoration: "underline" }}>{memo}</span>
        </Typography>
        <Box textAlign="center">
          <Divider sx={{ width: 200, mb: 0.5 }} />
          <Typography variant="body2">{signerName}</Typography>
        </Box>
      </Box>

      {/* MICR line */}
      <Box
        sx={{
          position: "absolute",
          bottom: 15,
          left: 30,
          right: 30,
          fontSize: "1.1rem",
          fontFamily: "OCR A Std, monospace",
          letterSpacing: 2,
        }}
      >
        <Typography>
          ⑆{routingNumber}⑆ {accountNumber}⑈ {checkNumber}
        </Typography>
      </Box>
    </Paper>
  );
};

export default USCheck;
