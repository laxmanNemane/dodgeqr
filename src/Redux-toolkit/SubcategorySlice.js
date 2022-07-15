import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const callSubcategoryList = createAsyncThunk(
  "message/CallMessageList",
  async () => {
    const token = localStorage.getItem("token");
    let res = await axios
    .get("https://dodgeqr.prometteur.in/api/subcategory", {
      headers: {
        Authorization: token,
      },
    })
    // if (res.status === 200) {
      return res.data;
    // } else {
    //   return "Somthings went Wrong";
    // }
  }
);

const MessagesSlice = createSlice({
    name:'subCategory',
    initialState:{
        subCategoryList:[],
        status:""
    },
    extraReducers:{
        [callSubcategoryList.pending]:(state , action)=>{
            state.status = "loading"
        },
        [callSubcategoryList.fulfilled]:(state , action)=>{
            state.status = "Suucessfully get subcateggory"
            state.subCategoryList = action.payload
        },
        [callSubcategoryList.rejected]:(state , action)=>{
            state.status = "Error"
           
        }
    }
});


export default MessagesSlice.reducer