import { ISetState } from "../types";

export interface IContextData {
    trigger: boolean,
    setTrigger: ISetState<boolean>
}