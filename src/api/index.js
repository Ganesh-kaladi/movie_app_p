import axios from 'axios';
import { moviesData } from '../slice/createSlice';




export const moviesAPI =  ()=> async dispatch =>{
    const url='https://dummyapi.online/api/movies'
    const {data} = await axios.get(url);
    dispatch(moviesData(data));

}