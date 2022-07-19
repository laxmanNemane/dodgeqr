import {  createSlice } from "@reduxjs/toolkit";

// export const callPackageList = createAsyncThunk(
//   "Package/callPackageList",
//   async () => {
//     const token = localStorage.getItem("token");
//     let res = await axios.get("https://dodgeqr.prometteur.in/api/packages", {
//       headers: {
//         Authorization: token,
//       },
//     });
//     if (res.status === 200) {
//       return res.data;
//     } else {
//       return "Somthings went Wrong";
//     }
//   }
// );

const packageSlice = createSlice({
  name: "packages",
  initialState: {
    packages: [],
    status: "",
  },
  reducers: {
    getPackages:(state , action)=>{
      state.packages = action.payload 
      state.status ="successfully package get"
    }
  },
});

export const {getPackages} = packageSlice.actions

export default packageSlice.reducer;
