import styled from 'styled-components'

export const ContainerMain = styled.div`
  display: flex;
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  margin-top: 60px;
  
`

export const PagesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  transition: opacity 0.3s ease;
  .flip{
    opacity: 0;
  }

`
