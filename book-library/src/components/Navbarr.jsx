import {Link} from "react-router-dom"
import {Navbar, Nav, Container} from 'react-bootstrap'


export const Navbarr = () => {
    return (
        <div>     
            
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand><Link to={'/'} >Home</Link></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link><Link to={'/about'}>About</Link></Nav.Link>
      <Nav.Link><Link to={'/books'}>Books</Link></Nav.Link>
      <Nav.Link ><Link to={'/login'}>Login</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}