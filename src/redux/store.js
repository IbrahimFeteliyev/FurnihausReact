import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { productReducer } from "../redux/Reducers/ProductReducer"
import { CartReducer } from "./Reducers/CartReducer";
import { addCheckOutReducer } from "./Reducers/CheckOutReducer";
import { FavoriesReducer } from "./Reducers/FavoriesReducer";
import { UserReducer } from "./Reducers/UserReducer";


 

const {default: thunk} = require("redux-thunk")


const reducer = combineReducers({
    products: productReducer,
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
    user: {userInfo: userInfoFromLocalStorage},
    cart:{cartItems:cartItemFromLocalStorage},
    checkout: {checkOut: []},
    favories:{favoriesItems: favoriesItemFromLocalStorage}
}

  
const middleware = [thunk]


const store = createStore(
    reducer,
    initialState,   
    applyMiddleware(...middleware)
)


export default store;