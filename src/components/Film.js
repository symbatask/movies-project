import React from 'react';
import {Link} from "react-router-dom";

const Film = ({img, release, title, vote, id}) => {
    return (
        <Link to={`/film/${id}`} className="max-w-xs rounded film__img-small my-2 film_card bg-gray-900 flex flex-col justify-between">
            <img className="w-full h-72" src={`https://image.tmdb.org/t/p/original${img}`}
                 alt="Sunset in the mountains"/>
            <div className="px-3 py-1">
                <div className="font-bold text-md text-white">{title}</div>
            </div>
            <div className="w-max py-1 flex">
                <span
                    className="inline-block bg-grey-lighter text-white rounded-full mr-8 px-3 py-1 text-sm font-semibold text-grey-darker">{release}</span>
                <span
                    className="inline-block bg-grey-lighter text-white rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">{vote}/10</span>
            </div>
        </Link>
    );
};

export default Film;