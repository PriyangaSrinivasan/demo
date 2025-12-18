import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";
import blogReducer from "./Slices/BlogSlice";


const store = configureStore({
    reducer:{
        auth:authReducer,
        blogs:blogReducer,
       
    }

})
    
export default store;