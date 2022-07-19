import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const callSubcategoryList = createAsyncThunk(
  "Subcategory/callSubcategoryList",
  async () => {
    const token = localStorage.getItem("token");
    let res = await axios.get("https://dodgeqr.prometteur.in/api/subcategory", {
      headers: {
        Authorization: token,
      },
    });
    if (res.status === 200) {
      return res.data;
    } else {
      return "Somthings went Wrong";
    }
  }
);

export const DeleteSubcategoty = createAsyncThunk(
  "Subcategory/DeleteSubcategoty",
  async (id) => {
    console.log(id);
    const token = localStorage.getItem("token");
    await axios
      .delete(`https://dodgeqr.prometteur.in/api/subcategory/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // if (res.status === 200) {
    //   // return res.data;
    //   console.log(res.data)
    // } else {
    //   return "Somthings went Wrong";
    // }
  }
);

export const PostSubcategory = createAsyncThunk(
  "Subcategory/PostSubcategory",
  async ({id , values}) => {
    console.log(id);
    const token = localStorage.getItem("token");
    axios
      .post(`https://dodgeqr.prometteur.in/api/subcategory`, values, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        // toast.success("sub_Category added successfully");
      })
      .catch((err) => {
        console.log(err);
        // toast.error("failed to add sub category");
      });
  }
    // if (res.status === 200) {
    //   // return res.data;
    //   console.log(res.data)
    // } else {
    //   return "Somthings went Wrong";
    // }
  
);

const MessagesSlice = createSlice({
  name: "subCategory",
  initialState: {
    subCategoryList: [],
    status: "",
    deleteRes: "",
  },
  extraReducers: {
    [callSubcategoryList.pending]: (state, action) => {
      state.status = "loading";
    },
    [callSubcategoryList.fulfilled]: (state, action) => {
      state.status = "Suucessfully get subcateggory";
      state.subCategoryList = action.payload;
    },
    [callSubcategoryList.rejected]: (state, action) => {
      state.status = "Error";
    },
    [DeleteSubcategoty.pending]: (state, action) => {
      state.status = "loading";
    },
    [DeleteSubcategoty.fulfilled]: (state, action) => {
      state.status = "Suucessfully deleted subcateggory";
      state.deleteRes = action.payload;
    },
    [DeleteSubcategoty.rejected]: (state, action) => {
      state.status = "Error";
    },
    [PostSubcategory.pending]: (state, action) => {
      state.status = "loading";
    },
    [PostSubcategory.fulfilled]: (state, action) => {
      state.status = "Suucessfully added subcateggory";
      state.deleteRes = action.payload;
    },
    [PostSubcategory.rejected]: (state, action) => {
      state.status = "Error";
    },
  },
});

export default MessagesSlice.reducer;
