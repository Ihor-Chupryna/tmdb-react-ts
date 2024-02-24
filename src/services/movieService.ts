import { IResponse } from "../types";
// import { IMovie } from "../interfaces";
import { apiService } from "./apiService";
import { urls } from "../constants";
import { IMovie } from "../interfaces";

const movieService = {
    getMovies: ():IResponse<{results:IMovie[]}> => apiService.get(urls.movie.all)
}

export { movieService }