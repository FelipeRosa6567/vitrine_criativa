import {
  ContainerMain,
  ContainerViewLivros,
  ContainerFoto,
  ContainerDescricao,
} from "./styles";
import Modal from "../../components/Modal";

import diario from "../../assets/livros/O diario perdido.png";
import { useState } from "react";

function Creditos() {

  


  const [showModal, setShowModal] = useState(false);

  const pdfFile = `/vitrine_criativa/livros/diario.pdf`;

  return (
    <>
      <ContainerMain>
        <ContainerMain style={{ textAlign: "center", padding: "20px" }}>
          {showModal && <Modal pdfFile={pdfFile} setShowModal={setShowModal} />}
          <h2>
            <span>O diario perdido dos meus poemas </span>
          </h2>
          <ContainerViewLivros>
            <ContainerFoto>
              <img src={diario} alt="" />
              <h2>
                <span>Autor:</span>Felipe Rosa
              </h2>
            </ContainerFoto>
            <ContainerDescricao>
              <p>
                <span>Descrição : </span>
               `Algumas palavras não nascem para serem apenas lidas, elas chegam
                  como tempestades, invadem o peito e só encontram abrigo no papel.
                  Este diário é feito dessas tempestades e calmarias, de versos que
                  carregam a fúria do mar e o silêncio da madrugada`
              </p>
              <button onClick={() => setShowModal(true)}>Abrir Livro</button>
            </ContainerDescricao>
          </ContainerViewLivros>
        </ContainerMain>
      </ContainerMain>
    </>
  );
}

export default Creditos;
