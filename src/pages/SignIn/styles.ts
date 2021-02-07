import styled from 'styled-components';
import { shade } from 'polished';
import px2vw from '../../utils/px2vw';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1440px;

  form {
    margin: 1rem 0;
    width: 21.25rem;

    text-align: center;

    //Medida com função responsiva para uso em celulares
    @media (max-width: 414px) {
      width: ${px2vw(window.innerWidth - 20)};
    }

    h1 {
      margin-bottom: 2rem;
    }

    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 1rem;
      width: 100%;
      color: #fff;

      &::placeholder {
        color: #fff;
      }

      & + input {
        margin-top: 0.5rem;
      }
    }

    button {
      background: #ff9000;
      height: 3.5rem;
      border-radius: 10px;
      border: 0;
      padding: 0 1rem;
      color: #312e38;
      width: 100%;
      font-weight: 500;
      margin-top: 1rem;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      color: #000;
      display: block;
      margin-top: 1.5rem;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#000')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 1.5rem;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;
