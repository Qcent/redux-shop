import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeFromCart, updateCartQuantity } from '../../redux/actions';
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item, removeFromCart, updateCartQuantity }) => {

  const doRemoveFromCart = item => {
    removeFromCart(item._id);
    idbPromise('cart', 'delete', { ...item });
  };

  const onChange = (e) => {
    const value = parseInt(e.target.value);
  
    if (value <= 0) {
      removeFromCart(item._id);
      idbPromise('cart', 'delete', { ...item });
    } else {
      updateCartQuantity({ _id: item._id, quantity: value });
      idbPromise('cart', 'put', { ...item, quantity: value });
    }
  };

  return (
    <div className="flex-row">
      <div>
      <Link to={`/products/${item._id}`}>
        <img
          alt={item.name}
          src={`/images/${item.image}`}
        />
      </Link>
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.quantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => doRemoveFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

//const mapStateToProps = state => {
 // return { state: state.CartFilter };
//};

export default connect(
 // mapStateToProps,
  { removeFromCart, updateCartQuantity }
)(CartItem);