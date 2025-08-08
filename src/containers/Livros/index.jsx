import { ContainerMain, ContainerLivros } from "./styles"
import CardLivros  from "../../components/CardLivros"
import capa1  from "../../assets/livros/O diario perdido.png"
import capa2  from "../../assets/livros/assim_que_acaba - Copia.jpg"
import capa3  from "../../assets/livros/livrodacapaverde.jpg"
import capa4  from "../../assets/livros/nocaminhodaluz - Copia.jpg"
import capa5  from "../../assets/livros/por_tras_do_veu - Copia.jpg"
import capa6  from "../../assets/livros/vovovirousemente.jpg"
import capa7  from "../../assets/livros/alem_da_capa - Copia.jpg"

function Livros() {
   
 
   return (
     <>
       <ContainerMain>
          
            <h1 style={{ textAlign: "center" }}>Esposição de livros</h1>
            <hr style={{ border: "none", height: "2px", backgroundColor: "#ffffff", width: "130%" }} />
         <ContainerLivros>  
              <CardLivros img={capa1} title="Diario" autor="Felipe Rosa"  />
              <CardLivros img={capa2} title="Assim que Acaba" autor="Collen Hoover"  />
              <CardLivros img={capa3} title="Diario" autor="Felipe Rosa"  />
              <CardLivros img={capa4} title="Diario" autor="Felipe Rosa"  />
              <CardLivros img={capa5} title="Diario" autor="Felipe Rosa"  />
              <CardLivros img={capa6} title="Diario" autor="Felipe Rosa"  />
              <CardLivros img={capa7} title="Diario" autor="Felipe Rosa"  />
            
        </ContainerLivros>
       </ContainerMain>
     </>
   );
 }

export default Livros
