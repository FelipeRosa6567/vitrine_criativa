import { ContainerMain } from "./styles";
import { useParams, useLocation } from "react-router-dom";
import Modal from "../../components/Modal";

import { useState } from "react";

function View() {
  const { id } = useParams();
  const { state } = useLocation();

  const [showModal, setShowModal] = useState(false);

  const pdfFile = `/vitrine_criativa/livros/${id}.pdf`;

  return (
      <ContainerMain style={{ textAlign: "center", padding: "20px" }}>
        {showModal && <Modal pdfFile={pdfFile} setShowModal={setShowModal} />}
        <h2>Visualizando: {state?.titulo} </h2>
        <h2>Autor: {state?.autor}</h2>
        <button onClick={() => setShowModal(true)}>Abrir Livro</button>
      </ContainerMain>
  );
}

export default View;
