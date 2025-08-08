import styled from 'styled-components'

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  padding: 100px 50px;
  background-color: transparente;

  h1{
    margin-bottom: 25px;
  }

`

export const ContainerLivros = styled.div`
  display: grid;
  gap: 1.2rem; /* espaçamento entre colunas */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: calc(4 * 250px + 3 * 1rem); /* limita a 4 colunas */
  
`
