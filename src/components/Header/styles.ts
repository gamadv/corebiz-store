import styled from 'styled-components';
import mobileMenu from '../../assets/mobile-menu.svg';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1240px;
  height: 75px;
  margin: 0 auto;
  margin-bottom: 0.8rem;
  span {
    display: none;
    background-image: url(${mobileMenu});
  }
  div:first-of-type {
    width: 60%;
    border-bottom: 1px solid #7a7a7a;
    margin-left: 5.5rem;

    img {
      margin-bottom: 5px;
    }
  }
  div {
    display: flex;
    margin-top: 0.4rem;

    p {
      margin: 0.3rem 0.4rem 0 0.4rem;
      font-size: 13px;
      color: #7a7a7a;
      cursor: pointer;
    }
  }

  div:last-child {
    p {
      color: #ffffff;
      font-size: 9px;
      background-color: #f8475f;
      border-radius: 50%;
      padding: 1px 5px;
    }
  }
  input {
    width: 100%;
    outline: none;
    border: none;
  }
  input::placeholder {
    color: #7a7a7a;
    margin: 5rem;
  }

  @media screen and (max-width: 768px) {
    display: grid;
    width: 94%;
    height: 90%;
    grid-template-areas:
      'mobilemenu img minicartDiv'
      'input input input';
    grid-template-columns: 1fr 8fr -43.5fr;
    grid-column-gap: 1rem;
    margin: 0.9rem;

    span {
      display: block;
      width: 22.5px;
      align-self: center;
      height: 15.02px;
      grid-area: mobilemenu;
      margin-top: 0.6rem;
    }
    img {
      grid-area: img;
      margin: 0 auto;
      align-self: center;
    }
    #search-input {
      grid-area: input;
      width: 95%;
      margin: 0 auto;
      margin-right: 1.5rem;
      margin-top: 1rem;

      input::placeholder {
        width: 100%;
      }
    }

    #minicart-container {
      grid-area: minicartDiv;
      align-self: center;

      p {
        font-size: 10px;
        margin: 0.3rem;
      }
    }
    #myaccount-container {
      display: none;
    }
  }
`;
