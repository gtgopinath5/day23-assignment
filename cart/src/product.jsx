import React from 'react';

function Product({ product, addToCart, removeFromCart, inCart }) {
  return (
    <div className="card position-relative">
      <img src={product.image} className="card-img-top" alt={product.alt} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.text}</p>
        <p className="card-text">Price: {product.price}</p>
        <div className="position-absolute bottom-0 end-0 m-2"> {/* Positioning the button */}
          {inCart ? (
            <button onClick={() => removeFromCart(product)} className="btn btn-danger">Remove from Cart</button>
          ) : (
            <button onClick={() => addToCart(product)} className="btn btn-primary">Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
