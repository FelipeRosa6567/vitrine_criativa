import { useState } from "react";
import { ContainerMain, ContainerLivros } from "./styles";
import CardLivros from "../../components/CardLivros";
import ReactPaginate from "react-paginate";

import diario from "../../assets/livros/O diario perdido.png";
import aartedaguerra from "../../assets/livros/aartedaguerra.jpg";
import alicepaismaravilhas from "../../assets/livros/alicepaismaravilhas.jpg";
import romeuejulieta from "../../assets/livros/romeuejulieta.jpg";
import meninomaluquinho from "../../assets/livros/meninomaluquinho.jpg";
import monica_agua_boa from "../../assets/livros/monica_agua_boa.jpg";

const livros = [
  {
    img: diario,
    title: "O diario perdido dos meus poemas",
    autor: "Felipe Rosa",
    id: "diario",
    descricao: `Algumas palavras não nascem para serem apenas lidas, elas chegam
                  como tempestades, invadem o peito e só encontram abrigo no papel.
                  Este diário é feito dessas tempestades e calmarias, de versos que
                  carregam a fúria do mar e o silêncio da madrugada`,
  },
  {
    img: aartedaguerra,
    title: "A arte da Guerra",
    autor: "SUN TZU",
    id: "aartedaguerra",
    descricao:
      "Filósofo que se tornou general cujo nome individual era Wu, nasceu no Estado de Ch’i na China, próximo de 500 a.C., em um auge das ciências militares e legislativas daquele país. Sun Tzu escreveu a “Arte da Guerra”.",
  },
  {
    img: alicepaismaravilhas,
    title: "Alice no País das Maravilhas",
    autor: "Lewis Carroll",
    id: "alicepaismaravilhas",
    descricao:
      "Charles Lutwidge Dodgson mais conhecido como CARROLL, LEWIS, seu nome está inscrito na história da literatura mundial por ser o autor de Alice no País das Maravilhas, o mais estranho e fascinante livro para crianças jamais escrito.",
  },
  {
    img: romeuejulieta,
    title: "Romeu e Julieta",
    autor: "William Shakespeare",
    id: "romeuejulieta",
    descricao:
      "Há muito tempo duas famílias banham em sangue as ruas de Verona. Enquanto isso, na penumbra das madrugadas, ardem as brasas de um amor secreto. Romeu, filho dos Montéquio, e Julieta, desafiam a rixa familiar e sonham com um impossível futuro, longe da violência e da loucura.",
  },
  {
    img: meninomaluquinho,
    title: "O Menino Maluquinho",
    autor: "Ziraldo",
    id: "meninomaluquinho",
    descricao:
      "Nessa versão disponibilizada, gratuitamente, pelo grande Ziraldo, verso e desenho contam a história de um menino traquinas que aprontava muita confusão. Alegria da casa, liderava a garotada, era sabido e um amigão. Fazia versinhos, canções, inventava brincadeiras.",
  },
  {
    img: monica_agua_boa,
    title: "Monica e a Agua Boa",
    autor: "Mauricio de Sousa",
    id: "monica_agua_boa",
    descricao:
      "A Turma da Mônica ensina de forma divertida a importância da água potável para a saúde. Com histórias cativantes, os personagens mostram como preservar esse recurso essencial para o planeta e o bem-estar de todos.",
  },
  ////////////////////////////////////////////////
   {
    img: diario,
    title: "O diario perdido dos meus poemas",
    autor: "Felipe Rosa",
    id: "diario2",
    descricao: `Algumas palavras não nascem para serem apenas lidas, elas chegam
                  como tempestades, invadem o peito e só encontram abrigo no papel.
                  Este diário é feito dessas tempestades e calmarias, de versos que
                  carregam a fúria do mar e o silêncio da madrugada`,
  },
  {
    img: aartedaguerra,
    title: "A arte da Guerra",
    autor: "SUN TZU",
    id: "aartedaguerra2",
    descricao:
      "Filósofo que se tornou general cujo nome individual era Wu, nasceu no Estado de Ch’i na China, próximo de 500 a.C., em um auge das ciências militares e legislativas daquele país. Sun Tzu escreveu a “Arte da Guerra”.",
  },
  {
    img: alicepaismaravilhas,
    title: "Alice no País das Maravilhas",
    autor: "Lewis Carroll",
    id: "alicepaismaravilhas2",
    descricao:
      "Charles Lutwidge Dodgson mais conhecido como CARROLL, LEWIS, seu nome está inscrito na história da literatura mundial por ser o autor de Alice no País das Maravilhas, o mais estranho e fascinante livro para crianças jamais escrito.",
  },
  {
    img: romeuejulieta,
    title: "Romeu e Julieta",
    autor: "William Shakespeare",
    id: "romeuejulieta2",
    descricao:
      "Há muito tempo duas famílias banham em sangue as ruas de Verona. Enquanto isso, na penumbra das madrugadas, ardem as brasas de um amor secreto. Romeu, filho dos Montéquio, e Julieta, desafiam a rixa familiar e sonham com um impossível futuro, longe da violência e da loucura.",
  },
  {
    img: meninomaluquinho,
    title: "O Menino Maluquinho",
    autor: "Ziraldo",
    id: "meninomaluquinho2",
    descricao:
      "Nessa versão disponibilizada, gratuitamente, pelo grande Ziraldo, verso e desenho contam a história de um menino traquinas que aprontava muita confusão. Alegria da casa, liderava a garotada, era sabido e um amigão. Fazia versinhos, canções, inventava brincadeiras.",
  },
  {
    img: monica_agua_boa,
    title: "Monica e a Agua Boa",
    autor: "Mauricio de Sousa",
    id: "monica_agua_boa2",
    descricao:
      "A Turma da Mônica ensina de forma divertida a importância da água potável para a saúde. Com histórias cativantes, os personagens mostram como preservar esse recurso essencial para o planeta e o bem-estar de todos.",
  },
  ////////////////////////////////////////////////
   {
    img: diario,
    title: "O diario perdido dos meus poemas",
    autor: "Felipe Rosa",
    id: "diario3",
    descricao: `Algumas palavras não nascem para serem apenas lidas, elas chegam
                  como tempestades, invadem o peito e só encontram abrigo no papel.
                  Este diário é feito dessas tempestades e calmarias, de versos que
                  carregam a fúria do mar e o silêncio da madrugada`,
  },
  {
    img: aartedaguerra,
    title: "A arte da Guerra",
    autor: "SUN TZU",
    id: "aartedaguerra3",
    descricao:
      "Filósofo que se tornou general cujo nome individual era Wu, nasceu no Estado de Ch’i na China, próximo de 500 a.C., em um auge das ciências militares e legislativas daquele país. Sun Tzu escreveu a “Arte da Guerra”.",
  },
  {
    img: alicepaismaravilhas,
    title: "Alice no País das Maravilhas",
    autor: "Lewis Carroll",
    id: "alicepaismaravilhas3",
    descricao:
      "Charles Lutwidge Dodgson mais conhecido como CARROLL, LEWIS, seu nome está inscrito na história da literatura mundial por ser o autor de Alice no País das Maravilhas, o mais estranho e fascinante livro para crianças jamais escrito.",
  },
  {
    img: romeuejulieta,
    title: "Romeu e Julieta",
    autor: "William Shakespeare",
    id: "romeuejulieta3",
    descricao:
      "Há muito tempo duas famílias banham em sangue as ruas de Verona. Enquanto isso, na penumbra das madrugadas, ardem as brasas de um amor secreto. Romeu, filho dos Montéquio, e Julieta, desafiam a rixa familiar e sonham com um impossível futuro, longe da violência e da loucura.",
  },
  {
    img: meninomaluquinho,
    title: "O Menino Maluquinho",
    autor: "Ziraldo",
    id: "meninomaluquinho3",
    descricao:
      "Nessa versão disponibilizada, gratuitamente, pelo grande Ziraldo, verso e desenho contam a história de um menino traquinas que aprontava muita confusão. Alegria da casa, liderava a garotada, era sabido e um amigão. Fazia versinhos, canções, inventava brincadeiras.",
  },
  {
    img: monica_agua_boa,
    title: "Monica e a Agua Boa",
    autor: "Mauricio de Sousa",
    id: "monica_agua_boa3",
    descricao:
      "A Turma da Mônica ensina de forma divertida a importância da água potável para a saúde. Com histórias cativantes, os personagens mostram como preservar esse recurso essencial para o planeta e o bem-estar de todos.",
  },
];


