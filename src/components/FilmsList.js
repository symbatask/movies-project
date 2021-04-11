import React from 'react';
import Film from "./Film";

const FilmsList = ({films, title}) => {

    return (
        <div className="films">
            <div className="films__container container">
                <h1 className="films__title text-5xl">{title}</h1>
                <div className="films__list">
                    {
                        films.map(el => (
                            <Film id={el.id} img={el?.poster_path} release={el?.release_date} title={el.title} vote={el.vote_average}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default FilmsList;