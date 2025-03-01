import auth from "./auth/auth-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        auth
    }
});

export default store;
