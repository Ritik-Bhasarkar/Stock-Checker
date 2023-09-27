import {useState , useEffect} from 'react';
import finnHub from '../APIs/finnHub';
import axios from 'axios';

const StockList = () => {

    const [stock,setStock] = useState([]);
    const [watchList, setWatchList] = useState(['GOOGLE','MSFT','AMZN'])
  

  useEffect(()=>{
    let isMounted =true
    const fetchData = async()=>{
      try{
        const responses = await Promise.all(watchList.map((stock)=>{
          return finnHub.get('/quote',{
            params:{
              symbol:stock
            }
          })
        }))
        console.log(responses);
       const data = responses.map((response) =>{
        return{
          data: response.data,
          symbol: response.config.params.symbol
        }
       })
       console.log(data);
        if(isMounted){
          setStock(data); 
        }
      }catch(err){
          console.log(err)
      }
  }
    fetchData();
    return()=>(isMounted=false)
   },[])


    return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last</th>
            <th>Chg</th>
            <th>Chg%</th>
            <th>Low</th>
            <th>Open</th>
            <th>Pclose</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((stockData)=>{
            const {symbol,data} =stockData;
            return (
              <tr key={symbol}>
                <th>{symbol}</th>
                <th>{data.c}</th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default StockList