import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const todosList = createAsyncThunk(
    "todos/todosList",
    async (dispatch, getstate) => {
        return await fetch("https://jsonplaceholder.typicode.com/todos").then(
            res => res.json()
        );
    }
)

export const TodosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        status: null
    },
    extraReducers: {
        [todosList.pending]: (state, action) => {
            state.status = "LOADING"
        },
        [todosList.fulfilled]: (state, action) => {
            state.status = "SUCCESS"
        },
        [todosList.rejected]: (state, action) => {
            state.status = "ERROR"
        }
    },
});

export default TodosSlice.reducer;