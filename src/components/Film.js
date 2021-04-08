import React from 'react';

const Film = ({img, release, title, vote}) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 film_card flex flex-col justify-between">
            <img className="w-full h-72" src={`https://image.tmdb.org/t/p/original${img}`}
                 alt="Sunset in the mountains"/>
            <div className="px-3 py-1">
                <div className="font-bold text-md">{title}</div>
            </div>
            <div className="w-max py-1 flex">
                <span
                    className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">{release}</span>
                <span
                    className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">{vote}/10</span>
            </div>
        </div>
    );
};

export default Film;