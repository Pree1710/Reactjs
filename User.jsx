import React from 'react'
import { useState } from 'react'
import { newUser } from './slices/useSlice'
import {useDispatch} from 'react-redux'
import UserList from '../components/UserList'
import { useNavigate } from 'react-router-dom'

const User = () => {
    const navigate = useNavigate()

    const userDispatch = useDispatch()
    
    const [username,setUsername] = useState('')
    //const [list,setList] = useState([])
    
    const HandleSubmit = (event) => {
        event.preventDefault()
        userDispatch(newUser(username))
        setUsername('')
         
        // const userlist = [...list , username]
        // setList(userlist)
        // setUsername('')
        
    }

    const showlist =(event) =>{
      event.preventDefault()
      navigate('/userlist/')
    }
  return (
    <div>
        <input type='text' value = {username} onChange = {event => setUsername(event.target.value)}/>
        <input type ='submit' onClick = {event => HandleSubmit(event)}/>
        <button onClick={(event) => showlist(event)}>showlist</button>
        {/* <UserList list = {list} /> */}
        
    </div>
  )
}

export default User