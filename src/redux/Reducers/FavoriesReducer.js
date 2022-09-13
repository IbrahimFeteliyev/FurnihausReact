import { ADD_TO_FAVORIES, GET_FAVORIES_ITEMS, REMOVE_FAVORIES_ITEMS } from "../Constants/FavoriesConstants";

export const FavoriesReducer = (state = { favoriesItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_FAVORIES:
            let item = action.payload;
            let myCart = state.favoriesItems.find(c => c.id === item.id);
            if (myCart) {
                return {
                    ...state,
                    favoriesItems: state.favoriesItems.map((a) => a.id === myCart.id ? item : a)
                }
            } else {
                return {
                    ...state,
                    favoriesItems: [...state.favoriesItems, item]
                }
            }
        case REMOVE_FAVORIES_ITEMS:
            
                return {
                    ...state,
                    favoriesItems: state.favoriesItems.filter((x) => x.product !== action.payload)
                }
           
        case GET_FAVORIES_ITEMS:
            return {
                ...state,
                favories: action.payload
            }
            
        
        default:
            return state
    }
}