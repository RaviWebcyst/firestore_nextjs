import auth, { authSlice } from "./auth/auth-slice";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./auth/userSlice";

const store = configureStore({
    reducer: {
        auth:authSlice.reducer,
        user: userSlice.reducer,
    }
});

export default store;
