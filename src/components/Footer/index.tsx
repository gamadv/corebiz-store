import React from 'react';

import { Container } from './styles';

import emailIcon from '../../assets/email-icon.svg';
import headphoneIcon from '../../assets/headphone-icon.svg';
import vtexIcon from '../../assets/vtex-icon.svg';
import logoWhite from '../../assets/logo-corebiz-white-cinza.svg';

const Footer: React.FC = () => {
  return (
    <Container>
      <section>
        <div>
          <h3>Localização</h3>
          <hr />
          <p>
            Avenida Andrômeda, 2000. Bloco 6 e 8 <br />
            Alphavile SP
            <br /> brasil@corebiz.ag <br />
            +55 11 3090 1039
          </p>
        </div>

        <div>
          <button>
            <img src={emailIcon} alt="email-icon" />
            <p>Entre em Contato</p>
          </button>
          <button>
            <img src={headphoneIcon} alt="email-icon" />
            <p>
              FALE COM O NOSSO
              <br />
              CONSULTOR ONLINE
            </p>
          </button>
        </div>

        <div>
          <span>
            <p>Created By</p>
            <img src={logoWhite} alt="email-icon" />
          </span>
          <span>
            <img src={vtexIcon} alt="email-icon" />
          </span>
        </div>
        
      </section>
    </Container>
  );
};

export default Footer;
