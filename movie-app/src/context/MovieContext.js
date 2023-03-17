import { createContext } from "react";

const MovieContext = createContext()
const values = {}

export const MovieProvider = ({children}) => {
    <MovieContext.Provider 
    value = {values}>
    {children}
    </MovieContext.Provider>
} 



export default MovieContext