import styled from 'styled-components'

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  padding: 100px 100px;
  
    h1 {
    margin-bottom: 25px;
  }
    hr{
    margin-bottom: 25px;
  }

  .pagination {
  display: flex;
  list-style: none;
  gap: 10px;
  
}

.pagination li {
  padding: 5px 10px;
  border: 1px solid #ccc;
  margin-bottom: 25px;
  cursor: pointer;
  
}

.pagination .active {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}
`
export const ContainerPoemas = styled.ul`
  display: flex;
  background-color: transparent;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  max-width: calc((260px * 5) + (10px * 4)); /* 5 itens + 4 gaps */
  margin: 0 auto 25px; /* centralizar */

  li{
  width: 260px;
  height: 250px;
  outline: 1px solid white;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-bottom: 15px;
  }
`
