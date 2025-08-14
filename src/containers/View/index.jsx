import {
  ContainerMain,
  ContainerViewLivros,
  ContainerFoto,
  ContainerDescricao,
} from "./styles";
import { useParams, useLocation } from "react-router-dom";
import Modal from "../../components/Modal";

import { useState } from "react";
import { Container } from "../../components/Modal/styles";

function View() {
  const { id } = useParams();
  const { state } = useLocation();

  const [showModal, setShowModal] = useState(false);

  const pdfFile = `/vitrine_criativa/livros/${id}.pdf`;

  return (
    <ContainerMain style={{ textAlign: "center", padding: "20px" }}>
      {showModal && <Modal pdfFile={pdfFile} setShowModal={setShowModal} />}
      <h2>
        <span>{state?.titulo} </span>
      </h2>
      <ContainerViewLivros>
        <ContainerFoto>
          <img src={state?.img} alt="" />
          <h2>
            <span>Autor:</span> {state?.autor}
          </h2>
        </ContainerFoto>
        <ContainerDescricao>
          <p>
            <span>Descrição: </span>
            {state?.descricao}
          </p>
          <button onClick={() => setShowModal(true)}>Abrir Livro</button>
        </ContainerDescricao>
      </ContainerViewLivros>
    </ContainerMain>
  );
}

export default View;
