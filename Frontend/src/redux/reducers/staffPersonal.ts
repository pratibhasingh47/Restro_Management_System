import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

interface StaffPersonalState {
    staffPersonal: any;
    loading: boolean;
    error: string | null;
    email: string | null; // Add email to the state
}

const initialState: StaffPersonalState = {
    staffPersonal: null,
    loading: false,
    error: null,
    email: null,
};

// Async thunk for handling staff login


export const updateStaffPersonal = createAsyncThunk(
    'staffPersonal/update',
    async ({ email, staffData }: { email: string, staffData: any }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`http://localhost:3000/staffMyAccount/personal/updateStaff/${email}`, staffData);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const createStaffPersonal = createAsyncThunk(
    'staffPersonal/create',
    async (staffData: any, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3000/staffMyAccount/personal/create', staffData);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getStaffPersonalByEmail = createAsyncThunk(
    'staffPersonal/getByEmail',
    async (email: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:3000/staffMyAccount/personal/getStaff/${email}`);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

const staffPersonalSlice = createSlice({
    name: 'staffPersonal',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
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
            .addCase(getStaffPersonalByEmail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getStaffPersonalByEmail.fulfilled, (state, action) => {
                state.loading = false;
                state.staffPersonal = action.payload;
            })
            .addCase(getStaffPersonalByEmail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { setEmail } = staffPersonalSlice.actions;
export const staffPersonalReducer = staffPersonalSlice.reducer;