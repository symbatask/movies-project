import React, {useEffect,useState} from 'react';
import axios from "axios";

const Latest = () => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        axios("https://api.themoviedb.org/3/movie/latest?api_key=a684428f3a81d1239a0f0e37e400f243&language=en-US")
            .then(obj => setFilms(obj.data.results))
    }, [])
    return (
        <div>

        </div>
    );
};

export default Latest;