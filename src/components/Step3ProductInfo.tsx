import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

/** Convert number to English check text */
function numberToWords(amount: number): string {
  if (isNaN(amount)) return "";
  const ones = [
    "", "One", "Two", "Three", "Four", "Five",
    "Six", "Seven", "Eight", "Nine", "Ten",
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
    "Sixteen", "Seventeen", "Eighteen", "Nineteen",
  ];
  const tens = [
    "", "", "Twenty", "Thirty", "Forty",
    "Fifty", "Sixty", "Seventy", "Eighty", "Ninety",
  ];

  function convertChunk(num: number): string {
    let result = "";
    if (num >= 100) {
      result += ones[Math.floor(num / 100)] + " Hundred ";
      num %= 100;
    }
    if (num >= 20) {
      result += tens[Math.floor(num / 10)] + " ";
      num %= 10;
    }
    if (num > 0) result += ones[num] + " ";
    return result.trim();
  }

  const dollars = Math.floor(amount);
  const cents = Math.round((amount - dollars) * 100);
  if (dollars === 0 && cents === 0) return "Zero Dollars";

  const chunks: string[] = [];
  const units = ["", "Thousand", "Million", "Billion"];
  let i = 0;
  let remaining = dollars;
  while (remaining > 0) {
    const chunk = remaining % 1000;
    if (chunk > 0)
      chunks.unshift(convertChunk(chunk) + (units[i] ? " " + units[i] : ""));
    remaining = Math.floor(remaining / 1000);
    i++;
  }

  const dollarText = chunks.join(" ").trim() || "Zero";
  const centText = cents > 0 ? `and ${cents}/100` : "and 00/100";
  return `${dollarText} ${centText} Dollars`;
}

const Step3ProductInfo: React.FC<{ onNext: (product: any) => void }> = ({
  onNext,
}) => {
  const [product, setProduct] = useState({
    name: "Tiffy Diamond",
    date: "2021-10",
    price: "123123.00",
    mobile: "",
    email: "",
    notes: "",
  });
  const [checkText, setCheckText] = useState("");

  useEffect(() => {
    const num = parseFloat(product.price);
    setCheckText(isNaN(num) ? "" : numberToWords(num));
  }, [product.price]);

  return (
    <Box>
      <Typography
        variant="h3"
        fontWeight={700}
        gutterBottom
        sx={{ mb: 4, textAlign: "left" }}
      >
        Step 3: Enter Product Information
      </Typography>

      {/* First row — product fields */}
      <Box
        display="flex"
        flexDirection="row"
        gap={3}
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%", maxWidth: 1000, mt: 2 }}
      >
        <TextField
          label="Product Name"
          value={product.name}
          fullWidth
          InputProps={{ sx: { fontSize: 22, fontWeight: 600, py: 2 } }}
          InputLabelProps={{ sx: { fontSize: 18, fontWeight: 500 } }}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />

        <TextField
          label="Manufacture Date"
          type="month"
          value={product.date}
          fullWidth
          InputProps={{ sx: { fontSize: 22, fontWeight: 600, py: 2 } }}
          InputLabelProps={{ sx: { fontSize: 18, fontWeight: 500 } }}
          onChange={(e) => setProduct({ ...product, date: e.target.value })}
        />

        <TextField
          label="Price"
          type="number"
          value={product.price}
          fullWidth
          InputProps={{ sx: { fontSize: 22, fontWeight: 700, py: 2 } }}
          InputLabelProps={{ sx: { fontSize: 18, fontWeight: 500 } }}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
      </Box>

      {/* Second row — contact fields */}
      <Box
        display="flex"
        flexDirection="row"
        gap={3}
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%", maxWidth: 1000, mt: 3 }}
      >
        <TextField
          label="Mobile Phone"
          placeholder="(555) 123-4567"
          value={product.mobile}
          fullWidth
          InputProps={{ sx: { fontSize: 22, fontWeight: 600, py: 2 } }}
          InputLabelProps={{ sx: { fontSize: 18, fontWeight: 500 } }}
          onChange={(e) => setProduct({ ...product, mobile: e.target.value })}
        />

        <TextField
          label="Email (optional)"
          type="email"
          placeholder="customer@email.com"
          value={product.email}
          fullWidth
          InputProps={{ sx: { fontSize: 22, fontWeight: 600, py: 2 } }}
          InputLabelProps={{ sx: { fontSize: 18, fontWeight: 500 } }}
          onChange={(e) => setProduct({ ...product, email: e.target.value })}
        />

        <TextField
          label="Notes"
          placeholder="e.g., Slight scratch on clasp"
          value={product.notes}
          fullWidth
          InputProps={{ sx: { fontSize: 22, fontWeight: 600, py: 2 } }}
          InputLabelProps={{ sx: { fontSize: 18, fontWeight: 500 } }}
          onChange={(e) => setProduct({ ...product, notes: e.target.value })}
        />
      </Box>

      {/* English check text */}
      {checkText && (
        <Typography
          variant="h6"
          sx={{
            mt: 3,
            fontWeight: 600,
            fontFamily: "serif",
            color: "#2e7d32",
          }}
        >
          💬 {checkText}
        </Typography>
      )}

      <Button
        variant="contained"
        sx={{
          mt: 5,
          px: 4,
          py: 2,
          fontSize: 18,
          fontWeight: 700,
        }}
        onClick={() => onNext(product)}
        disabled={!product.name || !product.date || !product.price}
      >
        Next
      </Button>
    </Box>
  );
};

export default Step3ProductInfo;
