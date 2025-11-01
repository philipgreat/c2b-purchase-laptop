import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SyncIcon from "@mui/icons-material/Sync";
import PurchaseOrderCard, { PurchaseOrder } from "@/components/PurchaseOrderCard";
import PageHeader from "../components/PageHeader";

// 🧾 模拟数据（增加 syncStatus 字段）
const MOCK_ORDERS: (PurchaseOrder & { syncStatus: "synced" | "syncing" })[] = [
  {
    id: 1001,
    timestamp: "2025-10-30T09:00:00Z",
    buyer: { name: "Alice Johnson" },
    seller: { name: "Helen White" },
    items: [
      { name: "18K Diamond Necklace", manufactureDate: "2023-12-10", price: 1850.5 },
    ],
    syncStatus: "synced",
  },
  {
    id: 1002,
    timestamp: "2025-10-31T10:30:00Z",
    buyer: { name: "Robert Brown" },
    seller: { name: "Helen White" },
    items: [
      { name: "Platinum Ring", manufactureDate: "2024-04-12", price: 950 },
      { name: "Gold Bracelet", manufactureDate: "2024-01-18", price: 670 },
    ],
    syncStatus: "syncing",
  },
  {
    id: 1003,
    timestamp: "2025-10-29T16:45:00Z",
    buyer: { name: "Jane Carter" },
    seller: { name: "Helen White" },
    items: [{ name: "Silver Earrings", manufactureDate: "2024-05-30", price: 320 }],
    syncStatus: "synced",
  },
];

const PurchaseOrdersPage: React.FC<{ setPage: (page: string) => void }> = ({
  setPage,
}) => {
  const [query, setQuery] = useState("");
  const [date, setDate] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<PurchaseOrder | null>(null);

  // 🔍 搜索过滤
  const filteredOrders = useMemo(() => {
    return MOCK_ORDERS.filter((order) => {
      const matchId = query ? order.id?.toString().includes(query) : true;
      const matchDate = date
        ? new Date(order.timestamp).toISOString().slice(0, 10) === date
        : true;
      return matchId && matchDate;
    });
  }, [query, date]);

  return (
    <Box sx={{ p: 5 }}>
      <PageHeader setPage={setPage} />

      {/* 搜索区域 */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid size={{xs:12,sm:4}}>
            <TextField
              fullWidth
              label="Search by Order ID"
              variant="outlined"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Grid>
          <Grid size={{xs:12,sm:4}}>
            <TextField
              fullWidth
              label="Filter by Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Grid>
          <Grid size={{xs:12,sm:4}}>
            <Button
              variant="contained"
              startIcon={<SearchIcon />}
              sx={{ py: 1.2, px: 3, fontWeight: 700 }}
              onClick={() => {}}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* 订单列表 */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Order ID</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Item(s)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Qty</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Total ($)</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Buyer</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Date</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Sync Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.map((order) => {
              const total = order.items.reduce((sum, i) => sum + i.price, 0);
              return (
                <TableRow key={order.id} hover>
                  <TableCell>
                    <Button
                      variant="text"
                      color="primary"
                      onClick={() => setSelectedOrder(order)}
                      sx={{ fontWeight: 700 }}
                    >
                      #{order.id}
                    </Button>
                  </TableCell>
                  <TableCell>{order.items.map((i) => i.name).join(", ")}</TableCell>
                  <TableCell>{order.items.length}</TableCell>
                  <TableCell>${total.toFixed(2)}</TableCell>
                  <TableCell>{order.buyer.name}</TableCell>
                  <TableCell>
                    {new Date(order.timestamp).toLocaleDateString()}
                  </TableCell>

                  {/* ✅ 新增同步状态列 */}
                  <TableCell align="center">
                    {order.syncStatus === "synced" ? (
                      <Tooltip title="Synced Successfully">
                        <CheckCircleIcon color="success" fontSize="large" />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Syncing...">
                        <SyncIcon
                          color="info"
                          fontSize="large"
                          sx={{
                            animation: "spin 2s linear infinite",
                            "@keyframes spin": {
                              "0%": { transform: "rotate(0deg)" },
                              "100%": { transform: "rotate(360deg)" },
                            },
                          }}
                        />
                      </Tooltip>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
            {filteredOrders.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
                  No matching purchase orders found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 详情弹窗 */}
      <Dialog
        open={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 700 }}>Purchase Order Details</DialogTitle>
        <DialogContent dividers sx={{ backgroundColor: "#f9f9f9" }}>
          {selectedOrder && <PurchaseOrderCard order={selectedOrder} />}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default PurchaseOrdersPage;
