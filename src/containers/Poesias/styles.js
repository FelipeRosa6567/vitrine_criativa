import styled from "styled-components";

export const ContainerMain = styled.div`
  padding: 50px 20px;
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;
`;

export const Section = styled.section`
  margin: 50px auto;
  padding: 0 20px;
  max-width: 1200px;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.6rem;
  border-left: 4px solid #4d7cfe;
  padding-left: 10px;
`;

export const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

export const Card = styled.div`
  background: #1e1e2f;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  margin: 0 0 6px;
  font-size: 1.3rem;
`;

export const CardAuthor = styled.p`
  font-style: italic;
  opacity: 0.8;
  margin: 4px 0 12px;
`;

export const CardText = styled.div`
  line-height: 1.5;
  font-size: 0.95rem;
  white-space: pre-line;
`;

export const SearchWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 20px 0 30px;
  flex-wrap: wrap;
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
    background: #4d7cfe;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Estilizando paginação
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
    background: #4d7cfe;
    font-weight: bold;
  }

  .pagination li:hover {
    background: #444;
  }
`;
