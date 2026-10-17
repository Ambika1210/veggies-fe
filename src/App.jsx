import React from 'react';
import LandingPage from './features/landing/LandingPage';
import { CartProvider } from './features/cart/context/CartContext';

function App() {
  return (
    <CartProvider>
      <LandingPage />
    </CartProvider>
  );
}

export default App;
