import React,{useEffect, useState} from 'react';
import axios from "axios";
import FilmsList from "../components/FilmsList";

const TopRated = () => {
    const [films, setFilms] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(()=> {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=a684428f3a81d1239a0f0e37e400f243&language=en-US&page=${page}`)
            .then(obj => {
                setFilms(obj.data.results)
                setTotalPages(obj.data.total_pages)
            })
    },[page])

    const nextPage = () => {
        if (page < totalPages) setPage(page + 1)
    }
    const underPage = () => {
        if ( page > 1 )setPage(page - 1)
    }

    return (
        <div className="pb-10">
            <FilmsList films={films} title="Top rated" />
            <div className="flex justify-center">
                <button className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200" onClick={underPage}>Previous</button>
                <input placeholder={page} className="relative block py-2 px-3 w-10 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200" type="text"/>
                <span className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0">of</span>
                <span className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200">{totalPages}</span>
                <button className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200" onClick={nextPage}>Next</button>
            </div>
        </div>
    )
};

export default TopRated;