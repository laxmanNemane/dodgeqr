import { configureStore } from "@reduxjs/toolkit";
import ManageUsersSlice from "./ManageUsersSlice";
import MessagesSlice from "./MessagesSlice";
import PackageSlice from "./PackageSlice";
import SubcategorySlice from "./SubcategorySlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        users: userSlice,
        message:MessagesSlice ,
        package:PackageSlice,
        subCategory:SubcategorySlice,
        allUser:ManageUsersSlice
    },
});

export default store;