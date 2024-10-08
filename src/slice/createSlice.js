import { createSlice } from "@reduxjs/toolkit";



export const moiveSlice = createSlice({
    name:'movies',
    initialState:{
        movies:[],
        searchValue:''

    },
    reducers:{
        moviesData : (state,action)=>{
            state.movies=action.payload
        },
        setSearchValue:(state,action)=>{
            state.searchValue=action.payload.toLowerCase();
        }
    }
})

export const {moviesData,setSearchValue} = moiveSlice.actions;

export default moiveSlice.reducer;
