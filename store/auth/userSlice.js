import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        /** Changes User Authentication State */
        setUser(state, action) {
            state.user = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

/** @returns {Object} Authenticated User State */
export const selectUser = (state) => state.user.user;

export default userSlice;


