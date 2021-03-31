import React, { useCallback, useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';

import api from '../../services/api';
import { useCartCounter } from '../../hooks/CartProvider';

import { Container } from './styles';

import filledStars from '../../assets/filled-stars.svg';
import emptyStars from '../../assets/empty-stars.svg';

interface IProduct {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: number;
  price: number;
  installments: [
    {
      quantity: number;
      value: number;
    }
  ];
}

const TopSaleShelf: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { cartCount, updateCartCount } = useCartCounter();
  const breakPoints = [
    { width: 320, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 4 },
    { width: 1300, itemsToShow: 4 },
  ];
  const fetchProduct = useCallback(async () => {
    const response = await api.get<IProduct[]>('products');
    setProducts(response.data);
  }, []);

  const handleUpdateCart = useCallback(() => {
    updateCartCount(cartCount + 1);
  }, [cartCount, updateCartCount]);

  const currencyFormater = useCallback((value: number) => {
    let newValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value / 100);

    return newValue;
  }, []);

  const updateStars = useCallback((value: number) => {
    const starsCounted = [...Array(value)];
    const emptyStarsCounted = [...Array(5 - value)];

    return (
      <>
        {starsCounted.map((item) => {
          return (
            <img
              src={filledStars}
              className="filled-stars"
              alt="rate"
              key={Math.random()}
            />
          );
        })}
        {emptyStarsCounted.map((item) => {
          return (
            <img
              src={emptyStars}
              className="empty-stars"
              alt="rate"
              key={Math.random()}
            />
          );
        })}
      </>
    );
  }, []);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <Container>
      <h2>Mais Vendidos</h2>
      <hr />
      <Carousel breakPoints={breakPoints}>
        {products.map((product) => (
          <article key={product.productId}>
            <img src={product.imageUrl} alt="product" />

            <div>
              <h1>{product.productName}</h1>

              <div>{updateStars(product.stars)}</div>

              {product.listPrice != null ? (
                <>
                  {' '}
                  <span />
                  <h4> De {currencyFormater(product.listPrice)}</h4>{' '}
                </>
              ) : null}

              <p>por {currencyFormater(product.price)}</p>

              {product.installments[0] ? (
                <h5>
                  ou em {product.installments[0].quantity}x de{' '}
                  {currencyFormater(product.installments[0].value)}{' '}
                </h5>
              ) : (
                <br />
              )}
              <button onClick={handleUpdateCart}>Comprar</button>
            </div>
          </article>
        ))}
      </Carousel>
    </Container>
  );
};

export default TopSaleShelf;
