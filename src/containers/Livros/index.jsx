import { useState, useEffect } from "react";
import { ContainerMain, ContainerLivros, PaginationWrapper } from "./styles";
import CardLivros from "../../components/CardLivros";
import ReactPaginate from "react-paginate";

// Importa o JSON diretamente
import livrosData from "../../data/livros.json";

const livrosPerPage = 12;

// Função para normalizar strings
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
      <h1 style={{ textAlign: "center" }}>Exposição de livros</h1>

      <div
        style={{
          display: "flex",
          gap: "8px",
          justifyContent: "center",
          alignItems: "center",
          margin: "16px 0 20px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Buscar por título ou autor..."
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "50%",
            maxWidth: "400px",
            color: "#000",
          }}
        />
        <button
          onClick={handleBuscar}
          style={{
            padding: "10px 14px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            width: "20%",
            maxWidth: "400px",
            color: "#000",
          }}
        >
          Buscar
        </button>
        <button
          onClick={handleLimpar}
          style={{
            padding: "10px 14px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            opacity: busca ? 1 : 0.6,
            width: "20%",
            maxWidth: "400px",
            color: "#000",
          }}
          disabled={!busca}
        >
          Limpar
        </button>
      </div>

      <hr
        style={{
          border: "none",
          height: "2px",
          backgroundColor: "#ffffff",
          width: "130%",
        }}
      />

      <ContainerLivros>
        {currentItems.length > 0 ? (
          currentItems.map((livro) => (
            <CardLivros key={livro.id} livro={livro} />
          ))
        ) : (
          <p style={{ color: "#fff", textAlign: "center" }}>
            Nenhum livro encontrado.
          </p>
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
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </PaginationWrapper>
      )}
    </ContainerMain>
  );
}

export default Livros;
