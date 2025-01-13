// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import axios from 'axios';

// interface StaffPersonalState {
//     personalDetails: any | null;
//     loading: boolean;
//     error: string | null;
// }

// const initialState: StaffPersonalState = {
//     personalDetails: null,
//     loading: false,
//     error: null,
// };

// // Helper function to get the token from local storage or any other storage mechanism
// const getToken = () => {
//     const token = localStorage.getItem('authToken'); // Ensure the key matches the one used to store the token
//     console.log('Retrieved Token:', token); // Add debugging log
//     return token;
// };

// // Async thunk to fetch personal details using POST request
// export const fetchPersonalDetails = createAsyncThunk(
//     'staffPersonal/fetchPersonalDetails',
//     async (_, { rejectWithValue }) => {
//         try {
//             const token = getToken();
//             console.log('Token:', token); // Print token for debugging
//             const response = await axios.post('http://localhost:3000/staffMyAccount/personal/getStaff', {}, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });
//             return response.data;
//         } catch (error: any) {
//             return rejectWithValue(error.response.data);
//         }
//     }
// );

// // Async thunk to update personal details
// export const updatePersonalDetails = createAsyncThunk(
//     'staffPersonal/updatePersonalDetails',
//     async (data: any, { rejectWithValue }) => {
//         try {
//             const token = getToken();
//             console.log('Token:', token); // Print token for debugging
//             const response = await axios.put('http://localhost:3000/staffMyAccount/personal/updateStaff', data, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });
//             return response.data;
//         } catch (error: any) {
//             return rejectWithValue(error.response.data);
//         }
//     }
// );

// const staffPersonalSlice = createSlice({
//     name: 'staffPersonal',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchPersonalDetails.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchPersonalDetails.fulfilled, (state, action: PayloadAction<any>) => {
//                 state.loading = false;
//                 state.personalDetails = action.payload;
//             })
//             .addCase(fetchPersonalDetails.rejected, (state, action: PayloadAction<any>) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             })
//             .addCase(updatePersonalDetails.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(updatePersonalDetails.fulfilled, (state, action: PayloadAction<any>) => {
//                 state.loading = false;
//                 state.personalDetails = action.payload;
//             })
//             .addCase(updatePersonalDetails.rejected, (state, action: PayloadAction<any>) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             });
//     },
// });

// export default staffPersonalSlice.reducer;






import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface StaffPersonalDetails {
    name: string;
    birthday: string;
    gender: string;
    email: string;
    phone: string;
    state: string;
    city: string;
    homeAddress: string;
    workAddress: string;
    motherName: string;
    fatherName: string;
    alternateEmail: string;
    alternateMobileNo: string;
}

interface StaffPersonalState {
    personalDetails: StaffPersonalDetails | null;
    loading: boolean;
    error: string | null;
}

const initialState: StaffPersonalState = {
    personalDetails: null,
    loading: false,
    error: null,
};

const getToken = () => {
    const token = localStorage.getItem('authToken'); // Ensure the key matches the one used to store the token
    console.log('Retrieved Token:', token); // Add debugging log
    return token;
};

export const fetchPersonalDetails = createAsyncThunk(
    'staffPersonal/fetchPersonalDetails',
    async (_, { rejectWithValue }) => {
        try {
            const token = getToken();
            if (!token) {
                return rejectWithValue('Token not found');
            }
            console.log('Token:', token); // Print token for debugging
            const response = await axios.post('http://localhost:3000/staffMyAccount/personal/getStaff', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error: any) {
            console.error('Error:', error.response.data); // Add debugging log
            return rejectWithValue(error.response.data);
        }
    }
);

export const updatePersonalDetails = createAsyncThunk(
    'staffPersonal/updatePersonalDetails',
    async (data: StaffPersonalDetails, { rejectWithValue }) => {
        try {
            const token = getToken();
            if (!token) {
                return rejectWithValue('Token not found');
            }
            console.log('Token:', token); // Print token for debugging
            const response = await axios.put('http://localhost:3000/staffMyAccount/personal/updateStaff', data, {
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
            .addCase(fetchPersonalDetails.fulfilled, (state, action: PayloadAction<StaffPersonalDetails>) => {
                state.loading = false;
                state.personalDetails = action.payload;
            })
            .addCase(fetchPersonalDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(updatePersonalDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updatePersonalDetails.fulfilled, (state, action: PayloadAction<StaffPersonalDetails>) => {
                state.loading = false;
                state.personalDetails = action.payload;
            })
            .addCase(updatePersonalDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default staffPersonalSlice.reducer;