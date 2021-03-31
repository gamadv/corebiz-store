import styled from 'styled-components';
import flagOff from '../../assets/flag-icon.svg';
import mobileflagOff from '../../assets/mobile-flag-icon.svg';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;

  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
  }

  hr {
    width: 4.1rem;
    background-color: #c0c0c0;
    border: 2.5px solid #c0c0c0;
    margin: 0.2rem 0;
  }
  .rec-carousel-wrapper {
    width: 100%;
    .rec-slider-container {
      margin: 0;
    }
    .rec-arrow {
      background: none;
      box-shadow: none;
      color: #000000;
    }

    .rec-pagination {
      display: none;
    }
  }

  article {
    height: 400px;
    max-width: 216px;

    .filled-stars {
      width: 16px;
      height: 16px;
    }
    .empty-stars {
      width: 16px;
      height: 16px;
    }
    :hover {
      div:first-of-type {
        transition: all linear 0.2s;
        background: #e6e8ea;
      }
      button {
        visibility: visible;
        opacity: 1;
        transition: all linear 0.2s;
      }
    }
    img {
      width: 216px;
      height: 200px;
    }
    span::after {
      content: '';
      position: absolute;
      width: 81.36px;
      height: 72.04px;
      top: 0;
      /* right: 65px; */
      background-image: url(${flagOff});
      background-repeat: no-repeat;
      background-position: center;
      z-index: 2;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0.5rem 1rem;

      div {
        display: flex;
        flex-direction: row;
      }
      h1 {
        color: #7a7a7a;
        font-size: 12px;
        text-align: center;
      }

      p {
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;
      }
      h4 {
        font-size: 12px;
        text-decoration: line-through;
      }
      h4,
      h5 {
        font-style: normal;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 0em;
        text-align: center;
        color: #7a7a7a;
      }
      h5 {
        font-size: 11px;
      }
      button {
        visibility: hidden;
        opacity: 0;
        font-size: 12px;
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
        line-height: 16.37px;
        color: #ffff;
        background: #000000;
        padding: 0.6rem 2rem;
        border-radius: 5px;
        margin: 0.5rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 1rem;

    hr {
      width: 2.5rem;
      margin-bottom: 1.5rem;
    }
    .rec-carousel-wrapper {
      width: 100%;
      .rec-slider-container {
        margin: 0;
      }
      .rec-arrow {
        display: none;
      }
      .rec-pagination {
        display: block;
        background: none;

        .rec-dot{
          width: 8px;
          height: 8px;
        }
        .rec-dot_active{
          background-color:#F8475F;
          box-shadow: 0 0 1px 3px #f8475f;
        }
      }
    }

    article {
      max-width: 132px;
      max-height: 315px;
      outline: none;

      div:first-of-type {
        background: none;
        height: 190px;
      }
      button {
        visibility: visible;
        opacity: 1;
      }
      img {
        width: 132px;
        height: 122px;
      }
      span::after {
        width: 50.4px;
        height: 44.54px;
        background-image: url(${mobileflagOff});
        background-repeat: no-repeat;
        background-position: center;
      }
      div {
        h1 {
          font-size: 8px;
        }

        p {
          font-size: 14px;
        }
        button {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }
`;
