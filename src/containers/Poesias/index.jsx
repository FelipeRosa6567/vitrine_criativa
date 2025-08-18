// Poesias.jsx
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import {
  Section,
  SectionTitle,
  Grid,
  Card,
  CardTitle,
  CardAuthor,
  CardText,
  SearchWrapper,
  SearchInput,
  SearchButton,
  PaginationWrapper,
  ContainerMain
} from "./styles";
import poesiasData from "../../data/poesias.json";

const itemsPerPage = 12;

// Função para normalizar strings (remove acentos e deixa minúsculo)
const normalize = (s = "") =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

function Poesias() {
  const [busca, setBusca] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [resultados, setResultados] = useState(poesiasData);

  const handleBuscar = () => {
    const q = normalize(busca.trim());
    if (!q) {
      setResultados(poesiasData);
    } else {
      const filtrados = poesiasData.filter(
        (item) =>
          normalize(item.titulo).includes(q) ||
          normalize(item.autor).includes(q) ||
          item.poema.some((linha) => normalize(linha).includes(q))
      );
      setResultados(filtrados);
    }
    setCurrentPage(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLimpar = () => {
    setBusca("");
    setResultados(poesiasData);
    setCurrentPage(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageCount = Math.ceil(resultados.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = resultados.slice(offset, offset + itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onKeyDown = (e) => e.key === "Enter" && handleBuscar();

  return (
    <ContainerMain>
      <Section>
        <SectionTitle>✨ Exposição de Poesias</SectionTitle>

        <SearchWrapper>
          <SearchInput
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Buscar por título ou autor..."
          />
          <SearchButton onClick={handleBuscar}>Buscar</SearchButton>
          <SearchButton onClick={handleLimpar} disabled={!busca}>
            Limpar
          </SearchButton>
        </SearchWrapper>

        <Grid>
          {currentItems.length > 0 ? (
            currentItems.map((item, i) => (
              <Card key={`${item.titulo}-${i}`}>
                <CardTitle>{item.titulo}</CardTitle>
                <CardAuthor>— {item.autor}</CardAuthor>
                <CardText>
                  {item.poema.map((linha, index) => (
                    <span key={index}>
                      {linha}
                      <br />
                    </span>
                  ))}
                </CardText>
              </Card>
            ))
          ) : (
            <p style={{ color: "#fff", textAlign: "center" }}>
              Nenhum poema encontrado.
            </p>
          )}
        </Grid>

        {pageCount > 1 && (
          <PaginationWrapper>
            <ReactPaginate
              previousLabel={"←"}
              nextLabel={"→"}
              breakLabel={"..."}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </PaginationWrapper>
        )}
      </Section>
    </ContainerMain>
  );
}

export default Poesias;
