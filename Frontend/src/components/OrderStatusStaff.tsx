import React, { useState } from "react";
import {
    Box,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Chip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type Status = "Pending" | "Processing" | "Ready" | "Delivered" | "Cancelled";
type OrderStaff = {
    id: string;
    dish: string;
    quantity: number;
    table: string;
    placedAt: Dayjs;
    status: Status;
    remarks?: string;
    customerName: string;
};

const statusOptions: Status[] = [
    "Pending",
    "Processing",
    "Ready",
    "Delivered",
    "Cancelled",
];

const statusColor: Record<Status, "default" | "info" | "warning" | "success" | "error"> = {
    Pending: "default",
    Processing: "info",
    Ready: "warning",
    Delivered: "success",
    Cancelled: "error",
};

const initialOrders: OrderStaff[] = [
    {
        id: "O-101",
        dish: "Paneer Butter Masala",
        quantity: 2,
        table: "5",
        placedAt: dayjs().subtract(25, "minute"),
        status: "Pending",
        customerName: "Ravi Kumar"
    },
    {
        id: "O-102",
        dish: "Veg Biryani",
        quantity: 1,
        table: "2",
        placedAt: dayjs().subtract(35, "minute"),
        status: "Processing",
        customerName: "Suman Joshi"
    },
    {
        id: "O-103",
        dish: "Butter Naan",
        quantity: 4,
        table: "3",
        placedAt: dayjs().subtract(20, "minute"),
        status: "Ready",
        customerName: "Amit Singh"
    },
    {
        id: "O-104",
        dish: "Masala Dosa",
        quantity: 3,
        table: "1",
        placedAt: dayjs().subtract(45, "minute"),
        status: "Delivered",
        customerName: "Priya Sharma"
    },
    {
        id: "O-105",
        dish: "Cold Coffee",
        quantity: 2,
        table: "7",
        placedAt: dayjs().subtract(15, "minute"),
        status: "Pending",
        customerName: "Karan Mehta"
    },
    {
        id: "O-106",
        dish: "Chicken Fried Rice",
        quantity: 2,
        table: "6",
        placedAt: dayjs().subtract(10, "minute"),
        status: "Processing",
        customerName: "Neha Gupta"
    },
    {
        id: "O-107",
        dish: "Samosa",
        quantity: 5,
        table: "8",
        placedAt: dayjs().subtract(12, "minute"),
        status: "Ready",
        customerName: "Rahul Jain"
    },
    {
        id: "O-108",
        dish: "Lassi",
        quantity: 3,
        table: "4",
        placedAt: dayjs().subtract(40, "minute"),
        status: "Cancelled",
        customerName: "Anita Verma",
        remarks: "Customer cancelled"
    }
];

const OrderStatusStaff: React.FC = () => {
    const [orders, setOrders] = useState<OrderStaff[]>(initialOrders);
    const [viewOrder, setViewOrder] = useState<OrderStaff | null>(null);
    const [remarksDialog, setRemarksDialog] = useState(false);
    const [remarksValue, setRemarksValue] = useState("");
    const [remarksOrderId, setRemarksOrderId] = useState<string | null>(null);

    // Handler to update status
    const handleStatusUpdate = (id: string, newStatus: Status) => {
        setOrders((prev) =>
            prev.map((order) =>
                order.id === id
                    ? {
                        ...order,
                        status: newStatus,
                        remarks:
                            newStatus === "Cancelled" && remarksValue
                                ? remarksValue
                                : order.remarks,
                    }
                    : order
            )
        );
        setRemarksDialog(false);
        setRemarksOrderId(null);
        setRemarksValue("");
    };

    // Handler to ask for remarks if cancelling
    const handleCancel = (id: string) => {
        setRemarksOrderId(id);
        setRemarksDialog(true);
    };

    // Status update buttons logic: allowed transitions
    const getAllowedNextStatuses = (current: Status) => {
        switch (current) {
            case "Pending":
                return ["Processing", "Cancelled"];
            case "Processing":
                return ["Ready", "Cancelled"];
            case "Ready":
                return ["Delivered", "Cancelled"];
            default:
                return [];
        }
    };

    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom color="primary">
                Order Status (Staff View)
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead sx={{ background: "#001D3D" }}>
                        <TableRow>
                            <TableCell sx={{ color: "white" }}>Order ID</TableCell>
                            <TableCell sx={{ color: "white" }}>Dish</TableCell>
                            <TableCell sx={{ color: "white" }}>Qty</TableCell>
                            <TableCell sx={{ color: "white" }}>Table</TableCell>
                            <TableCell sx={{ color: "white" }}>Customer</TableCell>
                            <TableCell sx={{ color: "white" }}>Placed</TableCell>
                            <TableCell sx={{ color: "white" }}>Status</TableCell>
                            <TableCell sx={{ color: "white" }}>Actions</TableCell>
                            <TableCell sx={{ color: "white" }}>Info</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.dish}</TableCell>
                                <TableCell>{order.quantity}</TableCell>
                                <TableCell>{order.table}</TableCell>
                                <TableCell>{order.customerName}</TableCell>
                                <TableCell>
                                    {order.placedAt.format("HH:mm")}
                                    <br />
                                    <Typography variant="caption" color="textSecondary">
                                        {order.placedAt.fromNow()}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        label={order.status}
                                        color={statusColor[order.status]}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    {getAllowedNextStatuses(order.status).map((stat) =>
                                        stat === "Cancelled" ? (
                                            <Button
                                                key={stat}
                                                variant="outlined"
                                                color="error"
                                                size="small"
                                                sx={{ mb: 0.5, mr: 0.5 }}
                                                onClick={() => handleCancel(order.id)}
                                            >
                                                Cancel
                                            </Button>
                                        ) : (
                                            <Button
                                                key={stat}
                                                variant="contained"
                                                size="small"
                                                color={
                                                    stat === "Processing"
                                                        ? "info"
                                                        : stat === "Ready"
                                                            ? "warning"
                                                            : "success"
                                                }
                                                sx={{ mb: 0.5, mr: 0.5 }}
                                                onClick={() => handleStatusUpdate(order.id, stat as Status)}
                                            >
                                                {stat}
                                            </Button>
                                        )
                                    )}
                                </TableCell>
                                <TableCell>
                                    <IconButton color="primary" onClick={() => setViewOrder(order)}>
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
                            <Typography gutterBottom>
                                <b>Order ID:</b> {viewOrder.id}
                            </Typography>
                            <Typography gutterBottom>
                                <b>Dish:</b> {viewOrder.dish}
                            </Typography>
                            <Typography gutterBottom>
                                <b>Quantity:</b> {viewOrder.quantity}
                            </Typography>
                            <Typography gutterBottom>
                                <b>Table:</b> {viewOrder.table}
                            </Typography>
                            <Typography gutterBottom>
                                <b>Customer:</b> {viewOrder.customerName}
                            </Typography>
                            <Typography gutterBottom>
                                <b>Placed At:</b> {viewOrder.placedAt.format("YYYY-MM-DD HH:mm")}
                            </Typography>
                            <Typography gutterBottom>
                                <b>Status:</b>{" "}
                                <Chip label={viewOrder.status} color={statusColor[viewOrder.status]} size="small" />
                            </Typography>
                            {viewOrder.remarks && (
                                <Typography gutterBottom>
                                    <b>Remarks:</b> {viewOrder.remarks}
                                </Typography>
                            )}
                        </Box>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setViewOrder(null)}>Close</Button>
                </DialogActions>
            </Dialog>

            {/* Cancel Order Dialog for Remarks */}
            <Dialog open={remarksDialog} onClose={() => setRemarksDialog(false)} maxWidth="xs" fullWidth>
                <DialogTitle>Cancel Order</DialogTitle>
                <DialogContent>
                    <Typography>Please provide a reason for cancellation:</Typography>
                    <TextField
                        label="Remarks"
                        fullWidth
                        value={remarksValue}
                        onChange={(e) => setRemarksValue(e.target.value)}
                        margin="dense"
                        multiline
                        rows={2}
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setRemarksDialog(false)}>Cancel</Button>
                    <Button
                        variant="contained"
                        color="error"
                        disabled={!remarksValue.trim()}
                        onClick={() => {
                            if (remarksOrderId) handleStatusUpdate(remarksOrderId, "Cancelled");
                        }}
                    >
                        Confirm Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default OrderStatusStaff;