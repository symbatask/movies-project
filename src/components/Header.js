import React,{useEffect,useState} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios'

const Header = () => {
    const [films, setFilms] = useState([])
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        setSearchValue("")
        axios(`https://api.themoviedb.org/3/search/movie?api_key=a684428f3a81d1239a0f0e37e400f243&language=en-US&query=${searchValue}&page=1&include_adult=false`)
            .then(obj =>{
                setFilms(obj.data.results)
            } )
    },[searchValue])

    const handleChange = (e) => {
        let search = document.querySelector(".search_active")
        const value = e.target.value
        if (value.length > 3) {
            setSearchValue(value)
            search.style.display = "flex"
        } else {
            search.style.display = "none"
            setSearchValue("")
        }
    }

    const handlePress = (e) => {
        let search = document.querySelector(".search_active")
        if (e.key === 'Enter' && e.target.value.length > 3) {
            search.style.display = "none"
            window.location.href = `/film/${films[0].id}`
            setSearchValue("")
        }
    }

    return (
        <div className="header">
            <div className="header__container">
                <div className="header__left">
                    <NavLink to="/" className="header__logo">Films</NavLink>
                    <nav className="header_nav">
                        <NavLink to="/" className="header_nav__link">Main</NavLink>
                        <NavLink to="/popular" className="header_nav__link">Popular</NavLink>
                        <NavLink to="/nowplaying" className="header_nav__link">Now playing</NavLink>
                    </nav>
                </div>
                <div className="header__right">
                    <div className="relative text-gray-600 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
               viewBox="0 0 24 24" className="w-6 h-6"><path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </button>
      </span>
                        <div id="searchInput">
                            <div className="search_active">
                                {
                                    films.map(film => (
                                            <NavLink to={`/film/${film.id}`} className="search__link">{film.title}</NavLink>
                                    ))
                                }
                            </div>
                            <input id="inp" type="search" name="q"
                                   className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                                   placeholder="Search..." autoComplete="off" onChange={handleChange} onKeyPress={handlePress}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;