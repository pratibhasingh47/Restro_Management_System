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

// Helper function to get the token from local storage or any other storage mechanism
const getToken = () => {
    return localStorage.getItem('token'); // Adjust based on how you store the token
};

// Async thunk to fetch personal details using POST request
export const fetchPersonalDetails = createAsyncThunk(
    'staffPersonal/fetchPersonalDetails',
    async (email: string, { rejectWithValue }) => {
        try {
            const token = getToken();
            const response = await axios.post('http://localhost:3000/staffMyAccount/personal/getStaff', { email }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
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
            const token = getToken();
            const response = await axios.put(`http://localhost:3000/staffMyAccount/personal/updateStaff/${email}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
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
            });
    },
});

export default staffPersonalSlice.reducer;