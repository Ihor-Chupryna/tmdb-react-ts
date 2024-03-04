
import { useEffect, useState } from "react";

import { IMovie } from "../../interfaces";
import { useAppContext } from "../../hooks";
import { Movie } from "../movie/Movie";
import css from './topRatedMovies.module.css';
import { movieService } from "../../services";

const TopRatedMovies = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const {currentPage} = useAppContext();

    useEffect(() => {
        movieService.topRated(currentPage).then(({data}) => setMovies(data.results));
    }, [currentPage]);

    return (
        <div className={css.topRatedMain}>
            {movies.map(value => <Movie key={value.id} movie={value}/>)}
        </div>
    );
};

export { TopRatedMovies };