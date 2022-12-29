import { addToCart, decreaseQuantity, removeFromCart } from "../../action";
import { useDispatch, useSelector } from "react-redux";

import React from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartData);
  let amount =
    cartData.length &&
    cartData
      .map((item) => item.price * item.quantity)
      .reduce((total, value) => total + value, 0);

  return (
    <>
    <div className="vh-100">
      <div className="container table-responsive">
        <h1 className="text-center p-3">Cart Page</h1>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>Sr.No.</th>
              <th>Title</th>
              <th>Price</th>
              <th>Image</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item, i) => (
              <tr key={item.id}>
                <td>{i + 1}</td>
                <td component="th">{item.title}</td>
                <td align="left">${item.price * item.quantity}</td>
                <td align="left">
                  <img
                    src={item.image}
                    alt={item.title}
                    height="30px"
                    width="30px"
                  />
                </td>
                <td align="left">{item.category}</td>
                <td align="left">
                  {item.quantity === 1 ? (
                    <button className="btn btn-danger btn-sm" onClick={() => dispatch(removeFromCart(item.id))}>
                      -
                    </button>
                  ) : (
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => dispatch(decreaseQuantity(item))}
                    >
                      -
                    </button>
                  )}
                  <label className="px-2" htmlFor="quantity">
                    {item.quantity}
                  </label>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </button>
                </td>
                <td align="left">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <th></th>
              <th>Total</th>
              <th>${amount.toFixed(2)}</th>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default Cart;
