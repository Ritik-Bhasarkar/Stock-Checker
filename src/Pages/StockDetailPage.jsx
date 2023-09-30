//use epochConverter to read unix 

import {useEffect, useState} from 'react'
import finnHub from '../APIs/finnHub'
import StockChart from '../Components/StockChart'
import StockData from '../Components/StockData'
import { useParams } from 'react-router-dom'

const formatData=(data)=>{
  return data.t.map((el,index)=>{
    return {
      x:el * 1000,   //in secs
      y:Math.floor(data.c[index])
    }
  })
}

const StockDetailPage = () => {
  const {symbol} = useParams()
  const [chartData , setChartData] = useState();

   useEffect(()=>{
    const fetchData = async()=>{
      const date = new Date()
      const currentTime= Math.floor(date.getTime()/1000)   //in secs the api consider secs
      let oneDay;
      if(date.getDay() === 6){
        oneDay = currentTime - 2 * 24 * 60 * 60;       //if saturday provide 2 days worth of data
      }else if(date.getDay() === 0){
        oneDay = currentTime - 3 * 24 * 60 * 60;       //if sunday: three days worth of data
      }else{
        oneDay = currentTime - 24 * 60 * 60;          //only one day
      }
      const oneWeek = currentTime - 7*24*60*60;
      const oneYear= currentTime - 365*24*60*60;
      try{
        const responses = await Promise.all([
            await finnHub.get('/stock/candle', {
          params:{
            symbol,
            from:oneDay,
            to:currentTime,
            resolution:30
          }
        }),
        finnHub.get('/stock/candle', {
          params:{
            symbol,
            from:oneWeek,
            to:currentTime,
            resolution:60
          }
        }),
        finnHub.get('/stock/candle', {
          params:{
            symbol,
            from:oneYear,
            to:currentTime,
            resolution: 'W'
          }
        })])
       // console.log(responses);

      const formattedData = {
          day:  formatData(responses[0].data),
          week: formatData(responses[1].data),
          year: formatData(responses[2].data),
      }
      setChartData(formattedData)
    }catch(err){
      console.log(err)
    }
  }
    fetchData();
   },[symbol])


  return (
    <div>
      {chartData && (
        <div>
          <StockChart chartData={chartData} symbol={symbol}></StockChart>
           <StockData symbol={symbol} />
        </div>
      )}
    </div>
  )
}

export default StockDetailPage