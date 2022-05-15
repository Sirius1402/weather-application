import React, {useState, createContext} from "react";

export const LoaderVisible = createContext()

const LoaderProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)

    return(
        <LoaderVisible.Provider value={{isLoading, setIsLoading}}>
            {children}
        </LoaderVisible.Provider>
    )
}

export default LoaderProvider