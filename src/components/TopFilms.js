import React, {useEffect, useState} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import TopCard from "./TopCard";
import axios from "axios";

const TopFilms = () => {
    const [films, setFilms] = useState([])

    useEffect( () => {
        axios("https://api.themoviedb.org/3/movie/top_rated?api_key=a684428f3a81d1239a0f0e37e400f243&language=en-US&page=1")
            .then(obj => setFilms(obj.data.results.filter((el, idx) => idx < 20)))
        console.log()
    }, [])


    return (
        <div className="top">
            <div className="top__container container">
                <OwlCarousel items="6" loop="true" margin={20}>
                    {films.map(film => (
                        <TopCard film={film}/>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
};

export default TopFilms;