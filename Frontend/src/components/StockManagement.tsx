import React, { useState } from "react";
import {
  Box, Typography, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Button, IconButton, Dialog,
  DialogTitle, DialogContent, DialogActions, TextField, MenuItem, Select, InputLabel, FormControl
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import dayjs, { Dayjs } from "dayjs";

// Type definitions for stock items
type Category = "Vegetable" | "Grain" | "Dairy" | "Spice" | "Other";
type StockItem = {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  category: Category;
  lastUpdated: Dayjs;
  minRequired: number;
  remarks?: string;
};

const initialStock: StockItem[] = [
  { id: "1", name: "Potato", quantity: 100, unit: "kg", category: "Vegetable", lastUpdated: dayjs().subtract(2, "hour"), minRequired: 30 },
  { id: "2", name: "Rice", quantity: 50, unit: "kg", category: "Grain", lastUpdated: dayjs().subtract(1, "day"), minRequired: 20 },
  { id: "3", name: "Wheat Flour", quantity: 70, unit: "kg", category: "Grain", lastUpdated: dayjs().subtract(3, "hour"), minRequired: 25 },
  { id: "4", name: "Milk", quantity: 20, unit: "litre", category: "Dairy", lastUpdated: dayjs().subtract(4, "hour"), minRequired: 10 },
  { id: "5", name: "Tomato", quantity: 40, unit: "kg", category: "Vegetable", lastUpdated: dayjs().subtract(2, "day"), minRequired: 15 },
  { id: "6", name: "Salt", quantity: 15, unit: "kg", category: "Spice", lastUpdated: dayjs().subtract(2, "hour"), minRequired: 5 },
  { id: "7", name: "Paneer", quantity: 7, unit: "kg", category: "Dairy", lastUpdated: dayjs().subtract(1, "hour"), minRequired: 3 },
];

const categoryOptions: Category[] = ["Vegetable", "Grain", "Dairy", "Spice", "Other"];

// Color for quantity based on minimum required
const getQuantityCellColor = (quantity: number, minRequired: number) => {
  if (quantity <= minRequired) return "#ffebee"; // Light red
  if (quantity <= minRequired * 1.5) return "#fffde7"; // Light yellow
  return "#e8f5e9"; // Light green
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
    remarks: ""
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
        remarks: item.remarks || ""
      });
    } else {
      setEditIndex(null);
      setForm({
        name: "",
        quantity: 0,
        unit: "",
        category: "Vegetable",
        minRequired: 0,
        remarks: ""
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
                <TableCell sx={{ background: getQuantityCellColor(item.quantity, item.minRequired) }}>
                  {item.quantity}
                </TableCell>
                <TableCell>{item.unit}</TableCell>
                <TableCell>{item.minRequired}</TableCell>
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