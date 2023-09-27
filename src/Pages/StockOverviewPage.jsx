import React from 'react'
import AutoComplete from '../Components/AutoComplete'
import StockList from '../Components/StockList'

const StockOverviewPage = () => {
  return (
    <div>
        <h1>Stock overview Page</h1>
        <AutoComplete/>
        <StockList/>
    </div>
  )
}

export default StockOverviewPage