export const SUCCESS="SUCCESS"
export const FAILED="FAILED"
export const SORT_BY_PRICE = 'SORT_BY_PRICE';
export const SORT_BY_RATING = 'SORT_BY_RATING';
export const ADD_PRODUCT='ADD_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT';


export const sortByPrice = () => ({
    type: SORT_BY_PRICE,
  });
  
  export const sortByRating = () => ({
    type: SORT_BY_RATING,
  });