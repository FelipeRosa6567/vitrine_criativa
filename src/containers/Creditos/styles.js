import styled from "styled-components";

export const ContainerMain = styled.div`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 50px;
  color: #ffffffff;
  background-color: #000;
`;

export const CreatorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 1000px;
`;

export const CreatorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1e1e2f;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.1);
  text-align: center;
`;

export const CreatorImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const CreatorName = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #fff;
`;

export const CreatorTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 15px;
  color: #555;
`;

export const CreatorBio = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;