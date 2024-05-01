import React from 'react'
import { useContext } from 'react'
import { countData , dispatchcountData } from './Reducer'

const CountReducer = () => {

    const getCount = useContext(countData)
    const getSecondData = useContext(dispatchcountData)
  
    return (

        <div>
           
           <h1>{getCount}</h1>
           <button onClick={event => getSecondData("Increment")}>Increase</button>
           <button onClick={event => getSecondData("Decrement")}>Decrease</button>
          
        </div>
        
      )
  
}

export default CountReducer