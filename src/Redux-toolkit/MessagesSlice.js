import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const callMessageList = createAsyncThunk(
  "message/CallMessageList",
  async () => {
    const token = localStorage.getItem("token");
    let res = await axios.get(
      "https://dodgeqr.prometteur.in/api/message-list",
      {
        headers: {
          Authorization: token,
        },
      }
    );
    if (res.status === 200) {
      return res.data;
    } else {
      return "Somthings went Wrong";
    }
  }
);

const MessagesSlice = createSlice({
    name:'message',
    initialState:{
        messages:[],
        status:""
    },
    extraReducers:{
        [callMessageList.pending]:(state , action)=>{
            state.status = "loading"
        },
        [callMessageList.fulfilled]:(state , action)=>{
            state.status = "Suucessfully get messages"
            state.messages = action.payload
        },
        [callMessageList.rejected]:(state , action)=>{
            state.status = "Error"
            
        }
    }
});


export default MessagesSlice.reducer