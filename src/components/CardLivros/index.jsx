import { Container } from "./styles.js";
import { useNavigate } from "react-router-dom";

function CardLivros({ title, autor, img, id }) {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <img
          onClick={() =>
            navigate(`/view/${id}`, {
              state: { titulo:title, autor: autor },
            })
          }
          src={img}
          alt="imagem-projeto"
        />
        <p>Titulo: {title}</p>
        <p>Autor: {autor}</p>
      </Container>
    </>
  );
}
export default CardLivros;
