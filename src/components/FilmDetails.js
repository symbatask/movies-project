import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Video from "./Video";
import Spinner from "./Spinner";


const FilmDetails = () => {

    const {id} = useParams()
    const [films, setFilms] = useState({})
    const [actors, setActors] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=a684428f3a81d1239a0f0e37e400f243&language=en-US`)
            .then(res => {
                setFilms(res.data)
                setIsLoading(false)
            })
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=a684428f3a81d1239a0f0e37e400f243&language=en-US`)
            .then(res => {
                setActors(res.data.cast.slice(0, 5))
            })
    }, [id])

    if (isLoading) return <Spinner/>
    return (
        <div>
            {films?.backdrop_path ? <div className="h-96"
                                         style={{background: `url(https://image.tmdb.org/t/p/original/${films?.backdrop_path}) fixed no-repeat center/cover`}}/> :
                <div className="m-20"/>}
            <div className="details__container flex">
                <div className="flex">
                    <div
                        className="w-56 rounded overflow-visible top-card h-72 mx-5 bg-black relative -mt-9 film__img-small left-14">
                        {films.poster_path ? <img className="w-full h-full object-cover"
                                                  src={`https://image.tmdb.org/t/p/original/${films?.poster_path}`}
                                                  alt="Sunset in the mountains"/> :
                            <img className="w-full h-full object-cover"
                                 src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                                 alt="Sunset in the mountains"/>}
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
                        <div className="px-6 py-4 mb-5">
                            <div className="flex flex-col p-4 rounded-lg">
                                <p className="pl-40 mb-4">Actors:</p>
                                <ul>
                                    {
                                        actors.map(el => (
                                            <li className="flex mb-3 items-center">{el.profile_path ? <img
                                                src={`https://image.tmdb.org/t/p/original${el.profile_path}`}
                                                className="actor__img mr-2" alt=""/> : <img
                                                src="https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/noimage_person.png"
                                                className="actor__img mr-2" alt=""/>}
                                                <div className="flex flex-col"><span>name: {el.name}</span>
                                                    <span>character: {el.character}</span></div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
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
                        <Video/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmDetails;



