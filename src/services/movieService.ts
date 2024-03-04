import { IResponse } from "../types";
import { apiService } from "./apiService";
import { urls } from "../constants";
import { IMovie } from "../interfaces";

const movieService = {
    getMovies: (genreId:string, page: string='1'): IResponse<{results: IMovie[]}> => apiService.get(urls.movies.all,
        {params: {with_genres:genreId, page}}),
    getMovieById: (id: string): IResponse<IMovie> => apiService.get(urls.movies.byId(id)),
    find:(text:string): IResponse<{results:IMovie[]}> => apiService.get(urls.movies.search, {params:{query:text}}),
    topRated:(page:string='1'): IResponse<{results:IMovie[]}> => apiService.get(urls.movies.topRated, {params: {page}}),
}

export { movieService }