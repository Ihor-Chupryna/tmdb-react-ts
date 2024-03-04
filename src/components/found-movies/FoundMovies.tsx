import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { IMovie } from "../../interfaces";
import { Movie } from "../movie/Movie";
import css from './foundMovies.module.css';
import { movieService } from "../../services";

interface IProps {
    findMovie: string;
}

const FoundMovies: FC<IProps> = ({findMovie}) => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        movieService.find(findMovie).then(({data}) => {
            setMovies(data.results)
        })
    }, [findMovie]);

    return (
        <div>
            <div className={css.foundMoviesButton}>
                <button onClick={() => navigate(-1)}><ArrowBackIcon/></button>
            </div>

            <div className={css.foundMoviesMain}>{movies.map(value => <Movie key={value.id} movie={value}/>)}</div>
        </div>
    );
};

export { FoundMovies };