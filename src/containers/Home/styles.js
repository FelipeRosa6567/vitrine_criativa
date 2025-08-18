import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerMain = styled.div`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;

  h1 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 2rem;
  }
`;

export const Section = styled.section`
  margin: 50px 0;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const Card = styled.div`
  background: #1e1e2f;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  text-align: ${(props) => (props.$center ? "center" : "left")};
`;

export const CardTitle = styled.h3`
  margin: 0 0 4px;
  font-size: 1.2rem;
`;

export const CardAuthor = styled.p`
  font-style: italic;
  opacity: 0.8;
  margin: 4px 0 12px;
`;

export const CardText = styled.p`
  line-height: 1.4;
  font-size: 0.95rem;
`;

export const CardImage = styled.img`
  max-width: 100%;
  height: 300px;
  border-radius: 8px;
  margin-bottom: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
`;

export const SeeAllLink = styled(Link)`
  display: block;
  margin-top: 15px;
  text-align: right;
  color: #6c5ce7;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
