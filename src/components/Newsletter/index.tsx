import React from 'react';
// import api from '../../services/api';

import { Container } from './styles';

const Newsletter: React.FC = () => {
  return (
    <Container>
      <form>
        <fieldset>
          <legend>Participe de nossas news com promoções e novidades!</legend>
          <input
            type="text"
            name="contact-name"
            placeholder="Digite seu nome"
          />
          <input
            type="text"
            name="contact-email"
            placeholder="Digite seu email"
          />
          <button>Eu Quero!</button>
        </fieldset>
      </form>
    </Container>
  );
};

export default Newsletter;
