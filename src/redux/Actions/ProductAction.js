import { BASE_URL } from '../../api/Config';
import { GET_PRODUCTS } from './../Constants/ProductConstants';

export const getProductsAction  = () => async (dispatch,getState) =>{
    let products = await (await fetch(`${BASE_URL}Product/productlist`)).json()
    dispatch({
        type: GET_PRODUCTS,
        payload: products.message
    })

}
