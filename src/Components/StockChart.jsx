import React, { useState } from 'react';
import Chart from 'react-apexcharts'


const StockChart = ({chartData,symbol}) => {

    const [dateFormat,setDateFormat]=useState('24h')
    const {day,week,year}=chartData;

     const determineTimeFormat=()=>{
        switch(dateFormat){
            case '24h':
             return day;
            case '7d':
             return week;
            case '1y':
             return year;    
            default:
             return day;
             }
        }

    
        const timeFormat = determineTimeFormat();
        const firstIndex = timeFormat[0].y;
        const lastIndex = timeFormat[timeFormat.length - 1].y;
        const color = lastIndex - firstIndex > 0 ? '#26c281' : '#ed3419';
       
    const options={
        colors:[color],
        title:{
            text:symbol,
            align:'center',
            style:{
                fontSize:'24px'
            }
        },
        chart:{
            id:'stock data',
            animation:{
                speed:1300
            }
        },
        xaxis:{
            type:'datetime',
            labels:{
                datetimeUTC:false
            }
        },
        tooltip:{
            x:{
                format:'MMM dd HH'
            }
        }
    }

    const series=[{
        name:symbol,
        data: determineTimeFormat()
    }]

  return (
    <div className='p-3 shadow-md rounded'>
        <div className='chart-bar'>
        <Chart options={options} series={series} type='area'/>
        </div>
        <div className='stock-time ml-14'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-700 rounded"
            onClick={()=>setDateFormat('24h')}>24h</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-700 rounded" onClick={()=>setDateFormat('7d')}>7d</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-700 rounded"
            onClick={()=>setDateFormat('1y')}>1y</button>
        </div>
    </div>
  )
}

export default StockChart