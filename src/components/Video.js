import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios"

const Video = () => {
    const {id} = useParams()
    const [videos,setVideos] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=a684428f3a81d1239a0f0e37e400f243&language=en-US`)
            .then(res => {
                if (res.data.results.length === 0){
                    setVideos({key : "LkG-5sYVQIA"})
                } else {
                    setVideos(res.data.results[0])
                }
            })
            .catch(err => console.log(err))
    }, [id])
    return (
            <iframe width="500" height="315" src={`https://www.youtube.com/embed/${videos.key}`}
    title="YouTube video player" frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen/>
    );
};

export default Video;