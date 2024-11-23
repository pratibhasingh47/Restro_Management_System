import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserState {
    user: null | { id: string; name: string; email: string; role: string };
    token: string | null;
}

const initialState: UserState = {
    user: null,
    token: null,
};

export const signupUser = createAsyncThunk(
    'user/signup',
    async (userData: { name: string; email: string; password: string; contactNumber: string; role: string; managementId?: string }, { dispatch }) => {
        const response = await axios.post('http://localhost:3000/auth/signup', userData);
        const { user, token } = response.data;
        localStorage.setItem('authToken', token); // Store token in local storage
        dispatch(setUser({ user, token }));
        return { user, token };
    }
);

export const loginUser = createAsyncThunk(
    'user/login',
    async (credentials: { email: string; password: string; managementId?: string }, { dispatch }) => {
        const response = await axios.post('http://localhost:3000/auth/login', credentials);
        const { user, token } = response.data;
        localStorage.setItem('authToken', token); // Store token in local storage
        dispatch(setUser({ user, token }));
        return { user, token };
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ user: UserState['user']; token: string }>) {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        clearUser(state) {
            state.user = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signupUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        });
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;