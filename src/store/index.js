import {configureStore} from '@reduxjs/toolkit';
import movieReducer from '../slice/createSlice';


export const store = configureStore({
    reducer:{
        movies:movieReducer
    }
})