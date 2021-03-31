import React, { useContext, createContext, useState, useCallback } from 'react';

interface ICartContext {
  cartCount: number;
  updateCartCount: (count: number) => void;
}

const CartContext = createContext<ICartContext>({} as ICartContext);

const CartProvider: React.FC = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = useCallback(
    (newCartCount: number) => {
      setCartCount(newCartCount);
    },
    [setCartCount]
  );

  return (
    <CartContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

function useCartCounter(): ICartContext {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCartCounter };