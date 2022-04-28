import React, { createContext, useState } from "react";

// const initialState = {
//     inputSearch: ''
// }

export const Context = createContext({});

export const ContextProvider = ({children}) => {
    const [inputSearch, setInputSearch] = useState('')
    return (
        <Context.Provider value={{inputSearch, setInputSearch}}>
            {children}
        </Context.Provider>
    )
}