import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const Component = (props) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("aarushi")

  const logOut = () => {
    // Log out API request
    // Redirect to home page
    navigate('/login')
  }

  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand style={{margin: "0 20px"}} href="">Ctr++Offer</Navbar.Brand>
        <Navbar.Toggle style={{margin: "0 5px"}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{margin: "0 5px"}} id="basic-navbar-nav" className="float-end">
        
          <Nav className="me-auto">
            <Nav.Link href="/"> Home </Nav.Link>
            <Nav.Link href="/cases"> Cases </Nav.Link>
          </Nav>
              
          <Nav>
            {
              props.un ? 
                <Navbar.Text style={{margin: "0 5px"}}>Hello {props.un}</Navbar.Text>
              :
              <></>
            }
            <Nav.Item style={{margin: "0 5px"}}><Button onClick={logOut}>Login Page</Button></Nav.Item>
          </Nav>

        </Navbar.Collapse>
        
    </Navbar>
    

  )
}

export default Component
