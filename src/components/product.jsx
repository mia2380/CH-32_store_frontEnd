import "./product.css";
import QuantityPicker from "./quantityPicker";
import {useState} from 'react';
import DataContext from "../state/dataContext";
import { useContext } from "react";


const Product = (props) => {
  const addProd = useContext(DataContext).addProductToCart;

  const handleAdd = () => {
    // call the context function
    let prodForCart = {...props.data, quantity: quantity};
    addProd(prodForCart);
  };

  const [quantity, setQuantity] = useState(1);
  
  const handleQuantityChange = (qty) => {
    console.log("Quantity change", qty);
    setQuantity(qty);
  };

  const getTotal = () => {
    const total = quantity * props.data.price;
    return total.toFixed("2");
  };
  
    return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt="" />

      <h5>{props.data.title}</h5>

      <div className="prices">
        <label className="price">${props.data.price.toFixed("2")}</label>
        <label className="total">{getTotal()}</label>
        
      </div>

      <div className="controls">

        <QuantityPicker onChange = {handleQuantityChange} /> 

      <button onClick={handleAdd}className="btn btn-sm btn-info">Add</button>
    </div>
    </div>
  );
}

export default Product;
