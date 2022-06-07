import styled, { css, createGlobalStyle } from "styled-components";
const corVerde = "#27AE60";
const corVerde2 = "#93D7AF";
const corVermelho = "#EB5757";
const corCinza100 = "#333";
const corCinza50 = "#828282";
const corCinza20 = "#e0e0e0";
const corCinza0 = "#f5f5f5";
const corBranca = "#fff";
export const EstiloGlobal = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    *{
        box-sizing:border-box;
        margin: 0;
        padding: 0;
    }
    html{
        font-size: 10px;
    }
    button{
        cursor: pointer;
        padding: 0 2rem;
        border-radius: 0.8rem;
        background-color: ${corVerde};
        color: ${corBranca};
        height: 4rem;
        border:none;
    }
    ul,ol,li{
        list-style: none;
    }
    body{
        background-color: ${corBranca};
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
    }
  
    `;
export const Container = styled.div`
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding-right: 2rem;
  }
  padding-right: 2rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
`;

export const Card = styled.li`
  background-color: ${corBranca};
  width: 28rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  border: 2px solid ${corCinza20};
  border-radius: 0.5rem;

  margin: 0 auto;
  figure {
    width: 27.6rem;
    max-height: 15rem;
    text-align: center;
    background-color: ${corCinza0};
    img {
      max-height: 15rem;
      width: 17.7rem;
    }
  }
  div {
    margin: 0 2rem;
    text-align: left;
    h3 {
      color: ${corCinza100};
      font-size: 1.8rem;
    }
    span {
      font-size: 1.2rem;
      color: ${corCinza50};
    }
  }
  p {
    margin: 0 2rem;
    color: ${corVerde};
    font-size: 1.4rem;
  }
  button {
    margin: 0 0 2rem 2rem;
  }
`;
export const Vitrine = styled.ul`
  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
    overflow: auto;
    flex-wrap: nowrap;
    gap: 2rem;
    margin: 2rem;
    max-height: 35rem;
  }
  @media (min-width: 700px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    max-width: 89rem;
    padding: 1rem 1rem 2rem 0rem;
  }
  @media (min-width: 1001px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1rem 1rem 2rem 0rem;
    max-width: 89rem;
    margin: auto;
  }
`;
export const Header = styled.div`
  background-color: ${corCinza0};
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    margin: 0 auto;
    div {
      height: 6rem;
      border-radius: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0 1.2rem;
      width: 28rem;
      border: 2px solid #e0e0e0;
      margin: 1rem;
      background-color: ${corBranca};
      input {
        border: none;
        height: 4rem;
        max-width: 14rem;
        &:focus {
          box-shadow: 0 0 0 0;
          outline: 0;
        }
      }
      button {
        font-size: 1.4rem;
        padding: 0;
        text-align: center;
        width: 10rem;
        margin: 0;
      }
    }
    img {
      color: linear-gradient(
        90deg,
        ${corCinza100} 62.64%,
        ${corVermelho} 64.74%
      );
      height: 4rem;
      width: 16rem;
    }
  }
  @media (max-width: 800px) {
    display: flex;

    justify-content: space-around;
    align-items: center;

    div {
      height: 6rem;
      border-radius: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0 1.2rem;
      width: 28rem;
      border: 2px solid #e0e0e0;
      margin: 1rem;
      background-color: ${corBranca};
      input {
        border: none;
        height: 4rem;
        max-width: 14rem;
        &:focus {
          box-shadow: 0 0 0 0;
          outline: 0;
        }
      }
      button {
        font-size: 1.4rem;
        padding: 0;
        text-align: center;
        width: 10rem;
        margin: 0;
      }
    }
    img {
      color: linear-gradient(
        90deg,
        ${corCinza100} 62.64%,
        ${corVermelho} 64.74%
      );
      height: 4rem;
      width: 16rem;
    }
  }
  @media (min-width: 801px) {
    display: flex;

    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 8rem;

    div {
      height: 6rem;
      border-radius: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0 1.2rem;
      width: 28rem;
      border: 2px solid #e0e0e0;
      margin: 1rem;
      background-color: ${corBranca};
      input {
        border: none;
        height: 4rem;
        max-width: 14rem;
        &:focus {
          box-shadow: 0 0 0 0;
          outline: 0;
        }
      }
      button {
        font-size: 1.4rem;
        padding: 0;
        text-align: center;
        width: 10rem;
        margin: 0;
      }
    }
    img {
      color: linear-gradient(
        90deg,
        ${corCinza100} 62.64%,
        ${corVermelho} 64.74%
      );
      height: 4rem;
      width: 16rem;
    }
  }
`;
export const CartContainer = styled.ul`
  min-width: 32rem;
  max-height: 53rem;
  margin: 0 auto;
  background-color: ${corCinza0};
  overflow: auto;
  margin-bottom: 3rem;
  .cart-header {
    display: flex;
    height: 6.5rem;
    width: 100%;
    background-color: ${corVerde};
    color: ${corBranca};
    align-items: center;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;

    h3 {
      font-size: 1.8rem;
      text-align: left;
      margin: 2rem;
    }
  }
  .subtotal {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    button {
      background-color: ${corCinza50};
      width: 90%;
      margin: auto;
    }
  }
  .total {
    display: flex;
    flex-direction: row;
    padding: 2rem;
    justify-content: space-between;
    align-items: center;
  }
`;
export const CartLi = styled.li`
  max-width: 31rem;
  padding: 0;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 10rem;
  border: solid 2px ${corCinza0};
  border-radius: 1rem;
  figure {
    height: 8rem;
    margin: 0;
    display: flex;
    background: ${corCinza20};
    justify-content: space-between;
    align-items: baseline;
    span {
      color: ${corVerde};
      text-align: right;
    }
    img {
      height: 7rem;
      width: 7rem;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    h3 {
      font-size: 1.8rem;
      max-width: 12ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .botoes {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    box-sizing: border-box;
    max-height: 8rem;

    span {
      font-size: 1.2rem;
    }
    button {
      background: transparent;
      margin: 0;
      padding: 0;
      font-size: 1.4rem;
      font-weight: bolder;
      color: ${corCinza100};
      max-height: 2.67rem;
      min-width: 3rem;
      margin: 0 1rem;
    }
  }
  .botoes:hover {
    font-size: 1.6rem;
    color: ${corVermelho};
  }
`;
export const Cart = styled.div``;
export const CartVazio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 1.15rem;
`;
