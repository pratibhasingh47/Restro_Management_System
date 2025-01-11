import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface JobDetails {
    status: string;
    workPerHourWeek: number;
    dateHired: string;
    department: string;
    position: string;
    employmentType: string;
}

const getToken = () => {
    const token = localStorage.getItem('authToken');
    return token;
};

export const getJobDetails = createAsyncThunk(
    'job/getJobDetails',
    async (managementId: string, { rejectWithValue }) => {
        try {
            const token = getToken();
            if (!token) {
                return rejectWithValue('Token not found');
            }
            const response = await axios.get(`/job/${managementId}`, {
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

export const updateJobDetails = createAsyncThunk(
    'job/updateJobDetails',
    async ({ managementId, jobDetails }: { managementId: string; jobDetails: JobDetails }, { rejectWithValue }) => {
        try {
            const token = getToken();
            if (!token) {
                return rejectWithValue('Token not found');
            }
            const response = await axios.post(`/job/${managementId}`, jobDetails, {
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



const initialState = {
    jobDetails: {} as JobDetails,
    loading: false,
    error: null as string | null
};

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getJobDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getJobDetails.fulfilled, (state, action: PayloadAction<JobDetails>) => {
                state.loading = false;
                state.jobDetails = action.payload;
            })
            .addCase(getJobDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(updateJobDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateJobDetails.fulfilled, (state, action: PayloadAction<JobDetails>) => {
                state.loading = false;
                state.jobDetails = action.payload;
            })
            .addCase(updateJobDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    }
});


export default jobSlice.reducer;

