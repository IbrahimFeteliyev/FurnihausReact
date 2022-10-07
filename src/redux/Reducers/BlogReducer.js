import { GET_BLOGS } from './../Constants/BlogConstants';

export const BlogReducers = (state = { blogs: [] }, action) => {
    switch (action.type) {
        case GET_BLOGS:
            return {
                ...state,
                blogs: action.payload
            }
        default:
            return state;
    }
}
    

