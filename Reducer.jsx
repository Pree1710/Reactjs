import React from 'react'
import { useReducer } from 'react'

import CountReducer from './CountReducer'

export const countData = React.createContext()
export const dispatchcountData = React.createContext()



const counterReducer = (currentState , action) => {

    switch(action){ 

        case "Increment": 
            return currentState + 1 
        case  "Decrement":
            return currentState - 1 
        default:
            return currentState

    }
 
}

const Reducer = () => {

    const initialState = 0

    const [count , dispatchCount] = useReducer( counterReducer , initialState )
 
    return(
        <div>
            {<countData.Provider value = {count}>

                <dispatchcountData.Provider value = {dispatchCount}>
                  

                   <CountReducer/>

                 
                </dispatchcountData.Provider>

            </countData.Provider>}
        </div>
    )
    
    }


export default Reducer