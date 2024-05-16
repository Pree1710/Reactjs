import React from 'react'

import {Routes , Route} from 'react-router-dom'
import ArrayComponent from './components/ArrayComponent'
import ObjectComponent from './components/ObjectComponent'
import CounterComponent from './components/CounterComponent'
import NavigateComponent from './components/UseNavigate'
import Navbar from './components/Navbar'
import CustomerAdd from './components/customers/CustomerAdd'
import CustomerList from './components/customers/CustomerList'
import CustomerUpdate from './components/customers/CustomerUpdate'
import InputFields from './components/InputFields'
import DynamicInputFields from './components/DynamicInputFields'
import ComA from './components/context/ComA'
import Reducer from './components/context/Reducer'
import DynamicfieldReducer from './components/DynamicfieldReducer'
import User from './react-redux/User'
import {Provider} from 'react-redux'
import { store } from './react-redux/store'
import UserList from './components/UserList'
import Login from './components/authentication/Login'
export const Data = React.createContext()
export const secondData = React.createContext()



const App = () => {
 

  return (

    <Provider store = {store}>
    <>
      <h1>React</h1>
      <Navbar />
      <Routes>
        <Route path = '/first/' element ={<NavigateComponent />}/>
        <Route path = '/second/' element ={<CounterComponent />}/>
        <Route path = '/customer/add/' element ={<CustomerAdd />}/>
        <Route path = '/customer/list/' element ={<CustomerList />}/>
        <Route path = '/customer/edit/:id/' element ={<CustomerUpdate />}/>
        <Route path =  '/input/' element={<InputFields/>}/>
        <Route path='/input/choice/' element={<DynamicInputFields/>}/>
        <Route path='/user/' element={<User/>}/>
        <Route path='/userlist/' element={<UserList/>}/>
        <Route path='/useredit/' element={<UserList/>}/>
        <Route path='/context/' element={
        <Data.Provider value={"Hi"}>
          <secondData.Provider value={"hello"}>

            <ComA/>

          </secondData.Provider>
        </Data.Provider>}/>
        <Route path='/reducer/' element={<Reducer/>}/>
        <Route path='/reducerfields/' element={<DynamicfieldReducer/>}/>
        <Route path='/userlogin/' element={<Login/>}/>
      </Routes>
    </>
    </Provider>

  )
}

export default App
