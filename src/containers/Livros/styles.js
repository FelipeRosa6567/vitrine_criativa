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
export const PaginationWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;

  .pagination {
    display: flex;
    list-style: none;
    gap: 8px;
  }

  .pagination li {
    padding: 6px 12px;
    border-radius: 6px;
    background: #2c2c3e;
    cursor: pointer;
  }

  .pagination li.active {
    background: #6c5ce7;
    font-weight: bold;
  }

  .pagination li:hover {
    background: #444;
  }
`;


export const ContainerLivros = styled.div`
  display: grid;
  gap: 1rem; 
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: calc(4 * 250px + 3 * 1rem); 
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
    max-width: 100%; 
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr; /* apenas 1 coluna */
    max-width: 100%; /* ocupa toda a largura */
  }
`;
