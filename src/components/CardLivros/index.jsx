import { Container } from "./styles.js";

function CardLivros({ title, autor, img }) {
  return (
    <>
      <Container>
        
        <img src={img} alt="imagem-projeto" />
        <p>{title}</p>
        <p>{autor}</p>
        
      </Container>
    </>
  );
}
export default CardLivros;
