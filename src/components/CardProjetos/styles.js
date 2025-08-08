import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: #4e4c4cff;
  margin-top: 25px;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
    padding: 0 10px;
    border-radius: 13px;
  }
   h3 {
    margin: 15px 0 10px 25px ;
    color:#3367f8ff;
  }
`;

export const Info = styled.div`
  padding: 20px;
  color: #3367f8ff;
  font-weight: 700;

  p {
    color: #bbb;
    margin-bottom: 15px;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    margin-bottom: 15px;
  }

  .tecnologias {
    display: flex;
    gap: 10px;
    margin-top: 15px;
  }

  .tecnologias .icon {
    color: #aaa; /* preto e branco / cinza por padrão */
    transition: color 0.3s ease, transform 0.2s ease;
  }

  .tecnologias .icon:hover {
    transform: scale(1.4);
  }

  /* Cores específicas no hover */
  .tecnologias .html:hover {
    fill: #E44D26;
  }

  .tecnologias .css:hover {
    fill: #1572B6;
  }

  .tecnologias .js:hover {
    fill: #F7DF1E;
  }

  .tecnologias .php:hover {
    fill: #777BB4;
  }

  .tecnologias .mysql:hover {
    fill: #00758F;
  }

  .tecnologias .react:hover {
    fill: #61DBFB;
  }
`;