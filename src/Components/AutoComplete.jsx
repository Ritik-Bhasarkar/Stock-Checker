import {useState,useEffect} from 'react';
import finnHub from '../APIs/finnHub';
import { useGlobalContext } from '../Context/WatchListContext';

const AutoComplete = () => {

  const {addToList} = useGlobalContext();

  const [search,setSearch]=useState('');
  const [searchResult,SetSearchResult]=useState([]);

const showDropdown=()=>{
  return search ?'show':'hidden';
}
  useEffect(() => {
    let isMounted =true
    const fetchData = async()=>{
      try{
        
        const response = await finnHub.get('/search',{
          params:{
            q: search
          }
        });
        if(isMounted){
          SetSearchResult(response.data.result);  
        }
      }catch(err){

      }
    }
    if(search.length > 0){
      fetchData()
    }else{
      SetSearchResult([]);
    } 
   
    return()=>(isMounted=false)
  },[search])

  return (
    <div>
    <div className='relative'>
      <input className=" w-96 h-12 min-w-0 rounded border border-solid px-3 py-[0.25rem]"  id='search' type='text' autoComplete='off' placeholder='search' value={search} onChange={(e)=>setSearch(e.target.value)}>
      </input>
      <div className='w-96 my-2 absolute bg-white' id='dropdown'>
        <ul className= {`h-64 overflow-y-scroll overflow-x-hidden cursor-pointer ${showDropdown(search)}`}>
        {searchResult.map((stockSearch)=>{
          return(
          <li onClick={()=>{
            addToList(stockSearch.symbol)
            setSearch('');
          }}
          key={stockSearch.symbol} className='border bg-white px-2 py-2 hover:bg-slate-100'>{stockSearch.description}({stockSearch.symbol})</li>
          )
        })}
        </ul>
      </div>
    </div>
    </div>
    
  )
}

export default AutoComplete