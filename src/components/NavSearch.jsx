import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.PNG';

function NavSearch(props) {
  return (
    <Navbar bg="primary" variant="dark" className="p-0">
      <Container >
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Buscador de Colaboradores
        </Navbar.Brand>
        <Navbar>
          <Nav
            className="me-auto my-0 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex m-1" >
            <Form.Control
              type="buscador"
              placeholder="Busca un colaborador"
              className="me-2"
              onChange={props.onChange}
              
            />
            {/* <Button variant="outline-light">Buscar</Button> */}
          </Form>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default NavSearch;