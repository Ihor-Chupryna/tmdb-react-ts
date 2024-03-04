import { createBrowserRouter, Navigate } from "react-router-dom";

import { MainLayout } from "./layouts";
import {
    ErrorPage,
    FoundMoviePage,
    MovieDetailsPage,
    MoviesPage,
    TopRatedMoviesPage
} from "./pages";
import { movieService } from "./services";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>
            },
            {
                path: '/movies/:movieId', element: <MovieDetailsPage/>,
                loader: ({params: {movieId}}) => movieService.getMovieById(movieId)
            },
            {
                path: 'found-movies', element: <FoundMoviePage/>
            },
            {
                path: '/found-movies/:movieId', element: <MovieDetailsPage/>,
                loader: ({params: {movieId}}) => movieService.getMovieById(movieId)
            },
            {
                path: 'top-rated-movies', element: <TopRatedMoviesPage/>
            },
            {
                path: '/top-rated-movies/:movieId', element: <MovieDetailsPage/>,
                loader: ({params: {movieId}}) => movieService.getMovieById(movieId)
            }
        ]
    }
]);

export { router }

