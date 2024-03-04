import { NavLink } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SvgIcon } from "@mui/material";
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

import { FindMovie } from "../find-movie/FindMovie";
import { Switcher } from "../swicther/Switcher";
import { useAppContext } from "../../hooks";
import css from './header.module.css';

const Header = () => {
    const {themeTrigger, genreName} = useAppContext();

    return (
        <div className={`${css.headerMainStyle} ${themeTrigger ? css.headerDarkTheme : css.headerLightTheme}`}>
            <div className={css.headerTitle}>
                <h1>Movies</h1>
                <SvgIcon><LocalMoviesIcon/></SvgIcon>
            </div>

            <div className={css.headerLinks}>
                <NavLink to={'/movies'}>All Movies</NavLink>
                <NavLink to={'/top-rated-movies'}>Top Rating</NavLink>
            </div>

            <h1 className={css.activeGenreTitle}>{genreName}</h1>
            <FindMovie/>

            <div className={css.iconAndThemeSwitcher}><SvgIcon fontSize={"large"} color={"success"}><AccountCircleIcon/></SvgIcon>
                <Switcher/></div>
        </div>
    );
};

export { Header };