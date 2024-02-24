import { useEffect, useState } from "react";

import { IMovie } from "../../interfaces";
import { movieService } from "../../services/movieService";
import { Movie } from "../movie/Movie";

const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        movieService.getMovies().then(({data}) => setMovies(data.results))

    }, []);

    return (
        <div>
            {movies.map(value => <Movie key={value.id} movie={value}/>)}
        </div>
    );
};

export { Movies };