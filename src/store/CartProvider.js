import React from 'react';
import CartContext from './cart-context';

export const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {
    
  }

  const removeItemToCartHandler = (item) => {
    
  }

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext value={cartContext}>
      {props.children}
    </CartContext>
  );
};