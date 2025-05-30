import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router';

export const  NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">Интерактивная карта НПК СПБ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Карта</Nav.Link>
            <Nav.Link as={Link} to="/list">Список</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
