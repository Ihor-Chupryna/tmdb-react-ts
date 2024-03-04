import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { useAppContext } from "../../hooks";
import { IGenre } from "../../interfaces";
import css from './genreForMovieDetails.module.css';

interface IProps {
    genre: IGenre
}

const GenreForMovieDetails: FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    const navigate = useNavigate();
    const {genreSetter} = useAppContext();

    const navToMovies = () => {
        genreSetter(id.toString(), name)
        navigate('/movies')
    }

    return (
        <>
            <div className={css.genreStyle} onClick={navToMovies}>{name}</div>
        </>
    );
};

export { GenreForMovieDetails };