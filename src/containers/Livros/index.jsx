import { ContainerMain, ContainerLivros } from "./styles"
import CardLivros  from "../../components/CardLivros"
import diario  from "../../assets/livros/O diario perdido.png"

import aartedaguerra  from "../../assets/livros/aartedaguerra.jpg"
import alicepaismaravilhas  from "../../assets/livros/alicepaismaravilhas.jpg"
import romeuejulieta from "../../assets/livros/romeuejulieta.jpg"
import meninomaluquinho from "../../assets/livros/meninomaluquinho.jpg"
import monica_agua_boa from "../../assets/livros/monica_agua_boa.jpg"

function Livros() {
   
 
   return (
     <>
       <ContainerMain>
          
            <h1 style={{ textAlign: "center" }}>Esposição de livros</h1>
            <hr style={{ border: "none", height: "2px", backgroundColor: "#ffffff", width: "130%" }} />
         <ContainerLivros>  
              <CardLivros img={diario} title="Diario" autor="Felipe Rosa" id="diario"  />
              <CardLivros img={aartedaguerra} title="A arte da Guerra" autor="SUN TZU" id="aartedaguerra" />
              <CardLivros img={alicepaismaravilhas} title="Alice no País das Maravilhas" autor="Lewis Carroll" id="alicepaismaravilhas" />
              <CardLivros img={romeuejulieta} title="Romeu e Julieta" autor="William Shakespeare" id="romeuejulieta" />
              <CardLivros img={meninomaluquinho} title="O Menino Maluquinho" autor="Ziraldo" id="meninomaluquinho" />
              <CardLivros img={monica_agua_boa} title="Monica e a Água Boa" autor="Mauricio de Sousa" id="monica_agua_boa" />
              
        </ContainerLivros>
       </ContainerMain>
     </>
   );
 }

export default Livros
