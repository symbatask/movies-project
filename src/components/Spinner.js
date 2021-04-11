import React from 'react';
const Spinner = () => {
    return (
        <div style={{height: "100vh", display: "flex", justifyContent: "center", alignContent: "center"}}>
            <svg   style={{margin: "auto", background: "rgb(255, 255, 255)", display: "block"}} width="101px" height="101px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" r="27" stroke-width="5" stroke="#0b0b0b" stroke-dasharray="42.411500823462205 42.411500823462205" fill="none" stroke-linecap="round">
                    <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
                </circle>
                <circle cx="50" cy="50" r="21" stroke-width="5" stroke="#43413e" stroke-dasharray="32.98672286269283 32.98672286269283" stroke-dashoffset="32.98672286269283" fill="none" stroke-linecap="round">
                    <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform>
                </circle>
            </svg>
        </div>
    );
};

export default Spinner;