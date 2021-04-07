import React from 'react';
import Film from "./Film";

const FilmsList = () => {
    return (
        <div className="films">
            <div className="films__container container">
                <h1 className="films__title">Popular</h1>
                <div className="films__list">
                    <Film />
                    <Film />
                    <Film />
                    <Film />
                    <Film />
                    <Film />
                    <Film />
                    <Film />
                </div>
            </div>
        </div>
    );
};

export default FilmsList;