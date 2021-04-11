import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const TopCard = ({film}) => {

    return (
        <div className="card_padding">
            <Link to={`/film/${film.id}`} className="top_card max-w-xs rounded overflow-hidden my-2 h-60">
                <img
                    className="w-full object-cover bg-no-repeat h-full"
                    src={`https://image.tmdb.org/t/p/original${film?.poster_path}`} alt=""/>
            </Link>
        </div>
    );
};

export default TopCard;