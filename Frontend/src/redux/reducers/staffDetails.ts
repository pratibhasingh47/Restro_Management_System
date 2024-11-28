// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { StaffDetail } from '../../types/staff'; // Adjust path as needed

// interface StaffDetailsState {
//     staffDetails: StaffDetail[];
//     loading: boolean;
//     error: string | null;
// }

// const initialState: StaffDetailsState = {
//     staffDetails: [],
//     loading: false,
//     error: null,
// };

// export const fetchStaffDetails = createAsyncThunk<StaffDetail[]>('staffDetails/fetchStaffDetails', async () => {
//     const response = await axios.get<StaffDetail[]>('http://localhost:3000/staff/staffDetails');
//     return response.data;
// });

// export const addStaffDetailAsync = createAsyncThunk<StaffDetail, StaffDetail>('staffDetails/addStaffDetail', async (staffDetail) => {
//     try {
//         const response = await axios.post<StaffDetail>('http://localhost:3000/staff/addStaff', staffDetail, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         return response.data;
//     } catch (error) {
//         if (axios.isAxiosError(error)) {
//             console.error('Error adding staff detail:', error.response?.data || error.message);
//         } else {
//             console.error('Error adding staff detail:', (error as Error).message);
//         }
//         throw error;
//     }
// });

// export const updateStaffDetailAsync = createAsyncThunk<StaffDetail, StaffDetail>('staffDetails/updateStaffDetail', async (staffDetail) => {
//     const response = await axios.put<StaffDetail>(`http://localhost:3000/staff/staff/${staffDetail._id}`, staffDetail);
//     return response.data;
// });

// export const deleteStaffDetailAsync = createAsyncThunk<string, string>('staffDetails/deleteStaffDetail', async (id) => {
//     await axios.delete(`http://localhost:3000/staff/staff/${id}`);
//     return id;
// });

// const staffDetailsSlice = createSlice({
//     name: 'staffDetails',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchStaffDetails.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchStaffDetails.fulfilled, (state, action: PayloadAction<StaffDetail[]>) => {
//                 state.loading = false;
//                 state.staffDetails = action.payload;
//             })
//             .addCase(fetchStaffDetails.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message || 'Failed to fetch staff details';
//             })
//             .addCase(addStaffDetailAsync.fulfilled, (state, action: PayloadAction<StaffDetail>) => {
//                 state.staffDetails.push(action.payload);
//             })
//             .addCase(updateStaffDetailAsync.fulfilled, (state, action: PayloadAction<StaffDetail>) => {
//                 const index = state.staffDetails.findIndex(detail => detail._id === action.payload._id);
//                 if (index !== -1) {
//                     state.staffDetails[index] = action.payload;
//                 }
//             })
//             .addCase(updateStaffDetailAsync.rejected, (state, action) => {
//                 state.error = action.error.message || 'Failed to update staff detail';
//             })
//             .addCase(deleteStaffDetailAsync.fulfilled, (state, action: PayloadAction<string>) => {
//                 state.staffDetails = state.staffDetails.filter(detail => detail._id !== action.payload);
//             })
//             .addCase(deleteStaffDetailAsync.rejected, (state, action) => {
//                 state.error = action.error.message || 'Failed to delete staff detail';
//             });
//     },
// });

// export default staffDetailsSlice.reducer;