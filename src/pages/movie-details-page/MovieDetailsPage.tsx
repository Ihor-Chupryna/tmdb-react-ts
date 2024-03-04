import { useLoaderData } from "react-router-dom";

import { MovieDetails } from "../../components";
import { IMovieDetails } from "../../interfaces";

const MovieDetailsPage = () => {
    const {data} = useLoaderData() as { data: IMovieDetails };

    return (
        <div>
            <MovieDetails movie={data}/>
        </div>
    );
};

export { MovieDetailsPage };