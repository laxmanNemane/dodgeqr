import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let data = {
  email: "dodgeadmin@yopmail.com",
  password: "123456",
};

export const loginUser = createAsyncThunk("user/loginUser", async (data) => {
  let res = await axios.post("https://dodgeqr.prometteur.in/api/admin/login", {
    body: data,
  });
  return res.data;
  console.log(res.data);
});

const userSlice = createSlice({
  name: "userLogin",
  initialState: {
    user: [],
    isLoggedIn: "false",
    Flag: "false",
    status: "",
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.status = "Loading!";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.status = "You have successfully Logged in";
      state.user = action.payload;
      state.isLoggedIn = "true";
      state.Flag = "true";
    },
    [loginUser.rejected]: (state, action) => {
      state.status = "Authentication Error ";
    },
  },
});

export default userSlice.reducer;
