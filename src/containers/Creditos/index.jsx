import React from "react";
import { Instagram, Linkedin, Phone } from "lucide-react";
import {
  ContainerMain,
  Container,
  Title,
  CreatorsGrid,
  CreatorCard,
  CreatorImage,
  CreatorName,
  CreatorTitle,
  CreatorBio,
  ContactIcons,
  ContactLink,
} from "./styles";

function Creditos() {
  const creators = [
    {
      nome: "Daniel Guimarães",
      titulo: "Desenvolvedor Full Stack",
      resumo:
        "Daniel é responsável pela arquitetura do projeto e implementação das principais funcionalidades.",
      imagem: "/vitrine_criativa/creators/Daniel.png",
      instagram: "https://instagram.com/eiguimaraesdaniel",
      linkedin: "https://linkedin.com/in/danielguimaraespedrozo",
      telefone: "5551995531047", // formato com DDI + DDD + número
    },
    {
      nome: "Felipe Rosa",
      titulo: "Designer e Ilustrador",
      resumo:
        "Felipe criou o design visual e todos os elementos gráficos do site.",
      imagem: "/vitrine_criativa/creators/Felipe.jpg",
      instagram: "https://www.instagram.com/fillips_rosa/",
      instagram2: "https://www.instagram.com/fillips_oliginal/",
      linkedin: "https://www.linkedin.com/in/felipe-g-rosa/",
      telefone: "",
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

                <ContactIcons>
                  {creator.instagram && (
                    <ContactLink
                      href={creator.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram size={25} />
                    </ContactLink>
                  )}
                  {creator.instagram2 && (
                    <ContactLink
                      href={creator.instagram2}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram size={25} />
                    </ContactLink>
                  )}
                  {creator.linkedin && (
                    <ContactLink
                      href={creator.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={25} />
                    </ContactLink>
                  )}
                  {creator.telefone && (
                    <ContactLink
                      href={`https://wa.me/${creator.telefone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone size={25} />
                    </ContactLink>
                  )}
                </ContactIcons>
              </CreatorCard>
            ))}
          </CreatorsGrid>
        </Container>
      </ContainerMain>
    </>
  );
}

export default Creditos;
