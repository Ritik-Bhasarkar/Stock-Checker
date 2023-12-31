import { useState, useEffect } from "react"
import finnHub from "../APIs/finnHub"

const StockData = ({symbol}) => {
    const [stockData, setStockData] = useState()

    useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/stock/profile2", {
          params: {
            symbol:symbol,
          }
        })
        console.log(response)
        if (isMounted) {
        setStockData(response.data)
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
    return () => (isMounted = false);
  }, [symbol])



  return (
    <div>{stockData &&(
        <div className=" stock-data mt-10 p-5 flex justify-between flex-wrap">
        <div>
          <div>
            <span>name: </span>
            {stockData.name}
          </div>
          <div>
            <span>country: </span>
            {stockData.country}
          </div>
          <div>
            <span>ticker: </span>
            {stockData.ticker}
          </div>
        </div>
        <div >
          <div>
            <span>Exchange: </span>
            {stockData.exchange}
          </div>
          <div>
            <span>Industry: </span>
            {stockData.finnhubIndustry}
          </div>
          <div>
            <span>IPO: </span>
            {stockData.ipo}
          </div>
        </div>
        <div>
          <div>
            <span>MarketCap: </span>
            {stockData.marketCapitalization}
          </div>
          <div>
            <span>Shares Outstanding: </span>
            {stockData.shareOutstanding}
          </div>
          <div>
            <span>url: </span>
            <a href={stockData.weburl}>{stockData.weburl}</a>
          </div>
        </div>
      </div>

    )
}
</div>        
  ) 
}

export default StockData