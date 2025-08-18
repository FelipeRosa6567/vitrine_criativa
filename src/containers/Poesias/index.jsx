import React, { useState } from "react";
import { ContainerMain, ContainerPoemas } from "./styles";
import ReactPaginate from "react-paginate";
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
  const [resultados, setResultados] = useState(poesiasData); // agora vem do JSON

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
      <h1 style={{ textAlign: "center" }}>Exposição de Poesias</h1>

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

      <ContainerPoemas>
        {currentItems.length > 0 ? (
          currentItems.map((item, i) => (
            <li key={`${item.titulo}-${i}`}>
              <p><strong>{item.titulo}</strong></p>
              <br />
              {item.poema.map((linha, index) => (
                <p key={index}>{linha}</p>
              ))}
              <br />
              <p>-- {item.autor}</p>
            </li>
          ))
        ) : (
          <p style={{ color: "#fff", textAlign: "center" }}>
            Nenhum poema encontrado.
          </p>
        )}
      </ContainerPoemas>

      {pageCount > 1 && (
        <ReactPaginate
          previousLabel={"← Anterior"}
          nextLabel={"Próxima →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      )}
    </ContainerMain>
  );
}

export default Poesias;
