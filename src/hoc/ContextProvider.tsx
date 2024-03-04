import React, { createContext, FC, PropsWithChildren, useState, } from "react";

import { IContextData } from "../interfaces";

const Context = createContext<IContextData>(null);

interface IProps extends PropsWithChildren {

}

const ContextProvider: FC<IProps> = ({children}) => {
    const [themeTrigger, setThemeTrigger] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<string>('1');
    const [genreId, setGenreId] = useState<string>(null);
    const [genreName, setGenreName] = useState<string>('All Genres');

    const genreSetter = (id: string, name: string): void => {
        setGenreId(id);
        setGenreName(name)
    }

    return (
        <Context.Provider
            value={{themeTrigger, setThemeTrigger, currentPage, setCurrentPage, genreId, genreName, genreSetter}}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider, Context };