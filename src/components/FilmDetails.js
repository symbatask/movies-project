import React, {useEffect, useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary'
import {useParams} from "react-router-dom";
import axios from "axios";
import Video from "./Video";



const FilmDetails = () => {

    const {id} = useParams()
    const [films,setFilms] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=a684428f3a81d1239a0f0e37e400f243&language=en-US`)
            .then(res => {
                setFilms(res.data)
            })
    }, id)

    return (
        <div>
            <div className="h-96" style={{background: `url(https://image.tmdb.org/t/p/original/${films?.backdrop_path}) fixed no-repeat center/cover`}}/>
         <div className="details__container flex">
             <div className="flex">
                 <div className="w-56 rounded overflow-visible top-card h-72 mx-5 bg-black relative -mt-9 film__img-small left-14">
                     <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${films?.poster_path}`} alt="Sunset in the mountains"/>
                 </div>
             </div>
             <div className="pl-32">
                 <div className="w-3/4 rounded overflow-hidden shadow-lg my-2">
                     <div className="px-6 py-4">
                         <div className="font-bold text-xl mb-2">{films.title}</div>
                         <p className="text-grey-darker text-base">
                             {films.overview}
                         </p>
                     </div>
                     <div className="px-6 py-4">
                        <a href={films.homepage} target="_blank"
                            className="bg-gray-800 p-1 my-1 ml-1 text-white inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{films.homepage || "No home page"}</a>
                         <span
                             className="bg-gray-800 p-1 my-1 ml-1 text-white  inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{`release date: ${films.release_date}`}</span>
                         <span
                             className="bg-gray-800 p-1 my-1 text-white inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">{`revenue: ${+films.revenue ? films.revenue + "$" : "Unknown"}`}</span>
                         <span
                             className="bg-gray-800 p-1 my-1 ml-1 text-white inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">{`status: ${films.status}`}</span>
                         <span
                             className="bg-gray-800 p-1 my-1 ml-1 text-white inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">{`budget: ${+films.budget ? films.budget + "$" : "Unknown"}`}</span>
                         <span
                             className="bg-gray-800 p-1 my-1 ml-1 text-white inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">{`original language: ${films.original_language}`}</span>
                     </div>
                     <ErrorBoundary>
                        <Video/>
                     </ErrorBoundary>
                 </div>
             </div>
         </div>
        </div>

    );
};

export default FilmDetails;



