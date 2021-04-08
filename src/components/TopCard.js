import React,{useEffect} from 'react';

const TopCard = ({film}) => {

    return (
        <div className="top_card max-w-xs rounded overflow-hidden shadow-lg my-2 h-60">
            <img
                className="w-full object-cover bg-no-repeat h-full"
                src={`https://image.tmdb.org/t/p/original${film?.poster_path}`} alt=""/>
        </div>
    );
};

export default TopCard;