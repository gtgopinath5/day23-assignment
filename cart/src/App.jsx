import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "./Head";
import Product from './product';
import Cart from "./Cart";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [cart, setCart] = useState([]);
   const addToCart = (product) => {
    let price = product.price;

    switch (product.title) {
      case "iphone 15 pro":
        price = 100000;
        break;
      case "apple watch ultra":
        price = 40000;
        break;
      case "apple vision pro":
        price = 350000;
        break;
      default:
        price = product.price;
        break;
    }

    const updatedCart = [...cart, { ...product, price, inCart: true }];
    setCart(updatedCart);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter(item => item.id !== product.id);
    setCart(updatedCart);
  };

  const products = [
    {
      id: 1,
      image: "https://th.bing.com/th?id=OIP.W0k4EZH3iIyai5HT2jGkPwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      alt: "Image 1",
      title: "iphone 13",
      price: 70000,
      text: "Flagship smartphone with advanced features."
    },
    {
      id: 2,
      image: "https://th.bing.com/th/id/OIP.xpKGbNNR4uZVUym6bOHvyQAAAA?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      alt: "Image 2",
      title: "iphone 15 pro",
      price: (
        <div className="text">
          <span className="text-decoration-line-through">125000</span>
          {" "}
          <span style={{ color: 'red' }}>Offer price: 100000</span>
        </div>
      ),
      text: "Premium model with cutting-edge technology."
    },
    {
      id: 3,
      image: "https://th.bing.com/th/id/OIP.iD0GitmW5p3hilIsrvx3MwHaIy?w=158&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      alt: "Image 3",
      title: "apple watch ultra",
      price: (
        <div className="text">
          <span className="text-decoration-line-through">50000</span>
          {" "}
          <span style={{ color: 'red' }}>Offer price: 40000</span>
        </div>
      ),
      text: "Advanced smartwatch with health monitoring."
    },
    {
      id: 4,
      image: "https://th.bing.com/th/id/OIP.edG1rWGW1U5vmspgXF0CSwHaFj?w=229&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      alt: "Image 4",
      title: "apple ipen",
      price: 22000,
      text: "Precision stylus for digital art and note-taking."
    },
    {
      id: 5,
      image: "https://th.bing.com/th/id/OIP.D8WbWZupg19CbQQG0erdHQAAAA?w=180&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      alt: "",
      title: "adapter",
      price: 2000,
      text: "Versatile adapter for multiple device compatibility."
    },
    {
      id: 6,
      image: "https://th.bing.com/th/id/OIP.kdTyWTQaNTiR8rixXtE-vAHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      alt: "Image 4",
      title: "ipad pro",
      price: 60000,
      text: "High-performance tablet for professional use."
    },
    {
      id: 7,
      image: "https://th.bing.com/th/id/OIP.BT3m7dK0Z_yK2coT4uPFmQHaDt?w=305&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      alt: "Image 4",
      title: "apple vision pro",
      price: (
        <div className="text">
          <span className="text-decoration-line-through">400000</span>
          {" "}
          <span style={{ color: 'red' }}>Offer price:350000</span>
        </div>
      ),
      text: "Cutting-edge display technology for professionals."
    },
    {
      id: 8,
      image: "https://th.bing.com/th/id/OIP.P2O4VznkjvBPt-c2B8dUDgHaE8?w=229&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      alt: "Image 4",
      title: "mackbook pro",
      price: 125000,
      text: "Powerful laptop with exceptional performance."
    }
  ];

  return (
    <>
      <Head cart={cart} />
      <header className="bg-dark py-5 mt-4">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">ZEN APPLE STORE</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              Welcome to our online store.
            </p>
          </div>
        </div>
      </header>
      <div className="container mt-4">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <Product
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                inCart={cart.some(item => item.id === product.id)}
              />
            </div>
          ))}
        </div>
      </div>
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright © Your Website 2023</p>
        </div>
      </footer>
      <div>
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </>
  );
}

export default App;
