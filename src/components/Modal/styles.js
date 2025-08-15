import { AiFillCloseSquare } from "react-icons/ai";

import styled from "styled-components";

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 90%;
  
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 999;
   @media (max-width: 908px) {
    top:75px;
  }
`;
export const Container = styled.div`
  width: 70dvw;
  display: flex;
  height: 100dvh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  background-color: #000;
  @media (max-width: 908px) {
    width: 90dvw;
    height: 80dvh;
    
  }
  @media (max-width: 450px) {
  }

`;
export const Icone = styled(AiFillCloseSquare)`
  color: red;
  font-size: 54px;
  cursor: pointer;
  position: relative;
  right: -570px;
`;

export const BookContainer = styled.div`
  perspective: 400px;
`;

export const Book = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  
`;

export const PageWrapper = styled.div`
  transform-origin: left center;
  transition: transform 0.6s ease;
  backface-visibility: hidden;

  &.right {
    transform-origin: left center;
  }

  &.left {
    transform-origin: right center;
  }

  &.flip-right {
    transform: rotateY(-220deg);
  }

  &.flip-left {
    transform: rotateY(220deg);
  }

  /* Estilos internos do react-pdf */
  .react-pdf__Page {
    display: block;
  }

  .react-pdf__Page canvas {
    max-width: 100%;
    max-height: 90dvh;
    height: auto;
  }

  @media (max-width: 900px) {
    width: 100%;
    transform: none !important; /* Remove efeito de virar 2 páginas */
  }
`;

export const Navigation = styled.div`
  margin-top: 10px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; /* Quebra em várias linhas se necessário */

  button {
    padding: 8px 14px;
    font-size: 16px;
    margin: 5px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: #444;
    color: #fff;
    transition: background 0.2s ease;

    &:hover {
      background: #666;
    }

    &:disabled {
      background: #222;
      cursor: not-allowed;
    }

    @media (max-width: 900px) {
      font-size: 14px;
      padding: 6px 10px;
       margin-top: 2px;
    }
  }
`;

export const PageIndicator = styled.span`
  margin: 0 10px;

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;
