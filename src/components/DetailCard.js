import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios"



const DetailCard = () => {
    const {id} = useParams()
    const [details,setDetails] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=a684428f3a81d1239a0f0e37e400f243&language=en-US`)
            .then(res => {
                setDetails(res.data)

            })
    }, [])
    return (
        <div className="flex">
            <div className="w-56 rounded overflow-visible h-72 mx-5 bg-black relative -mt-9 film__img-small left-14">
                <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${details?.poster_path}`} alt="Sunset in the mountains"/>

            </div>
        </div>
    );
};

export default DetailCard;