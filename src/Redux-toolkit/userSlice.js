import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userLogin",
  initialState: {
    user: [],
    isLoggedIn: "false",
    Flag: "false",
    token:""
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = "true";
      state.Flag = "true";
      state.token = action.payload.token
    },
    logout: (state, action) => {
      state.user = "null";
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
