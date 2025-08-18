import styled from "styled-components";

export const ContainerMain = styled.div`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.6rem;
  border-left: 4px solid #6c5ce7;
  padding-left: 10px;
`;

export const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  @media (max-width: 768px) {
    width: 75%;
    max-width: 300px; 
    margin: 0 auto;
    
    }
`;

export const Card = styled.div`
  background: #1e1e2f;
  border-radius: 10px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  text-align: ${(props) => (props.$center ? "center" : "left")};
`;

export const CardImage = styled.img`
  max-width: 100%;
  height: 250px;
  border-radius: 8px;
  margin-bottom: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
`;

export const CardAuthor = styled.p`
  font-style: italic;
  opacity: 0.8;
  margin: 4px 0 0;
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