const livrosPerPage = 9;

// Função para normalizar strings
const normalize = (s = "") =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function Livros() {
  const [busca, setBusca] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [resultados, setResultados] = useState(livros);

  const handleBuscar = () => {
    const q = normalize(busca.trim());
    if (!q) {
      setResultados(livros);
    } else {
      const filtrados = livros.filter(
        (item) =>
          normalize(item.title).includes(q) ||
          normalize(item.autor).includes(q)
      );
      setResultados(filtrados);
    }
    setCurrentPage(0);
  };

  const handleLimpar = () => {
    setBusca("");
    setResultados(livros);
    setCurrentPage(0);
  };

  const pageCount = Math.ceil(resultados.length / livrosPerPage);
  const offset = currentPage * livrosPerPage;
  const currentItems = resultados.slice(offset, offset + livrosPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") handleBuscar();
  };

  return (
    <ContainerMain>
      <h1 style={{ textAlign: "center" }}>Exposição de livros</h1>

      {/* Campo de busca */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          justifyContent: "center",
          alignItems: "center",
          margin: "16px 0 20px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Buscar por título ou autor..."
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "50%",
            maxWidth: "400px",
            color: "#000",
          }}
        />
        <button
          onClick={handleBuscar}
          style={{
            padding: "10px 14px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            width: "20%",
            maxWidth: "400px",
            color: "#000",
          }}
        >
          Buscar
        </button>
        <button
          onClick={handleLimpar}
          style={{
            padding: "10px 14px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            opacity: busca ? 1 : 0.6,
            width: "20%",
            maxWidth: "400px",
            color: "#000",
          }}
          disabled={!busca}
        >
          Limpar
        </button>
      </div>

      <hr
        style={{
          border: "none",
          height: "2px",
          backgroundColor: "#ffffff",
          width: "130%",
        }}
      />

      <ContainerLivros>
        {currentItems.length > 0 ? (
          currentItems.map((livro) => (
            <CardLivros key={livro.id} livro={livro} />
          ))
        ) : (
          <p style={{ color: "#fff", textAlign: "center" }}>
            Nenhum livro encontrado.
          </p>
        )}
      </ContainerLivros>

      {pageCount > 1 && (
        <ReactPaginate
          previousLabel={"← Anterior"}
          nextLabel={"Próxima →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          forcePage={currentPage} // garante sincronização visual
        />
      )}
    </ContainerMain>
  );
}

export default Livros;
