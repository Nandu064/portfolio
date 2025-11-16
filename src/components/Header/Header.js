import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Container,
} from "reactstrap";
import Logo from "./Logo";
import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <Navbar
      dark
      expand="lg"
      fixed="top"
      className={`header ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <NavbarBrand
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="brand"
        >
          <Logo width={40} height={40} />
        </NavbarBrand>

        <NavbarToggler
          onClick={toggle}
          className={`navbar-toggler-custom ${isOpen ? "" : "collapsed"}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </NavbarToggler>

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            {navItems.map((item) => (
              <NavItem key={item.id}>
                <NavLink
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="nav-link-custom"
                >
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
