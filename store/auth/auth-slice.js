import { createSlice } from '@reduxjs/toolkit';
import { getCookie } from 'cookies-next';

const initializeState = getCookie('token')  ? {
    isLoggedIn: true,
    user:{}
}:{
    isLoggedIn: false,
    user:{}
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initializeState,
    reducers:{
        deAuthenticate: (state) => {
            state.isLoggedIn = false;
        },
        authenticate: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        restoreAuthState: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
    }
});

export const {deAuthenticate, authenticate, restoreAuthState} = authSlice.actions;

export default authSlice.reducer;
