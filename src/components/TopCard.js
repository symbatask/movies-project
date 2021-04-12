import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const TopCard = ({film}) => {

    return (
        <div className="card_padding">
            <Link to={`/film/${film.id}`} className="top_card max-w-xs rounded overflow-hidden my-2 h-60">
                {film.poster_path ? <img
                    className="w-full object-cover bg-no-repeat h-full"
                    src={`https://image.tmdb.org/t/p/original${film?.poster_path}`} alt=""/> : <img
                    className="w-full object-cover bg-no-repeat h-full"
                    src="https://lh3.googleusercontent.com/proxy/DtiilMRnfe-AGLVSrkNuUlIcBkhmZlvG8OoIG1_fVxhZw8NR4ZFZk2x8Ji5XdMbFghRsVo2YTzpA279fkYM2q1cGLbnM6FgG-Vz4fIhLs4UvCuZy_I3k1gSxw9J-C6p0VYAg2IfLmta8qcx2wFT1yqvBZOzqkeiBUsOqh3UWykcXgjMnbGJQUrQnnm0WcuTjo71z9auMuLDTj7rZN8auHmxWNShlFke83lKnpZ7pn0cspcdYersgbHossYxvRHxm84sl2kpBVGwbhVKQeU0aHQhI9dHoH4au8IOKy-Mo3xw7HPHvlX5eoJVEUISS-_CVKT8uWOJ3i1DcW5cCXY4kcCkdIJVlWR04-tDTm2cwSOFD_fxiOQI_8PbQL4a2nN5ABRxER5mHDMepaxWkZ_7EFasb35R0aR9s4S1dA2Ar5uIilD0LtVfv0r4XEpqs1ZejTI5aBeLQRcHYEZG9RBfY8IiKPKQy3puRJEqrhCik2dcOu3QYqcXmySCZCn547CqgYAQwA6gkE7v4jhoGQdJ-BRRT5dgb9RhvXMjiKc1L93hGfx0ovyZ9gGw2kEUQgdO6ISluuwM" alt=""/>}
            </Link>
        </div>
    );
};

export default TopCard;