import React from "react";
import { Box } from "@mui/material";
import PurchaseOrderCard, { type PurchaseOrder } from "./PurchaseOrderCard";

const orderExample: PurchaseOrder = {
  id: 1052,
  timestamp: "2025-10-31T15:45:00Z",
  buyer: {
    name: "Carter Store",
    email: "jane.carter@example.com",
    address: "742 Evergreen Terrace, Springfield, CA 90032",
  },
  seller: {
    name: "Helen White",
    email: "hellen-w@gmail.com",
    address: "101 Wall Stree, New York, NY 12303",
  },
  items: [
    {
      name: "18K Diamond Necklace",
      manufactureDate: "2024-03-15",
      price: 1580.5,
      notes: "Inspected for clarity and authenticity",
    }
  ],
  signatureBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA...",
};

const PurchaseOrderPage = () => (
  <Box sx={{ p: 5 }}>
    <PurchaseOrderCard order={orderExample} />
  </Box>
);

export default PurchaseOrderPage;
