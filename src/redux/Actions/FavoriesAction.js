import { BASE_URL } from "../../api/Config"
import { ADD_TO_FAVORIES, GET_FAVORIES_ITEMS, REMOVE_FAVORIES_ITEMS } from "../Constants/FavoriesConstants"


export const addToFavoriesAction = (id,quantity=1) => async (dispach, getState) => {
    const data = await (await fetch(`${BASE_URL}Product/getbyid/${id}`)).json()
    const product = {
        id: data.message.id,
        name: data.message.name,
        price: data.message.price,
        img: data.message.coverPhoto,
        quantity: quantity
      }
    dispach({
        type: ADD_TO_FAVORIES,
        payload: product
    })
    localStorage.setItem("favoriesItems",JSON.stringify(getState().favories.favoriesItems))

}

export const removeFromFavories = (id) => (dispach,getState) => {
    dispach({
        type: REMOVE_FAVORIES_ITEMS,
        payload: id
    })
    localStorage.setItem("favoriesItems",JSON.stringify(getState().favories.favoriesItems))
}


export const getFavoriesItems = () => async (dispach, getState) => {
    var data = JSON.parse(localStorage.getItem("favoriesItems"))
    dispach({
        type: GET_FAVORIES_ITEMS,
        payload: data
    })
}

// export const removeAllCartAction = () => async (dispach,getState) => {
//     localStorage.removeItem("cartItems")
//     dispach({
//         type:REMOVE_ALL_CART,
        
//     })
// }
