import React from 'react';
import { FaCartShopping } from "react-icons/fa6";

function Head({ cart }) {
  const totalItems = cart.length;

  const calculateTotalPrice = () => {
    return cart.reduce((acc, item) => {
      if (typeof item.price === 'number') {
        return acc + item.price; 
      } else if (typeof item.price === 'object' && item.price.type === 'div') {
        const offerPrice = parseFloat(item.price.props.children[2].props.children);
        return acc + offerPrice;
      } else {
        return acc;
      }
    }, 0);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Shopping Cart</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shop
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">All products</a></li>
                <li><a className="dropdown-item" href="#">Popular Items</a></li>
                <li><a className="dropdown-item" href="#">New Arrivals</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="ms-auto">
          <button className="btn btn-outline-dark" type="submit">
            <i className="bi bi-cart-fill me-1"></i>
            <FaCartShopping /> Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">Products: {totalItems}</span>
            <span className="badge bg-dark text-white ms-1 rounded-pill">Price: {calculateTotalPrice()}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Head;
