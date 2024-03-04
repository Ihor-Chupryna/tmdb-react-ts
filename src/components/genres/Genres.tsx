import { useEffect, useState } from "react";

import { IGenre } from "../../interfaces";
import { Genre } from "../genre/Genre";
import { useAppContext } from "../../hooks";
import { genreService } from "../../services";
import css from './genres.module.css';

const Genres = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);
    const {genreSetter, themeTrigger} = useAppContext();

    useEffect(() => {
        genreService.getGenresList().then(({data}) => setGenres(data.genres))
    }, []);

    return (
        <div  className={`${css.genresListMain} ${themeTrigger ? css.genresDarkTheme : css.genresLightTheme}`}>
            <p className={`${themeTrigger? css.genresDarkTheme : css.genresLightTheme}`} onClick={()=>genreSetter(null, 'All Genres')}>All genres</p>
            {genres.map(value => <Genre key={value.id} genre={value}/>)}
        </div>
    );
};

export { Genres };