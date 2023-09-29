import { createContext, useContext,useState } from "react"

const WatchListContext = createContext();

const WatchListProvider = ({children})=>{

const [watchList, setWatchList] = useState(['GOOGL','MSFT','AAPL'])


const addToList =(stock)=>{
    if(watchList.indexOf(stock) === -1){
        setWatchList([...watchList,stock]);
    }
}

const removeFromList=(stock)=>{
    setWatchList(watchList.filter((el)=>{
        return el !== stock;
    }))
}

const obj={
    watchList,
    addToList,
    removeFromList,
}

return <WatchListContext.Provider  value={obj}>
            {children}
        </WatchListContext.Provider>

};

export const useGlobalContext=()=>{
    return useContext(WatchListContext);
}


export {WatchListContext,WatchListProvider}
