import { FC } from "react";
import { IMovie } from "../../interfaces";

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {title} = movie
    return (
        <div><div>{title}</div>
        </div>
    );
};

export { Movie };