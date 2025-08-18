import { Link } from "react-router-dom";
import {
  ContainerMain,
  Section,
  SectionTitle,
  Grid,
  Card,
  CardTitle,
  CardAuthor,
  CardText,
  CardImage,
  SeeAllLink,
} from "./styles";

import CardLivros from "../../components/CardLivros";

import livrosData from "../../data/livros.json";
import poemasData from "../../data/poesias.json";
import desenhosData from "../../data/desenhos.json";

// Helper: preview de poema
function getPoemPreview(item, max = 140) {
  if (!item) return "";
  if (Array.isArray(item.poema)) {
    const joined = item.poema.join(" ").trim();
    return joined.length > max ? joined.slice(0, max) + "..." : joined;
  }
  const text = item.texto ?? item.poema ?? "";
  const s = String(text);
  return s.length > max ? s.slice(0, max) + "..." : s;
}

function safeDate(d) {
  const t = Date.parse(d);
  return Number.isNaN(t) ? 0 : t;
}

function Home() {
  const livrosRecentes = [...livrosData].slice(0, 4);

  const poemasRecentes = [...poemasData].slice(0, 3);

  const desenhosFlatten = desenhosData
    .flatMap((autorObj) =>
      (autorObj.desenhos || []).map((d) => ({
        ...d,
        autor: autorObj.autor,
        src: new URL(d.src, import.meta.url).href,
      }))
    )
    .sort((a, b) => safeDate(b.data) - safeDate(a.data));
  const desenhosRecentes = desenhosFlatten.slice(0, 4);

  return (
    <ContainerMain>
      <h1>Bem-vindo à Vitrine Criativa</h1>

      {/* Poemas */}
      <Section>
        <SectionTitle>✨ Poemas Recentes</SectionTitle>
        <Grid>
          {poemasRecentes.map((poema, idx) => (
            <Card key={`${poema.titulo}-${idx}`}>
              <CardTitle>{poema.titulo}</CardTitle>
              <CardAuthor>— {poema.autor}</CardAuthor>
              <CardText>{getPoemPreview(poema)}</CardText>
            </Card>
          ))}
        </Grid>
        <SeeAllLink
          to="/poesias"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Ver todos os poemas →
        </SeeAllLink>
      </Section>

      {/* Livros */}
      <Section>
        <SectionTitle>📚 Livros Recentes</SectionTitle>
        <Grid>
          {livrosRecentes.map((livro) => (
            <CardLivros key={livro.id} livro={livro} />
          ))}
        </Grid>
        <SeeAllLink
          to="/livros"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Ver todos os livros →
        </SeeAllLink>
      </Section>

      {/* Desenhos */}
      <Section>
        <SectionTitle>🎨 Desenhos Recentes</SectionTitle>
        <Grid>
          {desenhosRecentes.map((desenho, idx) => (
            <Card key={`${desenho.src}-${idx}`} $center>
              <CardImage src={desenho.src} alt={desenho.titulo} />
              <CardAuthor>{desenho.autor}</CardAuthor>
            </Card>
          ))}
        </Grid>
        <SeeAllLink
          to="/desenhos"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Ver todos os desenhos →
        </SeeAllLink>
      </Section>
    </ContainerMain>
  );
}

export default Home;
