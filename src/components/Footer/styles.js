import styled from 'styled-components'

export const Container = styled.div`
  min-height: 80px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  padding-right: 50px;
  background-color:#000;
  transition: background-color 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`
