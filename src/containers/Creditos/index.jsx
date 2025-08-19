import React from "react";
import {
  ContainerMain,
  SectionTitle,
  CreatorsList,
  Creator,
} from "./styles";

function Creditos() {
  const creators = [{ nome: "Daniel" }, { nome: "Felip Rosa" }];

  return (
    <>
      <ContainerMain>
        <SectionTitle>Autores da Pagina</SectionTitle>
        <CreatorsList>
          {creators.map((creator, index) => (
            <Creator key={index}>{creator.nome}</Creator>
          ))}
        </CreatorsList>
      </ContainerMain>
    </>
  );
}

export default Creditos;
