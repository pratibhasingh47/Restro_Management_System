import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface PayDetails {
  wageCalculation: string;
  payroll: string;
  bankName: string;
  accountNo: string;
  bankBranch: string;
  ifscCode: string;
  issueDate: string;
  issueMonth: string;
  issuedAmount: number;
  allowance: number;
  status: string;
}

const getToken = () => {
  const token = localStorage.getItem('authToken');
  return token;
};

export const getPayDetails = createAsyncThunk(
  'pay/getPayDetails',
  async (managementId: string, { rejectWithValue }) => {
    try {
      const token = getToken();
      if (!token) {
        return rejectWithValue('Token not found');
      }
      const response = await axios.get(`http://localhost:3000/staffMyAccount/pay/${managementId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || 'Error fetching pay details');
    }
  }
);

export const updatePayDetails = createAsyncThunk(
  'pay/updatePayDetails',
  async ({ managementId, payDetails }: { managementId: string; payDetails: PayDetails }, { rejectWithValue }) => {
    try {
      const token = getToken();
      if (!token) {
        return rejectWithValue('Token not found');
      }
      const response = await axios.put(`http://localhost:3000/staffMyAccount/pay/${managementId}`, payDetails, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || 'Error updating pay details');
    }
  }
);

export const createPayDetails = createAsyncThunk(
  'pay/createPayDetails',
  async (payDetails: PayDetails, { rejectWithValue }) => {
    try {
      const token = getToken();
      if (!token) {
        return rejectWithValue('Token not found');
      }
      const response = await axios.post('http://localhost:3000/staffMyAccount/pay', payDetails, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || 'Error creating pay details');
    }
  }
);

export const approveAllowance = createAsyncThunk(
  'pay/approveAllowance',
  async ({ managementId, allowance }: { managementId: string; allowance: number }, { rejectWithValue }) => {
    try {
      const token = getToken();
      if (!token) {
        return rejectWithValue('Token not found');
      }
      const response = await axios.put(`http://localhost:3000/staffMyAccount/allowance/${managementId}`, { allowance }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || 'Error approving allowance');
    }
  }
);

const initialState = {
  payDetails: {} as PayDetails,
  loading: false,
  error: null as string | null
};

const paySlice = createSlice({
  name: 'pay',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPayDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPayDetails.fulfilled, (state, action: PayloadAction<PayDetails>) => {
        state.loading = false;
        state.payDetails = action.payload;
      })
      .addCase(getPayDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updatePayDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePayDetails.fulfilled, (state, action: PayloadAction<PayDetails>) => {
        state.loading = false;
        state.payDetails = action.payload;
      })
      .addCase(updatePayDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createPayDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPayDetails.fulfilled, (state, action: PayloadAction<PayDetails>) => {
        state.loading = false;
        state.payDetails = action.payload;
      })
      .addCase(createPayDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(approveAllowance.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(approveAllowance.fulfilled, (state, action: PayloadAction<PayDetails>) => {
        state.loading = false;
        state.payDetails = action.payload;
      })
      .addCase(approveAllowance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export default paySlice.reducer;