import React, { useState } from "react";
import { ContainerMain, ContainerPoemas } from "./styles";
import ReactPaginate from "react-paginate";

const items = [
  {
    titulo: "Vô",
    autor: "Felipe Rosa",
    poema: [
      "Lágrimas sobre o caixão",
      "Ela ficou no seu lado até o final",
      "Tudo guardado no coração",
      "Esse sempre foi meu mal",
    ],
  },
  {
    titulo: "A.R.T.",
    autor: "Mukowski",
    poema: [
      "O meu sofrimento",
      "é a poesia que os",
      "encanta",
    ],
  },
  {
    titulo: "171",
    autor: "Felipe Rosa",
    poema: [
      "Máscaras de sorrisos",
      "Para não preocupar os outros",
      "Sempre nas mentiras",
      "Sempre pensando nas pessoas",
      "Nunca pensado em mim",
    ],
  },
  {
    titulo: "A chuva cai la fora",
    autor: "Felipe Rosa",
    poema: [
      "O medo não passou",
      "O ódio vazou",
      "Escondido na flor",
      "Mas ela me causou tanto dor",
      "Me espetou com o seu amor",
    ],
  },
  {
    titulo: "Sem título",
    autor: "Mukowski",
    poema: [
      "A traição é um ponto",
      "final que nos divide em",
      "duas histórias.",
    ],
  },
  {
    titulo: "Sem título",
    autor: "Mukowski",
    poema: [
      "Se segure, querida, aqui",
      "dentro é um lugar agitado,",
      "você pode se machucar",
    ],
  },
  {
    titulo: "Me sinto amargo",
    autor: "Felipe Rosa",
    poema: [
      "Me tornei amargo",
      "Sem nenhum amigo",
      "Sem ninguém para lutar comigo",
      "E talvez eu mereça",
      "Eu escutei de mais minha cabeça",
    ],
  },
  {
    titulo: "Mais um mês",
    autor: "Felipe Rosa",
    poema: [
      "Esse mês eu nem chorei tanto",
      "Olha só, sozinho novamente",
      "Culpa das merda da minha mente",
      "Mas já to acostumado",
      "E uma coisa eu garanto",
      "Não sofro mais por não ser amado",
    ],
  },
  {
    titulo: "Sem título",
    autor: "Mukowski",
    poema: [
      "Me perguntaram:",
      "",
      "-Até aonde você iria por amor?",
      "-Até o fim dele. -respondi",
    ],
  },
  {
    titulo: "Lua",
    autor: "Felipe Rosa",
    poema: [
      "Presos de novo naquele momento",
      "E não importa o quanto eu tento",
      "É um lupin infinito",
      "De dor e sofrimento",
      "E nunca vai passar",
      "Mesmo assim eu continuo a te amar",
    ],
  },
  {
    titulo: "Iris",
    autor: "Felipe Rosa",
    poema: [
      "É tão difícil de explicar",
      "Esse tal de amar",
      "Queria mesmo era te agradecer",
      "Por ter me tirado do sofrer",
      "Com você eu queria viver",
      "Mas está difícil de você entender",
    ],
  },
  {
    titulo: "Sem título",
    autor: "Mukowski",
    poema: [
      "O tempo passa mais",
      "rápido quando você não",
      "se importa com ele",
    ],
  },
  {
    titulo: "Nós dois",
    autor: "Felipe Rosa",
    poema: [
      "Minha mão na sua cintura",
      "Te olhar é uma grande tortura",
      "Nossas bocas em constante contato",
      "Nossos corpos em constante atrito",
      "Não vou mais falar apenas lembrar",
      "Pois o que é bom não devemos divulgar",
    ],
  },
  {
    titulo: "Aurora boreal",
    autor: "Felipe Rosa",
    poema: [
      "Aurora boreal",
      "Sua beleza é surreal",
      "Seus olhos ofuscam",
      "Qualquer constelação",
      "Nossos corpos se cruzam",
      "Ficamos na maior tentação",
    ],
  },
  {
    titulo: "Sou seu",
    autor: "Felipe Rosa",
    poema: [
      "Seu sorriso é o portal",
      "Que me leva pro local",
      "Aonde não existe mal",
      "E nunca terá um final",
    ],
  },
  {
    titulo: "Happy birthday",
    autor: "Felipe Rosa",
    poema: [
      "Me sinto perdido",
      "Sem ter um lugar",
      "Sempre escondido",
      "Me sinto amargurado",
      "Lutando para não me matar",
    ],
  },
  {
    titulo: "O sol e a lua",
    autor: "Felipe Rosa",
    poema: [
      "Meu amor por você",
      "É como o sol",
      "Ele só vai se apagar",
      "Quando tudo deixar de existir.",
      "Mas quando te vi partir",
      "Descobri que você é como a lua",
      "Você tentou me ajudar",
      "Mas sua indecisão vive a me machuca",
    ],
  },
  {
    titulo: "Sou quem sou",
    autor: "Felipe Rosa",
    poema: [
      "Sem coração",
      "Sem razão",
      "Sem motivação",
      "Estou acorrentado",
      "Me sentindo um fracassado",
    ],
  },
  {
    titulo: "Constelação",
    autor: "Felipe Rosa",
    poema: [
      "Hoje eu percebi que você é meu sol",
      "E eu sou sua lua",
      "Eu tenho uma grande indecisão",
      "Não muda o que sinto no meu coração",
      "Você veio para me aquecer",
      "Me fez esquecer",
      "Me ensinou a entender",
      "E trouxe a minha vontade de viver",
    ],
  },
  {
    titulo: "Desabafo",
    autor: "Felipe Rosa",
    poema: [
      "Eu não me sinto bem",
      "Mas relaxa isso não é culpa de ninguém",
      "Eu agradeço por você ter indo embora",
      "Ok fui eu que te mandei embora",
      "E desculpa por ter te passado minha dor",
      "Mas nós dois fomos culpado desse amor",
    ],
  },
  {
    titulo: "Sem título",
    autor: "Mukowski",
    poema: [
      "Ela foi a pessoa que mais",
      "amei, ironicamente, foi a que",
      "mais me destuiu.",
    ],
  },
  {
    titulo: "Sem título",
    autor: "Mukowski",
    poema: [
      "Estar sozinho era um",
      "presente dos deuses.",
      "",
      "qualquer coisa era melhor",
      "do que estar rodeado de",
      "pessoas vazias.",
    ],
  },
  {
    titulo: "Sem título",
    autor: "Mukowski",
    poema: [
      "O amor é apenas uma",
      "forma elegante de se",
      "altodestruir",
    ],
  },
  {
    titulo: "Sem título",
    autor: "Mukowski",
    poema: [
      "EU tinha duas escolhas:",
      "Matar nosso amor, ou deixar",
      "que ele nos matasse.",
    ],
  },
  {
    titulo: "Sem título",
    autor: "Mukowski",
    poema: [
      "Naquele erro,",
      "culpei o diabo.",
      "",
      "Até que, diante do",
      "espelho, vi oculpado.",
      "Mas não era ele, era eu.",
    ],
  },
  {
    titulo: "Porque eu te amo?",
    autor: "Felipe Rosa",
    poema: [
      "Eu não consigo nem dizer",
      "Você me faz querer viver",
      "Você me completa, toda perfeita",
      "és tudo aquilo que sentia falta",
    ],
  },
  {
    titulo: "Para bem longe daqui",
    autor: "Felipe Rosa",
    poema: [
      "Vem comigo vamos fugir",
      "Não precisa de lugar pra ir",
      "Só preciso que seja eu e você",
      "E todo o resto podemos esquecer",
    ],
  },
  {
    titulo: "Sempre foi você",
    autor: "Felipe Rosa",
    poema: [
      "Eu posso tar apaixonado",
      "Eu posso tar amando",
      "Eu posso só ta sonhando",
      "Mas em tudo tem você",
    ],
  },
  {
    titulo: "Minha linda garota",
    autor: "Felipe Rosa",
    poema: [
      "Eu robaria a lua e apagaria o sol",
      "Só é preciso você me pedir",
      "Não ligaria para as consequências",
      "Vale de tudo para te ver sorrir",
    ],
  },
  {
    titulo: "Pesadelos",
    autor: "Felipe Rosa",
    poema: [
      "Noites em terror",
      "Relembrando toda a dor",
      "Sempre mostrando o meu pior",
      "Falando que nunca vou ser melhor",
    ],
  },
   {
    titulo: "Teste",
    autor: "Daniel Guimaraes",
    poema: [
      "Noites em terror",
      "Relembrando toda a dor",
      "Sempre mostrando o meu pior",
      "Falando que nunca vou ser melhor",
      "asdasd",
      "teasdast",
      "asdasda",
    ],
  },
];
const itemsPerPage = 12;

function Poesias() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
    
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  return (
    <>
      <ContainerMain>
        <ContainerPoemas>
          {currentItems.map((item, i) => (
            <li key={i}>
              <p>{item.titulo}</p>
              <br />
              {item.poema.map((linha, index) => (
                <p key={index}>{linha}</p>
              ))}
              <br />
              <p>--{item.autor}</p>
            </li>
          ))}
        </ContainerPoemas>

        <ReactPaginate
          previousLabel={"← Anterior"}
          nextLabel={"Próxima →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </ContainerMain>
    </>
  );
}

export default Poesias;
