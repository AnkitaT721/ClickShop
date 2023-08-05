import React from 'react';
import "./CartItemCard.css";
import { Link } from 'react-router-dom';

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className='CartItemCard'>
      <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16530962/2021/12/24/9f9b34b2-cba5-415a-9718-c224263649f11640350292538-Puma-Unisex-Casual-Shoes-1941640350292216-1.jpg" alt="ssa" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: ₹${item.price}`}</span>
        <p onClick={() => deleteCartItems(item.product)}>Remove</p>
      </div>
    </div>
  );
}

export default CartItemCard;
