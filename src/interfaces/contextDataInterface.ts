import { ISetState } from "../types";

export interface IContextData {
    themeTrigger: boolean;
    setThemeTrigger: ISetState<boolean>;
    currentPage: string;
    setCurrentPage: ISetState<string>;
    genreId: string;
    genreName: string;
    genreSetter: (id: string, name: string) => void
}