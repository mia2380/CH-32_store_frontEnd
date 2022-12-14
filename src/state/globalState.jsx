import DataContext from "./dataContext";
import { useState } from "react";
import Product from '../components/product';


const GlobalState = (props) => {
    let [cart, setCart] = useState([]);
    let [user, setUser] = useState({ id:42, name: "Bob" });

    const addProductToCart = (Product) => {
        console.log("adding to cart", Product);
        // add the product to the cart array
        let copy = [...cart];
        let found = false;

        for(let i=0; i<cart.length; i++) {
            let existing = cart[i];
            if(existing._id === Product._id) {
                existing.quantity += Product.quantity;
                found = true;
           }
        }

        if(!found) {
            copy.push(Product);
        };

        setCart(copy);
    };

    const removeProductFromCart = () => {
        console.log("removing from cart");
    };

    return (<DataContext.Provider value={{cart: cart, user: user, addProductToCart: addProductToCart, removeProductFromCart: removeProductFromCart}}>{props.children}</DataContext.Provider>);
};

export default GlobalState;