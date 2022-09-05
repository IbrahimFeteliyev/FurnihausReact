import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";

 

const {default: thunk} = require("redux-thunk")


const reducer = combineReducers({
})  


const initialState ={

}

  
const middleware = [thunk]


const store = createStore(
    reducer,
    initialState,   


    applyMiddleware(...middleware)
)


export default store;