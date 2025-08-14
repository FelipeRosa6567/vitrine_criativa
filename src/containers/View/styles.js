import styled from 'styled-components'

export const ContainerMain = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;

  img{
    width: 300px;
    max-height: 350px;
  }
  h2 span{
    font-size: 1.9rem;
    font-weight: 600;
    color: #4d7cfe;
    
  }
  span{
    
  }

  button{
    background-color: #4d7cfe;
    color: #fff;
    width: 130px;
    height: 30px;
    border-radius: 40px;
    cursor: pointer;
    border: none;
  }
  
`

export const ContainerViewLivros = styled.div`
    width: 80%;
    height: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center; 
`

export const ContainerFoto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
      font-size: 1.3rem;
    }
`
export const ContainerDescricao = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    p span{
    font-size: 1.9rem;
    font-weight: 600;
    color: #4d7cfe;
    background-color: #000;
    
    }
    p{
      width: 700px;
      font-size: 1.4rem;
      background-color: #000;
    }

    button{
      display: block;
      margin: 25px auto;
    }
`
