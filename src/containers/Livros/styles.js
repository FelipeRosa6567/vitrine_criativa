import styled from 'styled-components'

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  padding: 100px 100px;
  background-color: transparente;
`

export const ContainerLivros = styled.div`
  display: grid;
  gap: 1rem; /* espaçamento entre colunas */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: calc(4 * 250px + 3 * 1rem); /* limita a 4 colunas */
`
