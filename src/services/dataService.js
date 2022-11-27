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
  getCatalog() {
    return catalog;
    //TODO: get the catalog from the server
  }
}

export default DataService;
