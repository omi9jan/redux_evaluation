//Write the API calling functions here;
import * as types from "./actionTypes";

import axios from "axios";

export const getProductData = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });

    axios
      .get(`http://localhost:8080/products`)
      .then((res) => {
        dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.GET_PRODUCTS_FAILURE });
      });
};

export const addTodo = (value) => ({
    type : types.ADD_PRODUCT_SUCCESS,
    payload : [
        {id : Date.now(), value },
        {id : Date.now(), value },
]});

export const deleteTodo = (id) => ({
    type : types.DELETE_PRODUCT_SUCCESS,
    payload : id
});

export const updateTodo = (id, changes) => ({
    type : types.EDIT_PRODUCT_SUCCESS,
    payload : [id, changes]
})

