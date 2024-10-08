import { Navcomponent } from "../../components/nav_comp"
import { Fragment, useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { moviesAPI } from "../../api";
import { Cardcomponent } from "../../components/card/card";
import { getMovviesBySearch } from "../../utiles/getMoviseBySearch";


export const Homecomponent = () => {

    useEffect(()=>{
        const getdata = ()=>{
            dispacth(moviesAPI());
        }
        getdata();
    },[]);

    const {movies, searchValue} = useSelector(state=>state.movies);


    const dispacth = useDispatch();

    const moviesFilterByName = getMovviesBySearch(movies,searchValue)

    
    
   
    return (
        <Fragment>
            <Navcomponent />
            <div className="flex flex-wrap wl-auto justify-center">
                {moviesFilterByName?.length>0 && moviesFilterByName.map(movie=>{
                    return(
                        
                        <Cardcomponent key={movie.id} movies={movie} />
                        
                    )
                })}
            </div>
        </Fragment>
    )
}