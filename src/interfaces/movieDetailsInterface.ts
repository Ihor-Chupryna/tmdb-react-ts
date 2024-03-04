import { IMovie } from "./movieInterface";
import { IGenre } from "./genreInterface";

export interface IMovieDetails extends IMovie {
    budget: number;
    genres: IGenre[];
    homepage: string;
    overview: string;
    release_date: string;
    runtime: number;
    tagline: string;
    status: string;
    backdrop_path: string;
    revenue: string;

}