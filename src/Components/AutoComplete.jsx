import React from 'react'

const AutoComplete = () => {
  return (
    <div className='flex justify-center'>
      <input className=" w-2/5 h-10 min-w-0 rounded border border-solid px-3 py-[0.25rem]"  id='search' type='search' autoComplete='off' placeholder='search'>
      </input>
      <ul>
        <li>stock1</li>
        <li>stock2</li>
        <li>stock3</li>
      </ul>
    </div>
    
  )
}

export default AutoComplete