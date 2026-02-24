import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="header-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          🏢 ClubsClient
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-item">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-item">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-item">
              Contact
            </Nav.Link>
              <Nav.Link as={Link} to="/Testing" className="nav-link-item">
              Testing
            </Nav.Link>
             <Nav.Link as={Link} to="/member" className="nav-link-item">
              Member Details
            </Nav.Link>
            <Button variant="primary" className="ms-3 cta-button">Sign In</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header;