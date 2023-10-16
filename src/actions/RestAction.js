import axios from "axios";
import { DELETE_PRODUCT, FAILED, SORT_BY_PRICE, SORT_BY_RATING, SUCCESS } from "../constants/RestConstants";
import { ADD_PRODUCT } from '../constants/RestConstants';


 export const getProducts= () =>{ return async(dispatch)=>{
try{
    const {data}= await axios.get('https://fakestoreapi.com/products')
console.log(data);
//dispatch the output to reducer
dispatch({
    payload:data,
    type:SUCCESS
})
}
catch(error){
    dispatch({
        payload:error,
        type:FAILED
    })
}
}}

export const sortByPrice = () => {
    return { type: SORT_BY_PRICE };
  };
  
  export const sortByRating = () => {
    return { type: SORT_BY_RATING };
  };
  

// Action creator to add a product
export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const deleteProduct = (productId) => {
    return {
      type: DELETE_PRODUCT,
      payload: productId,
    };
  };
  
