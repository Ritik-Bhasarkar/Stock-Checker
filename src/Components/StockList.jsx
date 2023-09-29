import {useState , useEffect} from 'react';
import finnHub from '../APIs/finnHub';
import {BsFillCaretUpFill} from 'react-icons/bs';
import {BsFillCaretDownFill} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../Context/WatchListContext';

const StockList = () => {

  const {watchList} = useGlobalContext();
  const navigate = useNavigate();

  const [stock,setStock] = useState([]);
  
    const changeColor=(change)=>{
    return change < 0 ?'text-red-400':'text-green-600'
    }

    const changeSign=(change)=>{
    return change < 0 ? <BsFillCaretDownFill/>: <BsFillCaretUpFill/>
    }  

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
   },[watchList])


   const handleStockSelect=(symbol)=>{
    navigate(`detail/${symbol}`)
   }


    return (
    <div className='reative overflow-x-auto flex items-center justify-center'>
     <table className="w-4/5 text-sm text-left text-black bg-gray-50">
        <thead className='text-xs text-black uppercase'>
          <tr>
            <th scope='col' className='px-6 py-3'>Name</th>
            <th scope='col' className='px-6 py-3 }'>Last</th>
            <th scope='col' className='px-6 py-3'>Chg</th>
            <th scope='col' className='px-6 py-3'>Chg%</th>
            <th scope='col' className='px-6 py-3'>High</th>
            <th scope='col' className='px-6 py-3'>Low</th>
            <th scope='col' className='px-6 py-3'>Open</th>
            <th scope='col' className='px-6 py-3'>Pclose</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((stockData)=>{
            const {symbol,data} =stockData;
            return (
              <tr key={symbol} className='bg-white border-b'>
                <th onClick={()=>handleStockSelect(symbol)} className='px-6 py-4 font-medium whitespace-nowrap cursor-pointer'>{symbol}</th>
                <td className='px-6 py-4'>{data.c}</td>
                <td className={`px-6 py-4 ${changeColor(data.d)}`}>
                  <span className='flex items-center '>
                    {changeSign(data.d)}
                  {data.d}
                    </span>
                  </td>
                <td className={`px-6 py-4 space-x-2 ${changeColor(data.dp)}`}>
                  <span className='flex items-center '>
                    {changeSign(data.dp)}{data.dp}
                    </span>
                    </td>
                <td className='px-6 py-4'>{data.h}</td>
                <td className='px-6 py-4'>{data.o}</td>
                <td className='px-6 py-4'>{data.l}</td>
                <td className='px-6 py-4'>{data.pc}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default StockList