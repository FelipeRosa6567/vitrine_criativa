import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import {
  ContainerMain,
  SectionTitle,
  Grid,
  Card,
  CardImage,
  CardAuthor,
  PaginationWrapper,
} from "./styles";

import desenhosData from "../../data/desenhos.json";

function Desenhos() {
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(18);
  const [desenhosFlatten, setDesenhosFlatten] = useState([]);

  useEffect(() => {
    // Responsividade: define quantos itens por página
    const updatePerPage = () => {
      if (window.innerWidth < 768) {
        setPerPage(6);
      } else if (window.innerWidth < 1024) {
        setPerPage(12);
      } else {
        setPerPage(18);
      }
    };

    updatePerPage();
    window.addEventListener("resize", updatePerPage);

    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  useEffect(() => {
    // "achata" o json: [{autor, desenhos:[...]}, ...] => [{autor, ...desenho}]
    const flatten = desenhosData.flatMap((autorObj) =>
      (autorObj.desenhos || []).map((d) => ({
        ...d,
        autor: autorObj.autor,
        src: new URL(d.src, import.meta.url).href,
      }))
    );

    setDesenhosFlatten(flatten);
  }, []);

  const offset = currentPage * perPage;
  const currentItems = desenhosFlatten.slice(offset, offset + perPage);
  const pageCount = Math.ceil(desenhosFlatten.length / perPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ContainerMain>
      <SectionTitle>🎨 Galeria de Desenhos</SectionTitle>

      <Grid>
        {currentItems.map((desenho, idx) => (
          <Card key={`${desenho.src}-${idx}`} $center>
            <CardImage src={desenho.src} alt={desenho.titulo} />
            <CardAuthor>{desenho.autor}</CardAuthor>
          </Card>
        ))}
      </Grid>

      <PaginationWrapper>
        <ReactPaginate
          previousLabel={"←"}
          nextLabel={"→"}
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </PaginationWrapper>
    </ContainerMain>
  );
}

export default Desenhos;
