import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { ProductReducers } from "../redux/Reducers/ProductReducer"
import { BlogReducers } from "./Reducers/BlogReducer";
import { CartReducer } from "./Reducers/CartReducer";
import { addCheckOutReducer } from "./Reducers/CheckOutReducer";
import { FavoriesReducer } from "./Reducers/FavoriesReducer";
import { UserReducer } from "./Reducers/UserReducer";


 

const {default: thunk} = require("redux-thunk")


const reducer = combineReducers({
    products: ProductReducers,
    blogs: BlogReducers,
    user: UserReducer,
    cart: CartReducer,
    checkout: addCheckOutReducer,
    favories: FavoriesReducer,

})  

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo")) : []

const cartItemFromLocalStorage = localStorage.getItem("cartItems")
 ? JSON.parse(localStorage.getItem("cartItems")):[]

const favoriesItemFromLocalStorage = localStorage.getItem("favoriesItems")
 ? JSON.parse(localStorage.getItem("favoriesItems")):[]


const initialState ={
    products : [],
    blogs : [],
    user: {userInfo: userInfoFromLocalStorage},
    cart:{cartItems:cartItemFromLocalStorage},
    checkout: {checkOut: []},
    favories:{favoriesItems: favoriesItemFromLocalStorage}
}

  
const middleware = [thunk]


const store = createStore(reducer, initialState, applyMiddleware(...middleware))



export default store;