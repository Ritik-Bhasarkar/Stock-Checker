import {useState,useEffect} from 'react';

const StockList = () => {
    const [watchList, setWatchList] = useState(['GOOGLE','MSFT','AMZN'])
  
  useEffect(()=>{
    try{
    // const response = axios.get()
    }catch{

    }
   })


    return (
    <div>StockList</div>
  )
}

export default StockList