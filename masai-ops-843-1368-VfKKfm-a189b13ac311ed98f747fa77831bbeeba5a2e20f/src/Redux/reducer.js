import * as types from "./actionTypes";

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
  };
  
export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_PRODUCTS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case types.GET_PRODUCTS_SUCCESS: {
      return { ...state, isLoading: false, products: payload };
    }
    case types.GET_PRODUCTS_FAILURE: {
      return { ...state, isError: true };
    }
    case types.ADD_PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case types.ADD_PRODUCT_SUCCESS : {
      return{
          ...state,
          products : {...state.products, isLoading: false, payload},
      }
    }
    case types.ADD_PRODUCT_FAILURE: {
      return { ...state, isError: true };
    }
    case types.DELETE_PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case types.DELETE_PRODUCT_SUCCESS : {
        const filterded = state.products.filter((products) => products !== payload)
        return{
            ...state,
            products : filterded,
        }
    }
    case types.DELETE_PRODUCT_FAILURE: {
      return { ...state, isError: true };
    }
    case types.EDIT_PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case types.EDIT_PRODUCT_SUCCESS : {
      return{...state, isLoading:false};
    }
    case types.EDIT_PRODUCT_FAILURE: {
      return { ...state, isError: true };
    }
    default:
      return state;
  }
};


  


