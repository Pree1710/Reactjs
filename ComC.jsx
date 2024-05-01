import React from 'react'
import { useContext } from 'react'
import { Data } from '../../App'
import Reducer from './Reducer'

const ComC = () => {
    const displayData = useContext(Data)
  return (
    
    <div>
        ComC {displayData}
        <Reducer/>
    </div>
  )
}

export default ComC