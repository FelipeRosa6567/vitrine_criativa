import { useState } from "react";

import { Container, Background, Icone } from "./styles.js";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "./pageFlipBook.css";

function Modal({ pdfFile, setShowModal }) {

  pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;  
  

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState("next");


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
    }, 250);
  }

  return (
    <Background onClick={() => setShowModal(false)}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Icone onClick={() => setShowModal(false)} />

        {pdfFile && (
          <>
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
                    <Page pageNumber={pageNumber} />
                  </div>
                </div>
              </Document>
            </div>

            <div style={{ marginTop: "10px", zIndex: 1000 }}>
              <button
                onClick={() => changePage(Math.max(pageNumber - 2, 1), "prev")}
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
          </>
        )}
      </Container>
    </Background>
  );
}

export default Modal;
