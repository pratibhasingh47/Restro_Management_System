import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// API endpoints
// const API_URL = '/api/menu';

// Menu item interface
interface MenuItem {
    stock: any;
    _id: string;
    name: string;
    price: number;
    description: string;
    category: string;
    // Add other fields as necessary
}

// Initial state interface
interface MenuState {
    menuItems: MenuItem[];
    loading: boolean;
    error: string | null;
}

// Async thunks for API calls
export const getMenuItems = createAsyncThunk<MenuItem[]>('menu/getMenuItems', async () => {
    const response = await axios.get(`http://localhost:3000/menu/getMenu`);
    return response.data;
});

export const addMenuItem = createAsyncThunk<MenuItem, MenuItem>('menu/addMenuItem', async (item) => {
    const response = await axios.post(`http://localhost:3000/menu/addMenu`, item);
    return response.data;
});

export const updateMenuItem = createAsyncThunk<MenuItem, { id: string; item: MenuItem }>('menu/updateMenuItem', async ({ id, item }) => {
    const response = await axios.put(`http://localhost:3000/menu/${id}`, item);
    return response.data;
});

export const deleteMenuItem = createAsyncThunk<string, string>('menu/deleteMenuItem', async (id) => {
    await axios.delete(`http://localhost:3000/menu/${id}`);
    return id;
});

// Initial state
const initialState: MenuState = {
    menuItems: [],
    loading: false,
    error: null
};

// Slice
const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Get menu items
            .addCase(getMenuItems.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMenuItems.fulfilled, (state, action: PayloadAction<MenuItem[]>) => {
                state.loading = false;
                state.menuItems = action.payload;
            })
            .addCase(getMenuItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch menu items';
            })
            // Add menu item
            .addCase(addMenuItem.pending, (state) => {
                state.loading = true;
            })
            .addCase(addMenuItem.fulfilled, (state, action: PayloadAction<MenuItem>) => {
                state.loading = false;
                state.menuItems.push(action.payload);
            })
            .addCase(addMenuItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to add menu item';
            })
            // Update menu item
            .addCase(updateMenuItem.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateMenuItem.fulfilled, (state, action: PayloadAction<MenuItem>) => {
                state.loading = false;
                const index = state.menuItems.findIndex(item => item._id === action.payload._id);
                if (index !== -1) {
                    state.menuItems[index] = action.payload;
                }
            })
            .addCase(updateMenuItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to update menu item';
            })
            // Delete menu item
            .addCase(deleteMenuItem.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteMenuItem.fulfilled, (state, action: PayloadAction<string>) => {
                state.loading = false;
                state.menuItems = state.menuItems.filter(item => item._id !== action.payload);
            })
            .addCase(deleteMenuItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to delete menu item';
            });
    }
});

export default menuSlice.reducer;