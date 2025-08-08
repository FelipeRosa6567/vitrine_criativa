import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
    *{
        font-family: "Roboto", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        font-family: "Montserrat", sans-serif;
        color: #fff;
    }
    body {
        margin: 0;
        padding: 0;
        height: 100%;
        font-family: 'Playfair Display', serif;
        color: white;
        overflow-x: hidden;  
    }
    #galaxy {

        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: black;
        z-index: -1;

        }

`;
