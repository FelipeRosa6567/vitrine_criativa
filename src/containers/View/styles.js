import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;

  h2 span {
    font-size: 1.9rem;
    font-weight: 600;
    color: #4d7cfe;
  }
  button {
    background-color: #4d7cfe;
    color: #fff;
    width: 10rem;
    height: 35px;
    border-radius: 40px;
    cursor: pointer;
    border: none;
  }
  @media (max-width: 768px) {
    h2 span {
      font-size: 1.4rem;
      font-weight: 400;
    }
    button {
      width: 5rem;
      height: 25px;
    }
  }
  @media (max-width: 450px) {
  }
`;

export const ContainerViewLivros = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  @media (max-width: 450px) {
  }
`;

export const ContainerFoto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 1.3rem;
  }
  img {
    width: 300px;
  }

  @media (max-width: 768px) {
    img {
      width: 80%;
    }
    h2 {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 450px) {
  }
`;
export const ContainerDescricao = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p span {
    font-size: 1.9rem;
    font-weight: 600;
    color: #4d7cfe;
    background-color: #000;
  }
  p {
    width: 700px;
    font-size: 1.4rem;
    background-color: #000;
  }

  button {
    display: block;
    margin: 25px auto;
  }

  @media (max-width: 768px) {
   
    p {
      width: 90%;
      font-size: 1.1rem;
    }
     p span {
      font-size: 1.3rem;
      font-weight: 400;
    }

  }
  @media (max-width: 450px) {
  }
`;
