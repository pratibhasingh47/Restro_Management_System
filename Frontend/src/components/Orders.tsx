import React, { useState } from "react";
import {
  Box, Typography, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Chip, Button, IconButton, Dialog,
  DialogTitle, DialogContent, DialogActions, TextField
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import dayjs, { Dayjs } from "dayjs";

// Order type definition
type OrderStatus = "Pending" | "Preparing" | "Delivered" | "Cancelled";
type PaymentStatus = "Paid" | "Unpaid" | "Refunded";
type Order = {
  id: string;
  user: string;
  items: string;
  total: number;
  orderDate: Dayjs;
  deliveryAddress: string;
  status: OrderStatus;
  payment: PaymentStatus;
  contact: string;
  remarks?: string;
};

// More static orders for demo
const staticOrders: Order[] = [
  {
    id: "ORD-1001",
    user: "John Doe",
    items: "Pizza, Coke",
    total: 23.5,
    orderDate: dayjs().subtract(2, "day").hour(12).minute(30),
    deliveryAddress: "12 Elm Street",
    status: "Delivered",
    payment: "Paid",
    contact: "9876543210",
    remarks: "Leave at doorstep"
  },
  {
    id: "ORD-1002",
    user: "Jane Smith",
    items: "Burger, Fries, Sprite",
    total: 17.0,
    orderDate: dayjs().subtract(1, "day").hour(19).minute(10),
    deliveryAddress: "34 Maple Ave",
    status: "Preparing",
    payment: "Paid",
    contact: "9123456780"
  },
  {
    id: "ORD-1003",
    user: "Alex Brown",
    items: "Salad, Orange Juice",
    total: 13.75,
    orderDate: dayjs().subtract(4, "hour"),
    deliveryAddress: "55 Oak Lane",
    status: "Pending",
    payment: "Unpaid",
    contact: "9011122233"
  },
  {
    id: "ORD-1004",
    user: "Emily White",
    items: "Pasta, Lemonade",
    total: 20,
    orderDate: dayjs().subtract(3, "hour"),
    deliveryAddress: "22 Willow Road",
    status: "Cancelled",
    payment: "Refunded",
    contact: "9900887766",
    remarks: "Cancelled by user"
  },
  {
    id: "ORD-1005",
    user: "Mark Green",
    items: "Sandwich, Tea",
    total: 11.5,
    orderDate: dayjs().subtract(1, "day").hour(15).minute(50),
    deliveryAddress: "88 Cedar St",
    status: "Delivered",
    payment: "Paid",
    contact: "9080706050",
    remarks: "Ring the bell"
  }
];

// For status color coding
const statusColor = {
  Pending: "warning",
  Preparing: "info",
  Delivered: "success",
  Cancelled: "error"
} as const;

const paymentColor = {
  Paid: "success",
  Unpaid: "warning",
  Refunded: "default"
} as const;

const Orders: React.FC = () => {
  const [orders] = useState<Order[]>(staticOrders);
  const [viewOrder, setViewOrder] = useState<Order | null>(null);

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom color="primary">
        Orders History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ background: "#001D3D" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Order #</TableCell>
              <TableCell sx={{ color: "white" }}>User</TableCell>
              <TableCell sx={{ color: "white" }}>Items</TableCell>
              <TableCell sx={{ color: "white" }}>Total (₹)</TableCell>
              <TableCell sx={{ color: "white" }}>Date</TableCell>
              <TableCell sx={{ color: "white" }}>Status</TableCell>
              <TableCell sx={{ color: "white" }}>Payment</TableCell>
              <TableCell sx={{ color: "white" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(order => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.user}</TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>{order.total.toFixed(2)}</TableCell>
                <TableCell>{order.orderDate.format("YYYY-MM-DD HH:mm")}</TableCell>
                <TableCell>
                  <Chip
                    label={order.status}
                    color={statusColor[order.status]}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={order.payment}
                    color={paymentColor[order.payment]}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => setViewOrder(order)}
                  >
                    <InfoIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Order details dialog */}
      <Dialog open={!!viewOrder} onClose={() => setViewOrder(null)} maxWidth="sm" fullWidth>
        <DialogTitle>Order Details</DialogTitle>
        <DialogContent dividers>
          {viewOrder && (
            <Box>
              <Typography gutterBottom><b>Order #:</b> {viewOrder.id}</Typography>
              <Typography gutterBottom><b>User:</b> {viewOrder.user}</Typography>
              <Typography gutterBottom><b>Contact:</b> {viewOrder.contact}</Typography>
              <Typography gutterBottom><b>Delivery Address:</b> {viewOrder.deliveryAddress}</Typography>
              <Typography gutterBottom><b>Items:</b> {viewOrder.items}</Typography>
              <Typography gutterBottom><b>Total:</b> ₹{viewOrder.total.toFixed(2)}</Typography>
              <Typography gutterBottom><b>Date:</b> {viewOrder.orderDate.format("YYYY-MM-DD HH:mm")}</Typography>
              <Typography gutterBottom>
                <b>Status:</b>{" "}
                <Chip label={viewOrder.status} color={statusColor[viewOrder.status]} size="small" />
              </Typography>
              <Typography gutterBottom>
                <b>Payment:</b>{" "}
                <Chip label={viewOrder.payment} color={paymentColor[viewOrder.payment]} size="small" />
              </Typography>
              {viewOrder.remarks && (
                <Typography gutterBottom><b>Remarks:</b> {viewOrder.remarks}</Typography>
              )}
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setViewOrder(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Orders;