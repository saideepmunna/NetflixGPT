import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:{
        selectedLang: "en",
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.selectedLang = action.payload;
        }
    }
});

export const {changeLanguage} = configSlice.actions;
export default configSlice.reducer;

