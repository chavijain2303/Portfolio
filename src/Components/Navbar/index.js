import React from "react";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/Constants";
import { useTheme } from "styled-components";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

/* ---------------- NAVBAR WRAPPER ---------------- */

const Nav = styled.div`
  background: rgba(18, 18, 32, 0.85);
  backdrop-filter: blur(10px);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(255,255,255,0.08);
`;

/* ---------------- CONTAINER ---------------- */

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* ---------------- LOGO ---------------- */

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 8px;
`;

const Span = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: white;
`;

/* ---------------- NAV ITEMS ---------------- */

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  text-decoration: none;
  position: relative;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    left: 0;
    bottom: -6px;
    background: ${({ theme }) => theme.primary};
    transition: 0.3s;
  }

  &:hover:after {
    width: 100%;
  }
`;

/* ---------------- BUTTONS ---------------- */

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Button = styled.a`
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  transition: 0.35s;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(138, 43, 226, 0.35);
  }
`;

/* ---------------- MOBILE MENU ---------------- */

const MobileIcon = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 80px;
  width: 100%;
  background: #0f0f1b;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
  gap: 25px;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-120%)"};
  transition: 0.4s ease-in-out;

  @media (min-width: 900px) {
    display: none;
  }
`;

const MobileMenuLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

/* ---------------- NAVBAR COMPONENT ---------------- */

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        {/* Logo */}
        <NavLogo to="/">
          <DiCssdeck size="2.5rem" color={theme.primary} />
          <Span>Portfolio</Span>
        </NavLogo>

        {/* Desktop Menu */}
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#certificates">Certificates</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>

        {/* Buttons */}
        <ButtonContainer>
          <Button href={Bio.github} target="_blank">
            GitHub
          </Button>

          <Button href={Bio.linkedin} target="_blank">
            LinkedIn
          </Button>
        </ButtonContainer>

        {/* Mobile Menu Icon */}
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen}>
          <MobileMenuLink href="#about">About</MobileMenuLink>
          <MobileMenuLink href="#skills">Skills</MobileMenuLink>
          <MobileMenuLink href="#experience">Experience</MobileMenuLink>
          <MobileMenuLink href="#projects">Projects</MobileMenuLink>
          <MobileMenuLink href="#education">Education</MobileMenuLink>
          <MobileMenuLink href="#certificates">Certificates</MobileMenuLink>
          <MobileMenuLink href="#contact">Contact</MobileMenuLink>

          <Button href={Bio.github} target="_blank">
            GitHub
          </Button>

          <Button href={Bio.linkedin} target="_blank">
            LinkedIn
          </Button>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;