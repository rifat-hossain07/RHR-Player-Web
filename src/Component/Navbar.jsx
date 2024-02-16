import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
const Navbars = () => {
  return (
    <Navbar sticky="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">RHR-Player</Navbar.Brand>
        <Nav>
          <NavLink to="/login">
            <Button variant="primary">Login</Button>
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbars;
