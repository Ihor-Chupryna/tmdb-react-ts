import { MoviePagination, TopRatedMovies } from "../../components";

const TopRatedMoviesPage = () => {
    let totalPages = 461;

    return (
        <div>
            <TopRatedMovies/>
            <MoviePagination totalPages={totalPages}/>
        </div>
    );
};

export { TopRatedMoviesPage };