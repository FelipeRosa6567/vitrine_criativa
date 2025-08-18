import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
  background-color: ${({ $changeBackground }) => ($changeBackground ? '#000' : 'transparent')};
  box-shadow: ${({ $changeBackground }) => ($changeBackground ? '0 2px 10px rgba(0,0,0,0.1)' : 'none')};
  z-index: 1000;

  .mobile-menu-btn {
    display: none;
    font-size: 2rem;
    background: none;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    .mobile-menu-btn {
      display: block;
    }
  }
`;
export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ $isMobileOpen }) => ($isMobileOpen ? '0' : '-100%')};
    height: 100vh;
    width: 150px;
    flex-direction: column;
    background-color: rgba(0,0,0,0.8);
    padding-top: 80px;
    padding-left: 25px;
    gap: 20px;
    transition: right 0.3s ease;
    box-shadow: -2px 0 10px rgba(0,0,0,0.1);
  }
`;

export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 25px;
  position: relative;
  
  a {
    text-decoration: none;
    color: #fff;
    font-weight: ${({ $isActive }) => ($isActive ? '700' : '400')};
    transition: color 0.3s;
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
