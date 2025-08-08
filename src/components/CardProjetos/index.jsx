import { Container, Info } from "./styles.js";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

function Button({ description, title, link, img, tec }) {
  return (
    <>
      <Container>
        <h3>{title}</h3>
        <img src={img} alt="imagem-projeto" />
        <Info>
          <p>{description}</p>
          <a href={link} target="_blank">
            Ver Projeto →
          </a>
          {tec && (
            <div className="tecnologias">
              {tec.html && (
                <FaHtml5 className="icon html" title="HTML5" size={34} />
              )}
              {tec.css && (
                <FaCss3Alt className="icon css" title="CSS3" size={34} />
              )}
              {tec.javascript && (
                <FaJs className="icon js" title="JavaScript" size={34} />
              )}
              {tec.php && <FaPhp className="icon php" title="PHP" size={34} />}
              {tec.mysql && (
                <SiMysql className="icon mysql" title="MySQL" size={34} />
              )}
              {tec.react && (
                <FaReact className="icon react" title="React" size={34} />
              )}
            </div>
          )}
        </Info>
      </Container>
    </>
  );
}
export default Button;
