import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  min-height: 80px;
  top: 0;
  z-index: 99;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  padding-right: 50px;
  background-color: ${(props) =>
    props.$changeBackground ? '#000' : 'transparent'};
  transition: background-color 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`
export const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;
  @media (max-width: 768px) {
    gap: 20px;
    justify-content: flex-start;
  
  }

`
export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 25px;
  position: relative;
  a {
    color: #fff;
    text-decoration: none;
  }
  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.$isActive ? '100%' : '0')};
    background-color: #4d7cfe;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.4s ease-in-out;
  }
  &:hover::after {
    width: 100%;
  }

   @media (max-width: 768px) {
    font-size: 15px;
    font-weight: 400;
   }
`
