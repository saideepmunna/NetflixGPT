import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import friendReducer from "./friendSlice"
const appStore = configureStore({
    reducer:{
       user: userReducer,
       userFriend: friendReducer,
    }
});

export default appStore;