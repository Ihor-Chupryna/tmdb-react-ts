import { FC } from "react";

import { IGenre } from "../../interfaces";
import { useAppContext } from "../../hooks";

interface IProps {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    const {genreSetter} = useAppContext();

    return (
        <p onClick={() => genreSetter(id.toString(), name)}>
            {name}
        </p>
    );
};

export { Genre };