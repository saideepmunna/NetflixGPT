import { createSlice } from "@reduxjs/toolkit";

export const friendSlice = createSlice({
    name: "friend",
    initialState: null,
    reducers:{
        addFriend:(state,action)=>{
             return action.payload
        },
        removeFriend:(state,action)=>{
            return null;
        }
    }
})

export const {addFriend, removeFriend} = friendSlice.actions;
export default friendSlice.reducer;