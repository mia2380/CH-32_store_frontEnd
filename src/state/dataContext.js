import { createContext } from "react";

// the context will discribe the data structure
//should not have values or implementation
//it's just a promise to the data structure
const DataContext = createContext({
  cart: [], //[] = arrays
  user: {}, //{} = an object
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export default DataContext;
