import { Navbar, Container, Nav } from "react-bootstrap";
const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>MIDUTFILM</Navbar.Brand>
          <Nav>
            <Nav.Link>Trending</Nav.Link>
            <Nav.Link>SuperHero</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavigationBar;
