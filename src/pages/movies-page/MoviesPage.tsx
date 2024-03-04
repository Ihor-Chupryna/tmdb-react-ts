import { MoviePagination, Genres, Movies } from "../../components";
import css from './moviesPage.module.css';

const MoviesPage = () => {
    let totalPages = 499;

    return (
        <div>
            <div className={css.moviePageMain}>
                <Genres/>
                <Movies/>
            </div>
            <MoviePagination totalPages={totalPages}/>
        </div>
    );
};

export { MoviesPage };