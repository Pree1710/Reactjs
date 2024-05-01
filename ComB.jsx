import React from 'react'
import ComC from './ComC'
import { useContext } from 'react'
import { secondData } from '../../App'

const ComB = () => {
    const displayData = useContext(secondData)
  return (
    <div>
        ComB {displayData}
        <ComC/>
    </div>
  )
}

export default ComB