
function Cart({ cartItems }) {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty!</p>
      ) : (
        <div className="row g-4">
          {cartItems.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 shadow">
                <img
                  src={item.image}x
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: '200px', objectFit: 'contain' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Brand: {item.brand}</h6>
                  <p className="card-text">Price: ₹{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
