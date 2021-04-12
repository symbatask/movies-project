import React, {useState, useEffect} from 'react';
import TopFilms from "../components/TopFilms";
import FilmsList from "../components/FilmsList";
import axios from "axios";
import {NavLink, useParams} from "react-router-dom";

const SearchPage = () => {
    const {param} = useParams()
    const [films, setFilms] = useState([])
    const [inp, setInp] = useState('')
    const [isActive, setIsActive] = useState(true)
    const [started, setStarted] = useState(0)

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=a684428f3a81d1239a0f0e37e400f243&language=en-US&query=${param}&page=1&include_adult=false`)
            .then(obj => {
                setFilms(obj.data.results)
                setIsActive(false)
                console.log("YOBA")
            })
    }, [])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=a684428f3a81d1239a0f0e37e400f243&language=en-US&query=${inp}&page=1&include_adult=false`)
            .then(obj => {
                setFilms(obj.data.results)
                console.log("there")
            })
    }, [inp])

    const handlePress = (e) => {
        const value = e.target.value
        if (value.length > 3 && e.key === 'Enter') {
            setInp(value)
        }
    }

    const handleClick = () => {
        const value = document.querySelector('#lg_search').value
        setInp(value)
    }

    return (
        <div>
            <TopFilms/>
            <div className="container">
                <div className="bg-black h-16 flex items-center justify-center rounded-md">
                    <input id="lg_search" type="search" name="q"
                           className="h-10 py-2 text-sm text-black lg_inp_search border-2 rounded-md pl-2 focus:outline-none focus:bg-white focus:text-gray-900"
                           placeholder="Wide search..." autoComplete="off" onKeyPress={handlePress}/>
                    <button className="bg-gray-900 h-10 text-gray-400 w-36 -ml-1 rounded-r-lg" onClick={handleClick}>Wide search</button>
                </div>
            </div>


            {isActive ? <div style={{height: "50vh"}}></div> : <FilmsList films={films} title="Search results"/>}
        </div>
    );
};

export default SearchPage;