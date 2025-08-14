import { AiFillCloseSquare } from "react-icons/ai";

import styled from "styled-components";

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 1);
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
export const Container = styled.div`
  width: 60vw;
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  background-color: #000;
`;
export const Icone = styled(AiFillCloseSquare)`
  color: red;
  font-size: 24px;
  cursor: pointer;
  position: relative;
  right: -570px;
`;

export const BookContainer = styled.div`
  perspective: 1100px;
`;

export const Book = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  @media (max-width: 900px) {
    flex-direction: column; /* Empilha */
    gap: 0;
  }
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
    transform: rotateY(-180deg);
  }

  &.flip-left {
    transform: rotateY(180deg);
  }

  /* Estilos internos do react-pdf */
  .react-pdf__Page {
    display: block;
  }

  .react-pdf__Page canvas {
    max-width: 100%;
    max-height: 90vh;
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
    }
  }
`;

export const PageIndicator = styled.span`
  margin: 0 10px;

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;
