import { useAppLocation } from "../../hooks/useAppLocation";
import { FoundMovies } from "../../components";

const FoundMoviePage = () => {
    const {state} = useAppLocation<{ findMovies: string }>();

    return (
        <div>
            <FoundMovies findMovie={state.findMovies}/>
        </div>
    );
};

export { FoundMoviePage };