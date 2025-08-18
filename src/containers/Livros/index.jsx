import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import {
  ContainerMain,
  ContainerLivros,
  PaginationWrapper,
  SearchWrapper,
  SearchInput,
  SearchButton,
  Section,
  SectionTitle
} from "./styles";
import CardLivros from "../../components/CardLivros";
import livrosData from "../../data/livros.json";

const livrosPerPage = 12;

const normalize = (s = "") =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

function Livros() {
  const [busca, setBusca] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [resultados, setResultados] = useState(livrosData);

  useEffect(() => {
    setResultados(livrosData);
  }, []);

  const handleBuscar = () => {
    const q = normalize(busca.trim());
    if (!q) {
      setResultados(livrosData);
    } else {
      const filtrados = livrosData.filter(
        (item) =>
          normalize(item.title).includes(q) || normalize(item.autor).includes(q)
      );
      setResultados(filtrados);
    }
    setCurrentPage(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLimpar = () => {
    setBusca("");
    setResultados(livrosData);
    setCurrentPage(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageCount = Math.ceil(resultados.length / livrosPerPage);
  const offset = currentPage * livrosPerPage;
  const currentItems = resultados.slice(offset, offset + livrosPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") handleBuscar();
  };

  return (
    <ContainerMain>
      <Section>
        <SectionTitle><h1>📚 Exposição de Livros</h1></SectionTitle>

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


      <ContainerLivros>
        {currentItems.length > 0 ? (
          currentItems.map((livro) => <CardLivros key={livro.id} livro={livro} />)
        ) : (
          <p style={{ color: "#fff", textAlign: "center" }}>Nenhum livro encontrado.</p>
        )}
      </ContainerLivros>

      {pageCount > 1 && (
        <PaginationWrapper>
          <ReactPaginate
            previousLabel={"←"}
            nextLabel={"→"}
            breakLabel={"..."}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName="pagination"
            activeClassName="active"
          />
        </PaginationWrapper>
      )}
      </Section>
    </ContainerMain>
  );
}

export default Livros;
