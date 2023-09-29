import { createContext, useContext } from "react"

export const watchListContext = createContext();

export const watchListProvider = ({children})=>{



return <watchListProvider>
        <watchListContext.Provider >

        </watchListContext.Provider>
</watchListProvider>

};

export const UseGlobalContext=()=>{
    return useContext(watchListContext);
}
