import React,{useEffect} from 'react'
import './productpage.css'
import { useSelector, useDispatch } from "react-redux";
// import { getProductData } from "../Redux/action";
// import ProductCard from '../Components/ProductCard';
import axios from 'axios'
import {
    getProductsRequest,
    getProductsSuccess,
    getProductsFailure
} from '../Redux/action'




const ProductPage = () => {

    const dispatch = useDispatch();
    const product = useSelector((store) => {
    return store.products;
  });
  const getTodos = () => {
    dispatch(getProductsRequest());
    axios
      .get("http://localhost:8080/products")
      .then((res) => {
        dispatch(getProductsSuccess(res.data));
        console.log(res.data);
      })
      .catch((e) => {
        dispatch(getProductsFailure());
      });
  };
  useEffect(() => {
    dispatch(getTodos);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div className="product-cards">
        {/* Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
         */}
        {product.length && product.map((ele) => {
            return (
              <>
                <div key={ele.id}>
                  <h3>{ele.name}</h3>
                  <p>{ele.category}</p>
                  <img className="product-image" src={ele.image} alt="" />
                  <h4>  € {ele.price}</h4>
                  <div>
                    <button>Delete</button>
                    <p>{ele.cartQuantity}</p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default ProductPage;