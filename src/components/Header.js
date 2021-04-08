import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__left">
                    <span className="header__logo">Films</span>
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
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2"
               viewBox="0 0 24 24" className="w-6 h-6"><path
    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </button>
      </span>
                        <input type="search" name="q"
                               className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                               placeholder="Search..." autoComplete="off"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;