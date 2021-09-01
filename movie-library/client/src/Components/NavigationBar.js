import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect className="border-bottom">
      <Container fluid>
        <LinkContainer to='/'>
          <Navbar.Brand>Movie Library</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='navbar_controls' />
        <Navbar.Collapse id='navbar_controls'>
          <Nav className='ms-auto'>
            <LinkContainer to='/'>
              <Nav.Link>Movies</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/moviedetail'>
              <Nav.Link>(movie detail pg)</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/movieedit'>
              <Nav.Link>(movie edit pg)</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
