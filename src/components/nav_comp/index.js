import {useDispatch,useSelector} from 'react-redux';
import { setSearchValue } from '../../slice/createSlice';

export const Navcomponent = () => {

    const dispatch = useDispatch();

    const onSearchChange = (e)=>{
        dispatch(setSearchValue(e.target.value));
    }

    const {searchValue} = useSelector(state=>state.movies);
    console.log(searchValue);

    
   

    return (
        <div className="flex justify-between bg-emerald-200 p-2">
            <div className="basis-1/4">
                <h2 className="text-4xl">MovieApp</h2>
            </div>
            <div className="flex justify-evenly basis-1/2 items-center" >
                <div >
                    <input type="search" onChange={onSearchChange} className=" outline-none bg-stone-100 h-5 rounded-md pl-2" />
                </div>
                <div>
                    <div >
                        <button className="p-1 ml-20 text-sm rounded border-slate-950 border">box-1</button>
                    </div>
                </div>
                <div>
                    <div><button className="p-1 ml-[-50px] text-sm rounded border-slate-950 border" >box-2</button></div>
                </div>
            </div>
        </div>
    )
}