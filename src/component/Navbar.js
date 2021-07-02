import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
 function Nav1 (){
    return (
        <Navbar bg="primary" expand="lg" fixedTop>
        <Navbar.Brand href="#home">Best Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Top</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Romane </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Animation</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Serie link</NavDropdown.Item>
            </NavDropdown> 
          </Nav>
          <Form inline>
            <div className="aa">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success" style ={{color:"black"}}>Search</Button>
            </div>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
}
export default Nav1