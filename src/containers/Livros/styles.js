import styled from "styled-components";

export const ContainerMain = styled.div`
   padding: 50px 20px;
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;
  /* background-color: #0f0f1f; */

  @media (max-width: 768px) {
    padding: 100px 20px;
  }
  @media (max-width: 450px) {
    padding: 80px 10px;
  }
`;

export const ContainerLivros = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: calc(4 * 250px + 3 * 1rem);
  width: 100%;
  

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 100%;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0 30px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 50%;
  max-width: 400px;
  color: #000;
`;

export const SearchButton = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: #4d7cfe;
  color: #fff;
  transition: 0.2s;

  &:hover:not(:disabled) {
    background: #3b6edc;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
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

export const Section = styled.section`
  margin: 50px auto;
  padding: 0 20px;
  max-width: 1200px;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.2rem;
  border-left: 4px solid #4d7cfe;
  padding-left: 10px;
`;