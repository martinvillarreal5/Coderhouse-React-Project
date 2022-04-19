import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex === -1) {
      console.log(
        `${item.title} (id: ${item.id}) added to cart - added: ${item.count}`
      );
      setCart([...cart, item]);
    } else {
      const newCart = [...cart];
      newCart[itemIndex].count = newCart[itemIndex].count + item.count;
      console.log(
        `${item.title} (id: ${item.id}) already in cart - added: ${item.count} - total: ${newCart[itemIndex].count}`
      );
      setCart(newCart);
    }
  };
  const removeFromCart = (id) => {
    setCart(cart.filter((cartItem) => cartItem.id !== id));
  };

  const buyAll = () => setCart([]);
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, buyAll, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
