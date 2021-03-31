import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  margin: 0 auto;
  width: 100%;

  section {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1240px;
  }
  div {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 1.5rem 0;
  }

  hr {
    width: 44px;
    background-color: #ffffff;
    border: 3px solid #ffffff;
    margin: 1.4rem 0;
  }

  h3 {
    color: #ffffff;
    font-size: 20px;
  }
  p {
    color: #ffffff;
    text-align: left;
    font-size: 13px;
    white-space: nowrap;
    line-height: 2;
  }

  button {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 1rem;
    background: #ffffff;
    border-radius: 5px;
    max-width: 12rem;
    padding: 0.3rem;
  }
  button > img {
    margin-left: 1rem;
  }
  button > p {
    text-transform: uppercase;
    font-size: 12px;
    color: #000000;
    font-weight: 600;
    margin: 0.7rem;
    line-height: 100%;
  }

  div:last-child {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    span {
      margin: 1rem;
    }
    span > p {
      font-size: 9px;
      line-height: 14px;
      color: #ffffff;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    section {
      flex-direction: column;
    }

    div:nth-child(1) {
      margin-left: 1rem;
    }

    div:nth-child(2) {
      margin: 0 auto;
    }
    div:last-child {
      justify-content: space-between;
      width: 70%;
      margin: 0 auto;
    }
  }
`;
