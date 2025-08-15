import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { ContainerMain, GridImagens, Imagem } from "./styles";

function Desenhos() {
  const [busca, setBusca] = useState("");
  const [resultados, setResultados] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [imagensPerPage, setImagensPerPage] = useState(18); // valor padrão desktop

  // Importa todas as imagens
  const imagensImportadas = import.meta.glob(
    "/src/assets/desenhos/*.{png,jpg,jpeg}",
    { eager: true }
  );

  // Gera array de imagens
  const imagens = Object.entries(imagensImportadas).map(([caminho, mod]) => {
    const nomeArquivo = caminho.split("/").pop().split(".")[0];
    return { src: mod.default, nome: nomeArquivo.toLowerCase() };
  });

  // Inicializa resultados com todas as imagens
  useEffect(() => {
    setResultados(imagens);
  }, [imagens]);

  // Ajusta imagens por página dependendo do tamanho da tela
  useEffect(() => {
    const updatePerPage = () => {
      if (window.innerWidth < 768) {
        setImagensPerPage(6); // mobile
      } else if (window.innerWidth < 1024) {
        setImagensPerPage(12); // tablet
      } else {
        setImagensPerPage(18); // desktop
      }
    };

    updatePerPage();
    window.addEventListener("resize", updatePerPage);

    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  const handleBuscar = () => {
    const q = busca.trim().toLowerCase();
    if (!q) {
      setResultados(imagens);
    } else {
      const filtradas = imagens.filter((img) => img.nome.includes(q));
      setResultados(filtradas);
    }
    setCurrentPage(0);
  };

  const handleLimpar = () => {
    setBusca("");
    setResultados(imagens);
    setCurrentPage(0);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") handleBuscar();
  };

  // Paginação
  const pageCount = Math.ceil(resultados.length / imagensPerPage);
  const offset = currentPage * imagensPerPage;
  const currentItems = resultados.slice(offset, offset + imagensPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

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
          placeholder="Buscar por autor..."
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

      <GridImagens>
        {currentItems.length > 0 ? (
          currentItems.map((img, index) => (
            <Imagem key={index} src={img.src} alt={img.nome} />
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
