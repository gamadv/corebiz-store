import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background-color: #f2f2f2;

  form {
    max-width: 1240px;
    margin: 0 auto;
    padding: 1rem 0;

    div {
      flex-direction: column;
      p,
      strong {
        text-align: center;
        font-style: normal;
        letter-spacing: 0em;
      }
      p + button {
        width: 37%;
        margin: 1rem;
      }
    }
    div,
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

      div {
        align-items: baseline;
        flex-direction: column;
        margin: 0;
        input {
          background: #ffffff;
          border-radius: 5px;
          margin: 0.7rem 0.2rem;
          width: 280px;
          padding: 1rem 1rem;

          &.error {
            border: thin solid #D7182A;
            margin: 5px;
            margin-bottom: -15px;
          }
        }
        span {
          color: #d7182a;
          font-size: 12px;
          padding-top: 1rem;
        }
        input::placeholder {
          font-size: 12px;
          color: 585858;
          font-weight: 700;
        }
      }
      button {
        margin: 0.2rem;
        background: #000000;
        font-size: 14px;
        font-weight: 700;
        color: #ffffff;
        border-radius: 5px;
        padding: 1rem 2.5rem;
        margin-bottom: 1rem;
        
      }

      @media screen and (max-width: 768px) {
        flex-direction: column;
        p + button {
          margin-top: 1rem;
          width: 90%;
        }
        p {
          font-size: 14px;
        }
        legend {
          font-size: 20px;
          width: 95%;
          text-align: left;
        }
        input,
        button {
          width: 95%;
        }
      }
    }
  }
`;
