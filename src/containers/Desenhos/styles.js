import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  padding: 100px 50px;
  background-color: transparente;

  h1 {
    margin-bottom: 25px;
  }
      hr{
    margin-bottom: 25px;
  }

  .pagination {
  display: flex;
  list-style: none;
  gap: 10px;
  
}

.pagination li {
  padding: 5px 10px;
  border: 1px solid #ccc;
  margin-bottom: 25px;
  cursor: pointer;
  
}

.pagination .active {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}

  @media (max-width: 768px) {
    padding: 100px 10px;
  }
  @media (max-width: 450px) {
    padding: 100px 0px;
  }
`;

export const GridImagens = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
  margin-top: 20px;
  padding-bottom: 50px;
  width: 100%;
  max-width: 1000px;  
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Imagem = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 800px) {
    display: block;
    margin: 0 auto;
    width: 70%;
    height: 90%;
  }
`;

export const CampoBusca = styled.input`
  padding: 8px;
  font-size: 16px;
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;
