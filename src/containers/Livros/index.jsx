import { ContainerMain, ContainerLivros } from "./styles";
import CardLivros from "../../components/CardLivros";
import diario from "../../assets/livros/O diario perdido.png";

import aartedaguerra from "../../assets/livros/aartedaguerra.jpg";
import alicepaismaravilhas from "../../assets/livros/alicepaismaravilhas.jpg";
import romeuejulieta from "../../assets/livros/romeuejulieta.jpg";
import meninomaluquinho from "../../assets/livros/meninomaluquinho.jpg";
import monica_agua_boa from "../../assets/livros/monica_agua_boa.jpg";

function Livros() {
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
  ];

  return (
    <>
      <ContainerMain>
        <h1 style={{ textAlign: "center" }}>Esposição de livros</h1>
        <hr
          style={{
            border: "none",
            height: "2px",
            backgroundColor: "#ffffff",
            width: "130%",
          }}
        />
        <ContainerLivros>
          {livros.map((livro) => (
            <CardLivros key={livro.id} livro={livro} />
          ))}
        </ContainerLivros>
      </ContainerMain>
    </>
  );
}

export default Livros;
