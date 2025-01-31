import { createSlice } from "@reduxjs/toolkit"; 

export const themeSliceReducer = createSlice({
    name : 'themeSliceReducer',
    initialState : true,  
    reducers : {
        toggleTheme: (state) => !state,
 
    },
});

export const { toggleTheme } = themeSliceReducer.actions;
export default themeSliceReducer.reducer;
