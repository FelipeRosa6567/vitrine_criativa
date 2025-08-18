import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Container, Menu, Li } from "./styles";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [changeBackground, setChangeBackground] = useState(false);
  const { pathname } = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  window.onscroll = () => {
    if (!changeBackground && window.pageYOffset > 80) {
      setChangeBackground(true);
    }
    if (changeBackground && window.pageYOffset <= 80) {
      setChangeBackground(false);
    }
  };

  return (
    <Container $changeBackground={changeBackground}>
      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        ☰
      </button>

      <Menu $isMobileOpen={isMobileMenuOpen}>
        <Li
          $isActive={pathname === "/"}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Link to="/">Home</Link>
        </Li>
        <Li
          $isActive={pathname.includes("/poesias")}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Link to="/poesias">Poesias</Link>
        </Li>
        <Li
          $isActive={pathname.includes("/livros")}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Link to="/livros">Livros</Link>
        </Li>
        <Li
          $isActive={pathname.includes("/desenhos")}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Link to="/desenhos">Desenhos</Link>
        </Li>
        <Li
          $isActive={pathname.includes("/games")}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Link to="/games">Games</Link>
        </Li>
        <Li
          $isActive={pathname.includes("/creditos")}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Link to="/creditos">Créditos</Link>
        </Li>
      </Menu>
    </Container>
  );
}
export default Header;
