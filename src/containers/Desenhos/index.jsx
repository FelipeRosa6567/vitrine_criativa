import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { ContainerMain, GridImagens, Imagem } from "./styles";
import desenhosData from "../../data/desenhos.json";

function Desenhos() {
  const location = useLocation();
  const [busca, setBusca] = useState("");
  const [resultados, setResultados] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [imagensPerPage, setImagensPerPage] = useState(18);

  // ✅ Flatten JSON e gerar src correto para Vite
  const imagens = useMemo(() => {
    return desenhosData
      .flatMap(autorObj =>
        autorObj.desenhos.map(d => ({
          ...d,
          autor: autorObj.autor,
          src: new URL(d.src, import.meta.url).href
        }))
      )
      .sort((a, b) => new Date(b.data) - new Date(a.data));
  }, []);

  useEffect(() => {
    setResultados(imagens);
  }, [imagens]);

  useEffect(() => {
    const updatePerPage = () => {
      if (window.innerWidth < 768) setImagensPerPage(6);
      else if (window.innerWidth < 1024) setImagensPerPage(12);
      else setImagensPerPage(18);
    };
    updatePerPage();
    window.addEventListener("resize", updatePerPage);
    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  useEffect(() => {
    setBusca("");
    setResultados(imagens);
    setCurrentPage(0);
  }, [location.pathname, imagens]);

  const handleBuscar = () => {
    const q = busca.trim().toLowerCase();
    setResultados(
      q
        ? imagens.filter(
            (img) =>
              img.autor.toLowerCase().includes(q) ||
              (img.titulo && img.titulo.toLowerCase().includes(q))
          )
        : imagens
    );
    setCurrentPage(0);
  };

  const handleLimpar = () => {
    setBusca("");
    setResultados(imagens);
    setCurrentPage(0);
  };

  const onKeyDown = (e) => e.key === "Enter" && handleBuscar();

  const pageCount = Math.ceil(resultados.length / imagensPerPage);
  const offset = currentPage * imagensPerPage;
  const currentItems = resultados.slice(offset, offset + imagensPerPage);

  const handlePageClick = (event) => setCurrentPage(event.selected);

  return (
    <ContainerMain>
      <h2 style={{ textAlign: "center" }}>Desenhos</h2>

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
          placeholder="Buscar por autor ou título..."
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
          disabled={!busca}
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

      <GridImagens>
        {currentItems.length > 0 ? (
          currentItems.map((img, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <Imagem src={img.src} alt={img.titulo || img.autor} />
              <p style={{ color: "#fff", marginTop: "6px" }}>
                <strong>{img.titulo}</strong> <br />
                <em>{img.autor}</em>
              </p>
            </div>
          ))
        ) : (
          <p style={{ color: "#fff", textAlign: "center" }}>
            Nenhum desenho encontrado.
          </p>
        )}
      </GridImagens>

      {pageCount > 1 && (
        <ReactPaginate
          previousLabel={"← Anterior"}
          nextLabel={"Próxima →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          forcePage={currentPage}
        />
      )}
    </ContainerMain>
  );
}

export default Desenhos;
