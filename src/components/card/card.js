export const Cardcomponent = ({movies})=>{

    const {movie:title,image,rating,imdb_url} = movies;
    return(
        <div className="min-w-48 max-w-48 border max-h-auto min-h-60 m-[20px] p-[5px] border-zinc-100 shadow-gray-500 shadow-sm rounded-md bg-neutral-5000">
            <div>
                <h5 className="text-base font-medium pb-1 border-b border-stone-400">{title}</h5>
            </div>
            <div>
                <img src={image} alt='' className="min-w-[80px] max-w-[80px] max-h-[100px] min-h-[100px] border border-zinc-800 mt-2" />
                <p className="text-xs">description</p>
            </div>
            <div className="text-xs pt-2">
                <p>Director:#aaaaaaa</p>
                <p>Geners:#bbbbbbbbb</p>
            </div>
            <div className="text-sm pt-2">
                <span className="mr-2">Rating: {rating}</span>
                <span className="mr-2">#icon</span>
            </div>
            <div>
                        <a href={imdb_url} target='_blank'  rel="noreferrer">IMDB </a>-review
            </div>

        </div>
    )
}