//Write the API calling functions here;
import * as types from "./actionTypes";

import axios from "axios";

// export const getProductData = () => (dispatch) => {
//   dispatch({ type: types.GET_PRODUCTS_REQUEST });

//     axios
//       .get(`http://localhost:8080/products`)
//       .then((res) => {
//         dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data });
//       })
//       .catch((err) => {
//         dispatch({ type: types.GET_PRODUCTS_FAILURE });
//       });
// };

const getProductsRequest = () => {
    return {
      type: types.GET_PRODUCTS_REQUEST,
    };
  };
  const getProductsSuccess = (payload) => {
    return {
      type: types.GET_PRODUCTS_SUCCESS,
      payload,
    };
  };
  const getProductsFailure = () => {
    return {
      type: types.GET_PRODUCTS_FAILURE,
    };
  };
  export { getProductsRequest, getProductsSuccess, getProductsFailure };

