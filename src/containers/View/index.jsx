import { ContainerMain } from "./styles";
import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "./pageFlipBook.css";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

function View() {
  const { id } = useParams();
  const { state } = useLocation();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState("next");

  const pdfFile = `/vitrine_criativa/livros/${id}.pdf`;
 
  

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(newPage, direction) {
    setFlipDirection(direction);
    setIsFlipping(true);

    // tempo para a rotação terminar
    setTimeout(() => {
      setPageNumber(newPage);
      setIsFlipping(false);
    }, 600);
  }

  return (
    <ContainerMain style={{ textAlign: "center", padding: "20px" }}>
      <h2>Visualizando:  {state?.titulo} </h2>
      <h2>Autor: {state?.autor}</h2>

      <div className="book-container">
        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
          <div className="book">
            {/* Página esquerda */}
            <div
              className={`page left ${
                flipDirection === "prev" && isFlipping ? "flip-left" : ""
              }`}
            >
              {pageNumber > 1 && <Page pageNumber={pageNumber - 1} />}
            </div>

            {/* Página direita */}
            <div
              className={`page right ${
                flipDirection === "next" && isFlipping ? "flip-right" : ""
              }`}
            >
              <Page pageNumber={pageNumber}  />
            </div>
          </div>
        </Document>
      </div>

      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => changePage(Math.max(pageNumber - 1, 1), "prev")}
          disabled={pageNumber <= 1 || isFlipping}
        >
          Página Anterior
        </button>
        <span style={{ margin: "0 10px" }}>
          Página {pageNumber} de {numPages}
        </span>
        <button
          onClick={() =>
            changePage(Math.min(pageNumber + 2, numPages), "next")
          }
          disabled={pageNumber >= numPages || isFlipping}
        >
          Próxima Página
        </button>
      </div>
    </ContainerMain>
  );
}

export default View;
