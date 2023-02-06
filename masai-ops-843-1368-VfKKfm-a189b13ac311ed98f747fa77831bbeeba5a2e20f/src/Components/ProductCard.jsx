import React from "react";
import "./productcard.css"

const ProductCard = ({ id,name,category,price,image,cartQuantity }) => {
    return (
        <div data-cy={`product-card-${id}`}>
            <div data-cy="product-card-name">{name}</div>
            <div data-cy="product-card-category">{category}</div>
            <div>
                <img data-cy="product-card-image" src={image} alt="Product" style={{width:"200px", height:"200px"}}/>
            </div>
            <div data-cy="product-card-price">€ {price}</div>
            <div>
                <div>
                    {/* Add a onClick handler for delete functionality */}
                    <button data-cy="delete-button" className="danger">
                        <img src='./delete.png' alt='delete' width='20px' />
                    </button>

                </div>
                <div>
                    <button data-cy='add-to-cart' className="add-to-cart">
                        +
                    </button>
                    <span data-cy='product-quantity'>{cartQuantity}</span>
                    <button data-cy='remove-from-cart' className="remove-from-cart">
                        -
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
