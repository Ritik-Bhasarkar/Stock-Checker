import React from 'react'
import AutoComplete from '../Components/AutoComplete'
import StockList from '../Components/StockList'

const StockOverviewPage = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-28'>
        <AutoComplete/>
        <StockList/>
    </div>
  )
}

export default StockOverviewPage