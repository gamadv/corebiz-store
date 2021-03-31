import React from 'react';

import StoreProvider from './hooks';

import Header from './components/Header';
import Footer from './components/Footer';
import StoreHome from './page/StoreHome';

import './styles/global.css';

const App: React.FC = () => {
  return (
    <>
      <StoreProvider>
        <Header />
        <StoreHome />
        <Footer />
      </StoreProvider>
    </>
  );
};

export default App;
