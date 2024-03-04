import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";

import { IMovie } from "../../interfaces";
import { urls } from "../../constants";
import css from './movie.module.css';

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, title, poster_path, vote_average} = movie;
    let navigate = useNavigate();

    return (
        <div onClick={() => navigate(id.toString())} className={css.movieStyle}>
            <h3>{title}</h3>
            <img src={urls.image('300', poster_path)} alt={title}/>
            <div className={css.starRating}><Rating name="read-only" value={vote_average} readOnly max={10}
                                                    precision={0.25} size={"small"}/></div>
        </div>
    );
};

export { Movie };