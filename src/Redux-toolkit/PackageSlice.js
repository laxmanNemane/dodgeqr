import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const callPackageList = createAsyncThunk(
  "message/CallMessageList",
  async () => {
    const token = localStorage.getItem("token");
    let res = await  axios
    .get("https://dodgeqr.prometteur.in/api/packages", {
      headers: {
        Authorization: token,
      },
    })
    if (res.status === 200) {
      return res.data;
    } else {
      return "Somthings went Wrong";
    }
  }
);

const MessagesSlice = createSlice({
    name:'packages',
    initialState:{
        packages:[],
        status:""
    },
    extraReducers:{
        [callPackageList.pending]:(state , action)=>{
            state.status = "loading"
        },
        [callPackageList.fulfilled]:(state , action)=>{
            state.status = "Suucessfully get packages"
            state.packages = action.payload
        },
        [callPackageList.rejected]:(state , action)=>{
            state.status = "Error"
           
        }
    }
});


export default MessagesSlice.reducer