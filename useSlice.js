import {createSlice} from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name:"users",
    initialState :[],
    reducers:{
          newUser(state,action){
            if(action.payload !== ''){
              state.push(action.payload)
              }
            else{
              state.push("none")
            }  
          }
    }
})

export const {newUser} = UserSlice.actions

export default UserSlice.reducer