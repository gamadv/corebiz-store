import React from 'react';
import { CartProvider } from './CartProvider';

const StoreProvider: React.FC = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default StoreProvider;
