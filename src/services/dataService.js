import axios from "axios";

var catalog = [
  {
    _id: "123abc",
    price: 11.55,
    title: "Brownies",
    image: "brownies.jpeg",
    category: "bakery",
  },
  {
    _id: "456def",
    price: 1.75,
    title: "Cookies",
    image: "cookies.jpeg",
    category: "bakery",
  },
  {
    _id: "789ghi",
    price: 4.65,
    title: "Cupcakes",
    image: "cupcakes.jpg",
    category: "bakery",
  },
  {
    _id: "231jkl",
    price: 75.82,
    title: "Cakes",
    image: "cake.jpg",
    category: "bakery",
  },
  {
    _id: "389mno",
    price: 22.75,
    title: "Cheesecakes",
    image: "cheesecake.jpeg",
    category: "bakery",
  },
];

class DataService {
  async getCatalog() {
    // return catalog;
    //TODO: get the catalog from the server
    let result = await axios.get("http://127.0.0.1:5000/api/catalog");
    return result.data;
  }

  async saveProduct(product) {
    let result = await axios.post("http://127.0.0.1:5000/api/catalog", product);
    return result.data;
  }
  // create the getCoupon
  async getCoupons() {
    try {
      let result = await axios.get("http://127.0.0.1:5000/api/coupons");
      return result.data;
    } catch {
      return [];
    }
  }
}

export default DataService;
