import { BASE_URL } from '../../api/Config';
import { GET_BLOGS } from '../Constants/BlogConstants';

export const getBlogsAction  = () => async (dispatch,getState) =>{
    let blogs = await (await fetch(`${BASE_URL}Blog/getall`)).json()
    dispatch({
        type: GET_BLOGS,
        payload: blogs.message
    })

}