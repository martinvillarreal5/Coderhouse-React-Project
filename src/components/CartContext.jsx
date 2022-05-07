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

  const clearCart = () => setCart([]);

  const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.count, 0);
  };

  const cartTotalCount = () => {
    let total = 0;
    cart.forEach((item) => (total += item.count));
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartTotal,
        cartTotalCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
