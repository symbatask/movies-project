import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios"

const FilmBackgrond = () => {
    const {id} = useParams()
    const [films,setFilms] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=a684428f3a81d1239a0f0e37e400f243&language=en-US`)
            .then(res => {
                setFilms(res.data)
            })
    }, [])

    return (
            <div className="h-96" style={{background: `url(https://image.tmdb.org/t/p/original/${films?.backdrop_path}) fixed no-repeat center/cover`}}/>


    );
};

export default FilmBackgrond;