import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
    "users/getUsers",
    async (disaptch, getstate) => {
        return await fetch("https://jsonplaceholder.typicode.com/users").then(
            res => res.json()
        );
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        status: null,

    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.status = "Loading"
        },
        [getUsers.fulfilled]: (state, action) => {
            state.status = "Success"
        },
        [getUsers.rejected]: (state, action) => {
            state.status = "Error"
        }
    }
})

export default userSlice.reducer;