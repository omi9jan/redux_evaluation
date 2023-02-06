import React,{useEffect} from 'react'
import './productpage.css'
import { useSelector, useDispatch } from "react-redux";
import { getProductData } from "../Redux/action";
import ProductCard from '../Components/ProductCard';

const ProductPage = () => {

    const { isLoading, products } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductData());
    }, []);

    if(isLoading) return (<h1>Loading...</h1>)
  
    return (
        <div style={{ width: "100%" }}>
            { <div className='product-cards'>
                {/* Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
                */}
                {products.map((ele)=>(<ProductCard id={ele.id} name={ele.name} category={ele.category} image={ele.image} price={ele.price} cartQuantity={ele.cartQuantity}/>))}
                
            </div> }
        </div>
    );
}

export default ProductPage


