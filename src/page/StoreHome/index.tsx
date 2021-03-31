import React from 'react';

import Newsletter from '../../components/Newsletter';
import Slider from '../../components/Slider/Slider';
import TopSaleShelf from '../../components/TopSaleShelf';

import { Container } from './styles';

const StoreHome: React.FC = () => {
  return (
    <>
      <Slider/>
      <Container>
        <TopSaleShelf />
      </Container>
      <Newsletter />
    </>
  );
};

export default StoreHome;
