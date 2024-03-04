import React, { createRef, FormEvent, RefObject } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

import css from './findMovie.module.css';

const FindMovie = () => {
    const movieName: RefObject<HTMLInputElement> = createRef();
    const navigate = useNavigate();

    const search = (e: FormEvent<HTMLFormElement>) => {
        const movie = movieName.current.value
        if (movie !== '') {
            navigate('/found-movies', {state: {findMovies: movie}})
        }
        e.preventDefault()
    };

    return (
        <form className={css.findFormMain} onSubmit={search}>
            <input type="text" placeholder={'movie name'} name={'movieName'} ref={movieName}/>
            <button><SearchIcon fontSize={"small"}><SearchIcon/></SearchIcon></button>
        </form>
    );
};

export { FindMovie };