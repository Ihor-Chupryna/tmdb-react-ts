import React, { createContext, FC, PropsWithChildren, useState, } from "react";

import { IContextData } from "../interfaces";

const Context = createContext<IContextData>(null);

interface IProps extends PropsWithChildren {

}

const ContextProvider: FC<IProps> = ({children}) => {
    const [trigger, setTrigger] = useState<boolean>(true);

    return (
        <Context.Provider value={{trigger, setTrigger}}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider, Context };