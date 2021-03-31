import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background-color: #f2f2f2;

  form {
    max-width: 1240px;
    margin: 0 auto;
    padding: 1rem 0;

    fieldset {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0.9rem;
      legend {
        font-size: 22px;
        text-align: center;
        color: #333333;
        font-weight: 700;
      }
      input {
        background: #ffffff;
        border-radius: 5px;
        margin: 0.7rem 0.2rem;
        width: 25%;
        padding: 1rem 1rem;
      }
      input::placeholder {
        font-size: 12px;
        color: 585858;
        font-weight: 700;
      }
      button {
        margin: 0.2rem;
        background: #000000;
        font-size: 14px;
        font-weight: 700;
        color: #ffffff;
        border-radius: 5px;
        padding: 1rem 2rem;
      }

      @media screen and (max-width: 768px) {
        flex-direction: column;

        legend{
          font-size: 20px;
          width: 95%;
          text-align: left;
        }
        input,button {
          width: 95%;
        }

      }
    }
  }
`;
