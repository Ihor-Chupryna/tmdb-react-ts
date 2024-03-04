import { apiService } from "./apiService";
import { IResponse } from "../types";
import { IGenre } from "../interfaces";
import { urls } from "../constants";

const genreService = {
    getGenresList: (): IResponse<{genres:IGenre[]}> => apiService.get(urls.genres.list)
}
export { genreService }