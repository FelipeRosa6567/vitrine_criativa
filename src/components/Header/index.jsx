import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Container, Menu, Li } from './styles'

function Header() {
  const [changeBackground, setChangeBackground] = useState(false)
  const { pathname } = useLocation()

  window.onscroll = () => {
    if (!changeBackground && window.pageYOffset > 80) {
      setChangeBackground(true)
    }
    if (changeBackground && window.pageYOffset <= 80) {
      setChangeBackground(false)
    }
  }

  return (
    <Container $changeBackground={changeBackground}>
      <Menu>
        <Li $isActive={pathname === '/'}>
          <Link to="/">Home</Link>
        </Li>
        <Li $isActive={pathname.includes('/poesias')}>
          <Link to="/poesias">Poesias</Link>
        </Li>
        <Li $isActive={pathname.includes('/livros')}>
          <Link to="/livros">Livros</Link>
        </Li>
        <Li $isActive={pathname.includes('/desenhos')}>
          <Link to="/desenhos">Desenhos</Link>
        </Li>
        <Li $isActive={pathname.includes('/games')}>
          <Link to="/games">Games</Link>
        </Li>
        <Li $isActive={pathname.includes('/creditos')}>
          <Link to="/creditos">Creditos</Link>
        </Li>
      </Menu>
    </Container>
  )
}
export default Header
