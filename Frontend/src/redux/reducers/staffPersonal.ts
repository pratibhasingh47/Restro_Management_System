import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface StaffPersonalState {
    personalDetails: any | null;
    loading: boolean;
    error: string | null;
}

const initialState: StaffPersonalState = {
    personalDetails: null,
    loading: false,
    error: null,
};

// Async thunk to fetch personal details
export const fetchPersonalDetails = createAsyncThunk(
    'staffPersonal/fetchPersonalDetails',
    async (email: string, { rejectWithValue }) => {
        try {
            console.log(`Fetching personal details for email: ${email}`);
            const response = await axios.get(`http://localhost:3000/staffMyAccount/personal/getStaff/${email}`);
            console.log('Response:', response.data);
            return response.data;
        } catch (error: any) {
            console.error('Error fetching personal details:', error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk to create personal details
export const createPersonalDetails = createAsyncThunk(
    'staffPersonal/createPersonalDetails',
    async (data: any, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3000/staffMyAccount/personal/create', data);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk to update personal details
export const updatePersonalDetails = createAsyncThunk(
    'staffPersonal/updatePersonalDetails',
    async ({ email, data }: { email: string, data: any }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`http://localhost:3000/staffMyAccount/personal/updateStaff/${email}`, data);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk to delete personal details
export const deletePersonalDetails = createAsyncThunk(
    'staffPersonal/deletePersonalDetails',
    async (id: string, { rejectWithValue }) => {
        try {
            await axios.delete(`http://localhost:3000/staffMyAccount/personal/${id}`);
            return id;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

const staffPersonalSlice = createSlice({
    name: 'staffPersonal',
    initialState,
    reducers: {
        // Define any synchronous actions here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPersonalDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPersonalDetails.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.personalDetails = action.payload;
            })
            .addCase(fetchPersonalDetails.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createPersonalDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createPersonalDetails.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.personalDetails = action.payload;
            })
            .addCase(createPersonalDetails.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updatePersonalDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updatePersonalDetails.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.personalDetails = action.payload;
            })
            .addCase(updatePersonalDetails.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deletePersonalDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deletePersonalDetails.fulfilled, (state, action: PayloadAction<string>) => {
                state.loading = false;
                state.personalDetails = null;
            })
            .addCase(deletePersonalDetails.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default staffPersonalSlice.reducer;