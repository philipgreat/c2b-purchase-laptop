import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  Avatar,
  Chip,
  Stack,
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export interface PurchaseOrder {
  id?: number;
  timestamp: string;
  buyer: {
    name: string;
    email?: string;
    address?: string;
  };
  seller: {
    name: string;
    email?: string;
    address?: string;
  };
  items: {
    name: string;
    manufactureDate: string;
    price: number;
    notes?: string;
  }[];
  signatureBase64?: string;
}

const PurchaseOrderCard: React.FC<{ order: PurchaseOrder }> = ({ order }) => {
  const formattedDate = new Date(order.timestamp).toLocaleString();

  const total = order.items.reduce((sum, item) => sum + item.price, 0);

  return (
    <Card
      elevation={4}
      sx={{
        borderRadius: 3,
        border: "1px solid #ddd",
        maxWidth: 900,
        mx: "auto",
        overflow: "hidden",
      }}
    >
      <CardContent sx={{ p: 5 }}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4" fontWeight={700}>
            Purchase Order
          </Typography>
          <Chip
            label={`Order ID: #${order.id ?? "N/A"}`}
            color="primary"
            variant="outlined"
            sx={{ fontSize: 16, fontWeight: 600 }}
          />
        </Box>

        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Transaction Date: {formattedDate}
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Buyer / Seller Section */}
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box display="flex" alignItems="center" gap={2} mb={1}>
              <Avatar sx={{ bgcolor: "primary.main" }}>
               
                <PersonIcon />
              </Avatar>
              <Typography variant="h6" fontWeight={700}>
                Seller
              </Typography>
            </Box>
            <Typography variant="body1" fontWeight={600}>
              {order.seller.name}
            </Typography>
            {order.seller.email && (
              <Typography variant="body2" color="text.secondary">
                {order.seller.email}
              </Typography>
            )}
            {order.seller.address && (
              <Typography variant="body2" color="text.secondary">
                {order.seller.address}
              </Typography>
            )}
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box display="flex" alignItems="center" gap={2} mb={1}>
              <Avatar sx={{ bgcolor: "success.main" }}>
                 <StoreIcon />
              </Avatar>
              <Typography variant="h6" fontWeight={700}>
                Buyer (Store)
              </Typography>
            </Box>
            <Typography variant="body1" fontWeight={600}>
              {order.buyer.name}
            </Typography>
            {order.buyer.email && (
              <Typography variant="body2" color="text.secondary">
                {order.buyer.email}
              </Typography>
            )}
            {order.buyer.address && (
              <Typography variant="body2" color="text.secondary">
                {order.buyer.address}
              </Typography>
            )}
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Items Section */}
        <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
          Order Items
        </Typography>

        {order.items.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 2,
              border: "1px solid #e0e0e0",
              backgroundColor: "#fafafa",
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid size={{ xs: 12, sm: 6 }}>
                
                <Typography variant="h6" fontWeight={600}>
                  {item.name}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={3}>
                
                <Typography variant="body2">{item.manufactureDate}</Typography>
              </Grid>

              <Grid item xs={12} sm={3}>
                
                <Typography variant="h6" color="success.main" fontWeight={700}>
                  ${item.price.toLocaleString()}
                </Typography>
              </Grid>
            </Grid>

            {item.notes && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1, ml: 5 }}
              >
                Notes: {item.notes}
              </Typography>
            )}
          </Box>
        ))}

        <Divider sx={{ my: 3 }} />

        {/* Totals */}
        <Stack direction="row" justifyContent="flex-end" spacing={2}>
          <Typography variant="h6" fontWeight={700}>
            Total:
          </Typography>
          <Typography
            variant="h5"
            fontWeight={800}
            color="success.main"
          >
            ${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </Typography>
        </Stack>

        {/* Signature */}


    <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
          Seller Signature
        </Typography>

       


    <Box sx={{ position: 'relative', height: 200, border: '1px solid #ccc',        border: "1px dashed gray",
        
        backgroundColor: "#fafafa", }}>
  <Typography
    sx={{
      position: 'absolute',
      bottom: 0,
      right: 10,
      textAlign: 'right',
      mb: 2,
    }}
  >
    {order.seller.name}
  </Typography>
</Box>


      </CardContent>
    </Card>
  );
};

export default PurchaseOrderCard;
