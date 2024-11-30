import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface StaffPersonalState {
    staffPersonal: any;
    loading: boolean;
    error: string | null;
}

const initialState: StaffPersonalState = {
    staffPersonal: null,
    loading: false,
    error: null,
};

// Async thunk for creating a new staff personal detail
export const createStaffPersonal = createAsyncThunk(
    'staffPersonal/create',
    async (staffData: any, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3000/staffMyAccount/personal', staffData);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for fetching a staff personal detail by ID
export const getStaffPersonalById = createAsyncThunk(
    'staffPersonal/getById',
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:3000/staffMyAccount/personal/${id}`);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for updating a staff personal detail by ID
export const updateStaffPersonal = createAsyncThunk(
    'staffPersonal/update',
    async ({ id, staffData }: { id: string, staffData: any }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`http://localhost:3000/staffMyAccount/personal/${id}`, staffData);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for deleting a staff personal detail by ID
export const deleteStaffPersonal = createAsyncThunk(
    'staffPersonal/delete',
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`http://localhost:3000/staffMyAccount/personal/${id}`);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

const staffPersonalSlice = createSlice({
    name: 'staffPersonal',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createStaffPersonal.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createStaffPersonal.fulfilled, (state, action) => {
                state.loading = false;
                state.staffPersonal = action.payload;
            })
            .addCase(createStaffPersonal.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(getStaffPersonalById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getStaffPersonalById.fulfilled, (state, action) => {
                state.loading = false;
                state.staffPersonal = action.payload;
            })
            .addCase(getStaffPersonalById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(updateStaffPersonal.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateStaffPersonal.fulfilled, (state, action) => {
                state.loading = false;
                state.staffPersonal = action.payload;
            })
            .addCase(updateStaffPersonal.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(deleteStaffPersonal.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteStaffPersonal.fulfilled, (state, action) => {
                state.loading = false;
                state.staffPersonal = null;
            })
            .addCase(deleteStaffPersonal.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const staffPersonalReducer = staffPersonalSlice.reducer;