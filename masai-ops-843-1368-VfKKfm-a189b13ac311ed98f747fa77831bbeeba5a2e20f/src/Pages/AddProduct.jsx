import React,{useState} from "react";
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";

const AddProduct = () => {
    const [value, setValue] = useState("");

    const { products } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = async () => {
        let resp = await axios.post("http://localhost:8080/products", {
          value: value,
        });
        dispatch([...products, resp.data]);
        setValue("");
      };

    const Submit = (e) => {
        e.preventDefault();
        handleSubmit();
      };

    return (
        <div>
            <h3>Add Product</h3>
            <div
                className="add-product-wrapper">
                <div className="form-element-div">
                    <label className="form-label">Product title</label>
                    <input data-cy="add-product-title" type="text" value={value} handleChange={handleChange} handleSubmit={handleSubmit} />
                </div>
                <div className="form-element-div">
                    <label className="form-label">Product Category</label>
                    <select data-cy="add-product-category" value={value} handleChange={handleChange} handleSubmit={handleSubmit} >
                        <option value="">Select Category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Cosmetics">Cosmetics</option>
                        <option value="Shoes">Shoes</option>
                    </select>
                </div>
                <div className="form-element-div">
                    <label className="form-label">Product Image</label>
                    <input
                        data-cy="add-product-image"
                        type="url"
                        placeholder="Image URL"
                        value={value} handleChange={handleChange} handleSubmit={handleSubmit} 
                    />
                </div>
                <div className="form-element-div">
                    <label className="form-label">Product Price</label>
                    <input data-cy="add-product-price" type="text" value={value} handleChange={handleChange} handleSubmit={handleSubmit} />
                </div>
                <div style={{ textAlign: "right" }}>
                    <button data-cy="add-product-button" onClick={Submit}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
