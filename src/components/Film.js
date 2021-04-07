import React from 'react';

const Film = ( {film} ) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
            <img className="w-full h-72" src="https://tailwindcss.com/img/card-top.jpg"
                 alt="Sunset in the mountains" />
            <div className="px-6 py-1">
                <div className="font-bold text-xl">The Coldest Sunset</div>
            </div>
            <div className="px-6 py-1">
                <span
                    className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
                <span
                    className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
            </div>
        </div>
    );
};

export default Film;