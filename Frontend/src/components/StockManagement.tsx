import React, { useState } from "react";
import {
    Box, Typography, Paper, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Button, IconButton, Dialog,
    DialogTitle, DialogContent, DialogActions, TextField, MenuItem, Select, InputLabel, FormControl, Chip
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import dayjs, { Dayjs } from "dayjs";

type Category = "Vegetable" | "Grain" | "Dairy" | "Spice" | "Other";
type StockStatus = "In Stock" | "Low" | "Out of Stock" | "Ordered";
type StockItem = {
    id: string;
    name: string;
    quantity: number;
    unit: string;
    category: Category;
    lastUpdated: Dayjs;
    minRequired: number;
    remarks?: string;
    status: StockStatus;
};

const initialStock: StockItem[] = [
    { id: "1", name: "Potato", quantity: 100, unit: "kg", category: "Vegetable", lastUpdated: dayjs().subtract(2, "hour"), minRequired: 30, status: "In Stock" },
    { id: "2", name: "Rice", quantity: 50, unit: "kg", category: "Grain", lastUpdated: dayjs().subtract(1, "day"), minRequired: 20, status: "Low" },
    { id: "3", name: "Wheat Flour", quantity: 70, unit: "kg", category: "Grain", lastUpdated: dayjs().subtract(3, "hour"), minRequired: 25, status: "In Stock" },
    { id: "4", name: "Milk", quantity: 0, unit: "litre", category: "Dairy", lastUpdated: dayjs().subtract(4, "hour"), minRequired: 10, status: "Out of Stock", remarks: "Ordered 50 litres" },
    { id: "5", name: "Tomato", quantity: 10, unit: "kg", category: "Vegetable", lastUpdated: dayjs().subtract(2, "day"), minRequired: 15, status: "Low" },
    { id: "6", name: "Salt", quantity: 15, unit: "kg", category: "Spice", lastUpdated: dayjs().subtract(2, "hour"), minRequired: 5, status: "In Stock" },
    { id: "7", name: "Paneer", quantity: 7, unit: "kg", category: "Dairy", lastUpdated: dayjs().subtract(1, "hour"), minRequired: 3, status: "In Stock" },
    { id: "8", name: "Onion", quantity: 80, unit: "kg", category: "Vegetable", lastUpdated: dayjs().subtract(10, "hour"), minRequired: 25, status: "In Stock" },
    { id: "9", name: "Sugar", quantity: 25, unit: "kg", category: "Other", lastUpdated: dayjs().subtract(5, "hour"), minRequired: 15, status: "In Stock" },
    { id: "10", name: "Red Chilli Powder", quantity: 2, unit: "kg", category: "Spice", lastUpdated: dayjs().subtract(1, "day"), minRequired: 2, status: "Low" },
    { id: "11", name: "Cabbage", quantity: 0, unit: "kg", category: "Vegetable", lastUpdated: dayjs().subtract(2, "hour"), minRequired: 10, status: "Out of Stock" },
    { id: "12", name: "Curd", quantity: 5, unit: "kg", category: "Dairy", lastUpdated: dayjs().subtract(7, "hour"), minRequired: 5, status: "Low" },
    { id: "13", name: "Maida", quantity: 12, unit: "kg", category: "Grain", lastUpdated: dayjs().subtract(3, "hour"), minRequired: 10, status: "In Stock" },
    { id: "14", name: "Black Pepper", quantity: 1, unit: "kg", category: "Spice", lastUpdated: dayjs().subtract(6, "hour"), minRequired: 2, status: "Low" },
    { id: "15", name: "Carrot", quantity: 22, unit: "kg", category: "Vegetable", lastUpdated: dayjs().subtract(4, "hour"), minRequired: 20, status: "In Stock" },
    { id: "16", name: "Oil", quantity: 0, unit: "litre", category: "Other", lastUpdated: dayjs().subtract(1, "day"), minRequired: 10, status: "Ordered", remarks: "Expected delivery tomorrow" },
    { id: "17", name: "Green Peas", quantity: 5, unit: "kg", category: "Vegetable", lastUpdated: dayjs().subtract(11, "hour"), minRequired: 10, status: "Out of Stock" },
    { id: "18", name: "Butter", quantity: 4, unit: "kg", category: "Dairy", lastUpdated: dayjs().subtract(10, "hour"), minRequired: 3, status: "In Stock" },
    { id: "19", name: "Turmeric", quantity: 1, unit: "kg", category: "Spice", lastUpdated: dayjs().subtract(9, "hour"), minRequired: 1, status: "Low" },
    { id: "20", name: "Moong Dal", quantity: 19, unit: "kg", category: "Grain", lastUpdated: dayjs().subtract(7, "hour"), minRequired: 10, status: "In Stock" }
];

const categoryOptions: Category[] = ["Vegetable", "Grain", "Dairy", "Spice", "Other"];
const statusOptions: StockStatus[] = ["In Stock", "Low", "Out of Stock", "Ordered"];

const statusColor: Record<StockStatus, "success" | "warning" | "error" | "info"> = {
    "In Stock": "success",
    "Low": "warning",
    "Out of Stock": "error",
    "Ordered": "info"
};

const StockManagement: React.FC = () => {
    const [stock, setStock] = useState<StockItem[]>(initialStock);
    const [modalOpen, setModalOpen] = useState(false);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [form, setForm] = useState<Omit<StockItem, "id" | "lastUpdated">>({
        name: "",
        quantity: 0,
        unit: "",
        category: "Vegetable",
        minRequired: 0,
        remarks: "",
        status: "In Stock"
    });

    const handleOpen = (item?: StockItem, idx?: number) => {
        if (item && typeof idx === "number") {
            setEditIndex(idx);
            setForm({
                name: item.name,
                quantity: item.quantity,
                unit: item.unit,
                category: item.category,
                minRequired: item.minRequired,
                remarks: item.remarks || "",
                status: item.status
            });
        } else {
            setEditIndex(null);
            setForm({
                name: "",
                quantity: 0,
                unit: "",
                category: "Vegetable",
                minRequired: 0,
                remarks: "",
                status: "In Stock"
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
            [name as string]: name === "quantity" || name === "minRequired"
                ? Number(value)
                : value
        }));
    };

    const handleCategoryChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const { name, value } = event.target;
        setForm((prev) => ({
            ...prev,
            [name as string]: value as Category
        }));
    };

    const handleStatusChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const { name, value } = event.target;
        setForm((prev) => ({
            ...prev,
            [name as string]: value as StockStatus
        }));
    };

    const handleSubmit = () => {
        if (!form.name || !form.unit || !form.category || form.quantity < 0 || form.minRequired < 0) {
            alert("Please fill out all required fields correctly.");
            return;
        }
        if (editIndex !== null) {
            // Update
            const updated = [...stock];
            updated[editIndex] = {
                ...updated[editIndex],
                ...form,
                lastUpdated: dayjs()
            };
            setStock(updated);
        } else {
            // Add
            setStock([
                ...stock,
                {
                    ...form,
                    id: (stock.length + 1).toString(),
                    lastUpdated: dayjs()
                }
            ]);
        }
        handleClose();
    };

    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom color="primary">
                Stock Management
            </Typography>
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => handleOpen()}
                sx={{ mb: 2 }}
            >
                Add Stock Item
            </Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead sx={{ background: "#001D3D" }}>
                        <TableRow>
                            <TableCell sx={{ color: "white" }}>Item</TableCell>
                            <TableCell sx={{ color: "white" }}>Category</TableCell>
                            <TableCell sx={{ color: "white" }}>Quantity</TableCell>
                            <TableCell sx={{ color: "white" }}>Unit</TableCell>
                            <TableCell sx={{ color: "white" }}>Min Required</TableCell>
                            <TableCell sx={{ color: "white" }}>Status</TableCell>
                            <TableCell sx={{ color: "white" }}>Last Updated</TableCell>
                            <TableCell sx={{ color: "white" }}>Remarks</TableCell>
                            <TableCell sx={{ color: "white" }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stock.map((item, idx) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>{item.unit}</TableCell>
                                <TableCell>{item.minRequired}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={item.status}
                                        color={statusColor[item.status]}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>{item.lastUpdated.format("YYYY-MM-DD HH:mm")}</TableCell>
                                <TableCell>{item.remarks}</TableCell>
                                <TableCell>
                                    <IconButton
                                        color="primary"
                                        onClick={() => handleOpen(item, idx)}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Stock Item Add/Edit Modal */}
            <Dialog open={modalOpen} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>
                    {editIndex !== null ? "Edit Stock Item" : "Add Stock Item"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        label="Item Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        margin="dense"
                        fullWidth
                        required
                    />
                    <FormControl fullWidth margin="dense">
                        <InputLabel>Category</InputLabel>
                        <Select
                            name="category"
                            value={form.category}
                            label="Category"
                        //   onChange={handleCategoryChange}
                        >
                            {categoryOptions.map(option => (
                                <MenuItem value={option} key={option}>{option}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Quantity"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        margin="dense"
                        fullWidth
                        required
                        type="number"
                        inputProps={{ min: 0 }}
                    />
                    <TextField
                        label="Unit"
                        name="unit"
                        value={form.unit}
                        onChange={handleChange}
                        margin="dense"
                        fullWidth
                        required
                        placeholder="kg, litre, etc."
                    />
                    <TextField
                        label="Minimum Required"
                        name="minRequired"
                        value={form.minRequired}
                        onChange={handleChange}
                        margin="dense"
                        fullWidth
                        required
                        type="number"
                        inputProps={{ min: 0 }}
                    />
                    <FormControl fullWidth margin="dense">
                        <InputLabel>Status</InputLabel>
                        <Select
                            name="status"
                            value={form.status}
                            label="Status"
                        //   onChange={handleStatusChange}
                        >
                            {statusOptions.map(option => (
                                <MenuItem value={option} key={option}>{option}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Remarks"
                        name="remarks"
                        value={form.remarks}
                        onChange={handleChange}
                        margin="dense"
                        fullWidth
                        multiline
                        rows={2}
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

export default StockManagement;