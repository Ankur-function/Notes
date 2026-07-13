import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    
    name:'search',
    initialState:{
        searchResults: {}
    },
    reducers:{
        searchSuggestions: (state,action) =>{
            state.searchResults[action.payload.query] = action.payload.result
        }
    }
});

export const {searchSuggestions} = searchSlice.actions;
export default searchSlice.reducer;