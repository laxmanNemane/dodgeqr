import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const callUsers = createAsyncThunk("users/callUsers", async () => {
  let token = localStorage.getItem("token");
  let res = await axios.get("https://dodgeqr.prometteur.in/api/users", {
    headers: {
      Authorization: token,
    },
  });
  if (res.status === 200) {
    return res.data;
  } else {
   
  }
});

const ManageUsersSlice = createSlice({
  name: "userslist",
  initialState: {
    userList: [],
    status: "",
  },
  extraReducers: {
    [callUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [callUsers.fulfilled]: (state, action) => {
      state.status = "Successfully get userlist";
      state.userList = action.payload;
    },
    [callUsers.rejected]: (state, action) => {
      state.status = "Something Went Wrong";
    },
  },
});

export default ManageUsersSlice.reducer;
