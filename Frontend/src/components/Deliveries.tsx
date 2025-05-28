import React, { useState } from "react";
import {
    Box, Typography, Paper, Button, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, IconButton, Dialog, DialogTitle,
    DialogContent, DialogActions, TextField, MenuItem, Select, InputLabel, FormControl
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker, TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type Delivery = {
    id: string;
    date: Dayjs;
    time: Dayjs;
    destination: string;
    recipient: string;
    foodItems: string;
    status: "Pending" | "Delivered" | "Failed";
    driver: string;
};

const initialDeliveries: Delivery[] = [
    {
        id: "1",
        date: dayjs(),
        time: dayjs().hour(12).minute(0),
        destination: "123 Main St",
        recipient: "John Doe",
        foodItems: "Pizza, Salad",
        status: "Pending",
        driver: "Alice",
    },
    {
        id: "2",
        date: dayjs(),
        time: dayjs().hour(14).minute(30),
        destination: "456 Elm St",
        recipient: "Jane Smith",
        foodItems: "Burger, Fries",
        status: "Delivered",
        driver: "Bob",
    },
];

const statusOptions = ["Pending", "Delivered", "Failed"] as const;

const Deliveries: React.FC = () => {
    const [deliveries, setDeliveries] = useState<Delivery[]>(initialDeliveries);
    const [modalOpen, setModalOpen] = useState(false);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [form, setForm] = useState<Omit<Delivery, "id">>({
        date: dayjs(),
        time: dayjs(),
        destination: "",
        recipient: "",
        foodItems: "",
        status: "Pending",
        driver: "",
    });

    const handleOpen = (delivery?: Delivery, idx?: number) => {
        if (delivery && typeof idx === "number") {
            setEditIndex(idx);
            setForm({ ...delivery });
        } else {
            setEditIndex(null);
            setForm({
                date: dayjs(),
                time: dayjs(),
                destination: "",
                recipient: "",
                foodItems: "",
                status: "Pending",
                driver: "",
            });
        }
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
        setEditIndex(null);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name as string]: value,
        }));
    };

    const handleDateChange = (date: Dayjs | null) => {
        if (date) setForm((prev) => ({ ...prev, date }));
    };

    const handleTimeChange = (time: Dayjs | null) => {
        if (time) setForm((prev) => ({ ...prev, time }));
    };

    const handleSubmit = () => {
        if (
            !form.destination ||
            !form.recipient ||
            !form.foodItems ||
            !form.driver
        ) {
            alert("Please fill out all required fields.");
            return;
        }
        if (editIndex !== null) {
            // Update
            const updated = [...deliveries];
            updated[editIndex] = { ...form, id: deliveries[editIndex].id };
            setDeliveries(updated);
        } else {
            // Add
            setDeliveries([
                ...deliveries,
                { ...form, id: (deliveries.length + 1).toString() },
            ]);
        }
        handleClose();
    };

    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom color="primary">
                Deliveries Management
            </Typography>
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => handleOpen()}
                sx={{ mb: 2 }}
            >
                Add Delivery
            </Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead sx={{ background: "#001D3D" }}>
                        <TableRow>
                            <TableCell sx={{ color: "white" }}>Date</TableCell>
                            <TableCell sx={{ color: "white" }}>Time</TableCell>
                            <TableCell sx={{ color: "white" }}>Destination</TableCell>
                            <TableCell sx={{ color: "white" }}>Recipient</TableCell>
                            <TableCell sx={{ color: "white" }}>Food Items</TableCell>
                            <TableCell sx={{ color: "white" }}>Status</TableCell>
                            <TableCell sx={{ color: "white" }}>Driver</TableCell>
                            <TableCell sx={{ color: "white" }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {deliveries.map((delivery, idx) => (
                            <TableRow key={delivery.id}>
                                <TableCell>{delivery.date.format("YYYY-MM-DD")}</TableCell>
                                <TableCell>{delivery.time.format("HH:mm")}</TableCell>
                                <TableCell>{delivery.destination}</TableCell>
                                <TableCell>{delivery.recipient}</TableCell>
                                <TableCell>{delivery.foodItems}</TableCell>
                                <TableCell>{delivery.status}</TableCell>
                                <TableCell>{delivery.driver}</TableCell>
                                <TableCell>
                                    <IconButton
                                        color="primary"
                                        onClick={() => handleOpen(delivery, idx)}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    {/* You can add a delete button here if needed */}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={modalOpen} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>
                    {editIndex !== null ? "Edit Delivery" : "Add Delivery"}
                </DialogTitle>
                <DialogContent>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Box display="flex" gap={2} mb={2}>
                            <DatePicker
                                label="Date"
                                value={form.date}
                                onChange={handleDateChange}
                                slotProps={{ textField: { fullWidth: true } }}
                            />
                            <TimePicker
                                label="Time"
                                value={form.time}
                                onChange={handleTimeChange}
                                slotProps={{ textField: { fullWidth: true } }}
                            />
                        </Box>
                    </LocalizationProvider>
                    <TextField
                        label="Destination"
                        name="destination"
                        value={form.destination}
                        onChange={handleChange}
                        margin="dense"
                        fullWidth
                        required
                    />
                    <TextField
                        label="Recipient"
                        name="recipient"
                        value={form.recipient}
                        onChange={handleChange}
                        margin="dense"
                        fullWidth
                        required
                    />
                    <TextField
                        label="Food Items"
                        name="foodItems"
                        value={form.foodItems}
                        onChange={handleChange}
                        margin="dense"
                        fullWidth
                        required
                        helperText="Comma-separated (Pizza, Salad, etc.)"
                    />
                    <FormControl fullWidth margin="dense">
                        <InputLabel>Status</InputLabel>
                        <Select
                            name="status"
                            value={form.status}
                            label="Status"
                        // onChange={handleChange}
                        >
                            {statusOptions.map((option) => (
                                <MenuItem value={option} key={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Driver"
                        name="driver"
                        value={form.driver}
                        onChange={handleChange}
                        margin="dense"
                        fullWidth
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit} variant="contained" color="primary">
                        {editIndex !== null ? "Update" : "Add"}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Deliveries;