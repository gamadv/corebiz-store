import React from 'react';

import { Container } from './styles';

import blackLogo from '../../assets/logo-corebiz-preto-cinza.svg';
import iconMyAccount from '../../assets/myaccount-icon.svg';
import searchIcon from '../../assets/search-icon.svg';
import cartIcon from '../../assets/cart-icon.svg';

import { useCartCounter } from '../../hooks/CartProvider';

const Header: React.FC = () => {
  const { cartCount } = useCartCounter();

  return (
    <Container>
      <span />
      <img src={blackLogo} alt="corebiz-logo" />

      <div id="search-input">
        <input type="text" placeholder="O que está procurando?" />
        <img src={searchIcon} alt="search-icon" />
      </div>

      <div id="myaccount-container">
        <img src={iconMyAccount} alt="corebiz-logo" />
        <p>Minha Conta</p>
      </div>

      <div id="minicart-container">
        <img src={cartIcon} alt="corebiz-logo" />
        <p>{cartCount}</p>
      </div>
    </Container>
  );
};

export default Header;
