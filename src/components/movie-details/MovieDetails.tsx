import { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Badge, Rating } from "@mui/material";

import { IMovieDetails } from "../../interfaces";
import { urls } from "../../constants";
import { GenresForMovieDetails } from "../genres-for-movie-details/GenresForMovieDetails";
import css from './movieDetails.module.css';
import { useAppContext } from "../../hooks";

interface IProps {
    movie: IMovieDetails
}

const MovieDetails: FC<IProps> = ({movie}) => {
    const {
        title, poster_path, vote_average, budget, genres, revenue,
        runtime, homepage, overview, status, release_date, tagline, backdrop_path
    } = movie;
    const navigate = useNavigate();
    const {themeTrigger} = useAppContext();

    return (
        <div
            className={`${css.movieDetailsMain} ${themeTrigger ? css.movieDetailsDarkTheme : css.movieDetailsLightTheme}`}>
            <div>
                <button onClick={() => navigate(-1)}><ArrowBackIcon/></button>
            </div>
            <h1>{title}</h1>

            <div className={css.infoAndPosterStyle}>
                <div>
                    <h2>{tagline}</h2>
                    <h3>{overview}</h3>
                    <GenresForMovieDetails genres={genres}/>
                    <div className={css.otherInfo}>
                        <img src={urls.image('500', backdrop_path)} alt={title}/>

                        <div>
                            <div className={css.starRating}><Rating name="read-only" value={vote_average} readOnly
                                                                    max={10} precision={0.25} size={"medium"}/></div>
                            <p>Budget: {budget}</p>
                            <p>Revenue: {revenue}</p>
                            <p>Duration: {runtime} min.</p>
                            <p>Release: {release_date}</p>
                            <p>Status: {status}</p>
                        </div>
                    </div>
                </div>

                <Badge badgeContent={`rating ${vote_average}`} color="success" anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}>
                    <img src={urls.image('400', poster_path)} alt={title}/>
                </Badge>
            </div>

            <p>Website: <NavLink to={homepage}>{homepage}</NavLink></p>
        </div>
    );
};

export { MovieDetails };