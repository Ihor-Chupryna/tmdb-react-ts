import { useEffect, useState } from "react";

import { IMovie } from "../../interfaces";
import { Movie } from "../movie/Movie";
import { useAppContext } from "../../hooks";
import css from './movies.module.css';
import { movieService } from "../../services";

const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const {themeTrigger, genreId, currentPage} = useAppContext();

    useEffect(() => {
        movieService.getMovies(genreId, currentPage).then(({data}) => {
            return setMovies(data.results)
        });

    }, [currentPage, genreId]);
    return (
        <div className={`${css.moviesMainStyle} ${themeTrigger ? css.moviesDarkTheme : css.moviesLightTheme}`}>
            {movies.map(value => <Movie key={value.id} movie={value}/>)}
        </div>
    );
};

export { Movies };