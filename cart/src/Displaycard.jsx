import React from 'react';

function DisplayCard({ product, addToCart, cart }) {
  const inCart = cart.some(item => item.id === product.id);

  return (
    <div className="card position-relative equal-card-height" style={{ width: '100%' }}>
      <img 
        src={product.image} 
        className="card-img-top equal-image-size" 
        alt={product.alt} 
      />
      <div className="position-absolute bottom-0 end-0 m-2">
        {inCart ? (
          <button onClick={() => addToCart(product)} className="btn btn-danger">Remove from Cart</button>
        ) : (
          <button onClick={() => addToCart(product)} className="btn btn-primary">Add to Cart</button>
        )}
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.text}</p>
        <p className="card-text">Price: {product.price}</p>
      </div>
    </div>
  );
}

export default DisplayCard;

