import {configureStore} from '@reduxjs/toolkit';
import useSlice from './slices/useSlice';

export const store = configureStore({
      devTools:true,
      reducer:{
           "users": useSlice
        
      }

})