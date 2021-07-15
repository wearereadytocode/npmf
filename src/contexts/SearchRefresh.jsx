import React, { createContext, useState } from "react";
export const SearchReloadContext = createContext()

export const SearchReloadContextProvider = (props)=>{
    const [refreshsearch, setrefreshsearch] = useState(1)
    return (
        <SearchReloadContext.Provider value={[refreshsearch, setrefreshsearch]}>
            {props.children}
        </SearchReloadContext.Provider>
    )
} 