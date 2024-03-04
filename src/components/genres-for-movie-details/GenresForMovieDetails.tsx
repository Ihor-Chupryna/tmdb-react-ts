import { FC } from "react";

import { IGenre } from "../../interfaces";
import { GenreForMovieDetails } from "../genre-for-movie-details/GenreForMovieDetails";
import css from './genresForMovieDetails.module.css';

interface IProps {
    genres: IGenre[]
}

const GenresForMovieDetails: FC<IProps> = ({genres}) => {

    return (
        <div className={css.genresForMDMain}>
            {genres.map(value => <GenreForMovieDetails key={value.id} genre={value}/>)}
        </div>
    );
};

export { GenresForMovieDetails };