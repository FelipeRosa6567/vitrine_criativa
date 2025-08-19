import React from "react";
import { ContainerMain, Container, Title, CreatorsGrid, CreatorCard, CreatorImage, CreatorName, CreatorTitle, CreatorBio } from "./styles";

function Creditos() {
  const creators = [
    {
      nome: "Daniel",
      titulo: "Desenvolvedor Full Stack",
      resumo:
        "Daniel é responsável pela arquitetura do projeto e implementação das principais funcionalidades.",
      imagem: "/vitrine_criativa/creators/Daniel.png", // coloque a imagem na pasta public/assets/creators
    },
    {
      nome: "Felipe Rosa",
      titulo: "Designer e Ilustrador",
      resumo:
        "Felipe criou o design visual e todos os elementos gráficos do site.",
      imagem: "/vitrine_criativa/creators/felip.jpg",
    },
  ];

  return (
    <>
      <ContainerMain>
        <Container>
          <Title>Créditos</Title>
          <CreatorsGrid>
            {creators.map((creator, index) => (
              <CreatorCard key={index}>
                <CreatorImage src={creator.imagem} alt={creator.nome} />
                <CreatorName>{creator.nome}</CreatorName>
                <CreatorTitle>{creator.titulo}</CreatorTitle>
                <CreatorBio>{creator.resumo}</CreatorBio>
              </CreatorCard>
            ))}
          </CreatorsGrid>
        </Container>
      </ContainerMain>
    </>
  );
}

export default Creditos;
