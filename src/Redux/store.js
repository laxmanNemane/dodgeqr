import { configureStore } from "@reduxjs/toolkit";
import TodosSlice from "./TodosSlice";
import userReducers from "./userSlice";

const store = configureStore({
    reducer: {
        users: userReducers,
        todos: TodosSlice
    },
});

export default store;