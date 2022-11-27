import "./admin.css";
import { useState } from "react";
import Product from '../components/product';

const Admin = () => {
  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  const [couponCode, setCouponCode] = useState([]);
  const [allCoupons, setAllCoupons] = useState([]);

  const saveProduct = () => {
    console.log(product);
    
    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
  };

  const saveCoupon = () => {
    console.log(couponCode);

    // add the coupon code to the allCoupons array
    let copy = [...allCoupons];
    copy.push(couponCode);
    setAllCoupons(copy);
  };

  const productValChange = (e) => {
    // e = event information
    let name = e.target.name;
    let value = e.target.value;

    // copy, modify the copy, set the copy back
    let copy = { ...product };
    copy[name] = value;
    setProduct(copy);
  };

  const couponValChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    let copy = { ...couponCode };
    copy[name] = value;
    setCouponCode(copy);
  };

  return (
    <div className="admin">
      <h3>Store Administration</h3>

      <div className="content">
        <div className="product-form">
          <h5>Save Products</h5>

          <div className="my-controls">
            <label>Title</label>
            <input name="title" onBlur={productValChange} type="text" />
          </div>

          <div className="my-controls">
            <label>Image</label>
            <input name="image" onBlur={productValChange} type="text" />
          </div>

          <div className="my-controls">
            <label>Category</label>
            <input name="category" onBlur={productValChange} type="text" />
          </div>

          <div className="my-controls">
            <label>Price</label>
            <input name="price" onBlur={productValChange} type="number" />
          </div>

          <div className="my-controls center">
            <button onClick={saveProduct} className="btn btn-sm btn-dark">
              Save Product
            </button>
          </div>

          <hr />

          <h5>All Products Added</h5>

          <ul>
            {allProducts.map((p) => (
              <li key={p.title}>
                {p.title} - ${parseFloat(p.price).toFixed(2)}
              </li>
            ))}
          </ul>


        </div>

        <div className="coupons-form">
          <h5>Register Coupon Codes</h5>

          <div className="my-controls">
            <label>Code</label>
            <input name="code" onBlur={couponValChange} type="text" />
          </div>

          <div className="my-controls">
            <label>Discount</label>
            <input name="discount" onBlur={couponValChange} type="number" />
          </div>

          <div className="my-controls center">
            <button onClick={saveCoupon} className="btn btn-sm btn-dark">
              Save Coupon
            </button>
          </div>

          <hr />

          <h5>Valid Coupon Codes</h5>

          <ul>
            {allCoupons.map((c) => (
              <li key={c.code}>
                {c.code} - {c.discount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
