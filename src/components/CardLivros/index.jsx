import { Container, CardAuthor, CardTitle } from "./styles.js";
import { useNavigate } from "react-router-dom";

function CardLivros({livro }) {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <img
          onClick={() =>
            navigate(`/view/${livro.id}`, {
              state: { titulo:livro.title, autor: livro.autor, img: livro.img, descricao: livro.descricao },
            })
          }
          src={livro.img}
          alt="imagem-projeto"
        />
       
        <CardTitle>{livro.title}</CardTitle>
        <CardAuthor> {livro.autor}</CardAuthor>
      </Container>
    </>
  );
}
export default CardLivros;
