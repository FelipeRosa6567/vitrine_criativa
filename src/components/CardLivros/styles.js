import styled from "styled-components";

export const Container = styled.div`
  margin-top: 25px;
  width: 220px;
  padding: 20px 12px;
  border-radius: 10px;
  background: #2c2c3e;
  cursor: pointer;
  background-color: #0f0f1f;

  img {
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
    padding: 0 10px;
    border-radius: 30px;
    cursor: pointer;
  }
  p {
    text-align: center;
    margin: 10px 0;
  }
  @media (max-width: 768px) {
    width: 75%;
    max-width: 300px; 
    display: block;
    margin: 0 auto;
    
    }
`;

export const CardAuthor = styled.p`
  font-style: italic;
  opacity: 0.8;
  margin: 4px 0 0;
`;
export const CardTitle = styled.h3`
  margin: 0 0 6px;
  font-size: 0.9rem;
`;