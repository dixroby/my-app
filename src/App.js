import React from 'react';
import './App.css';
import {Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (

    <Container>
      <Row>
        <Col md={3}>
          <Navbar className="menu-desplegable" expand="lg">            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">
                  <FontAwesomeIcon icon={faList} /> Home
                </Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>        
            </Navbar.Collapse>
          </Navbar>
        </Col>
          
        <Col md="9">

        </Col>
      </Row>
      
    </Container>

  );
}

export default App;
