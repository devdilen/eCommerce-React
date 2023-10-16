import { DELETE_PRODUCT, FAILED, SORT_BY_PRICE, SORT_BY_RATING, SUCCESS } from "../constants/RestConstants"
import { ADD_PRODUCT } from '../constants/RestConstants';

const initialState = {
    restList: [],
    sortOrder: 'price',
     // Default sorting by price
  };
// Create reducer function
export const restReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        restList: action.payload
      }
    case FAILED:
      return {
        restList: action.payload
      }
    case SORT_BY_PRICE:
     
   
      return {
        ...state,
        restList: [...state.restList].sort((a, b) => a.price - b.price)
      };
    case SORT_BY_RATING:
      // Sort products by rating (descending)
      ;
      return {
        ...state,
        restList: [...state.restList].sort((a, b) => b.rating.rate - a.rating.rate)
      };

      case ADD_PRODUCT:
        
        return {
          ...state,
          restList: [...state.restList, action.payload],
        };
        case DELETE_PRODUCT:
            return {
              ...state,
              restList: state.restList.filter((product) => product.id !== action.payload),
            };


    default:
      return state;
  }
}
