import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';

const NavComponent = ({ logout, user }) => {
    let navigate = useNavigate();

    const handleSelectChange = (eventKey) => {
        navigate(eventKey);
    };

    return (
        <Navbar bg="black" variant='dark' expand="lg" fixed="top">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categories" id="basic-nav-dropdown" onSelect={handleSelectChange}>
                            <NavDropdown.Item eventKey="/food">Food</NavDropdown.Item>
                            <NavDropdown.Item eventKey="/baby-apparel">Baby & Apparel</NavDropdown.Item>
                            <NavDropdown.Item eventKey="/office-toys">Office & Toys</NavDropdown.Item>
                            <NavDropdown.Item eventKey="/pet">Pet</NavDropdown.Item>
                            <NavDropdown.Item eventKey="/household">Household</NavDropdown.Item>
                            <NavDropdown.Item eventKey="/beauty-health">Beauty & Health</NavDropdown.Item>
                            <NavDropdown.Item eventKey="/auto-more">Auto & Hardware & Outdoor Living</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={NavLink} to="/deals">Coupons & Cash Back</Nav.Link>
                        <Nav.Link as={NavLink} to="/weekly-ads">Weekly Ads</Nav.Link>
                        <Nav.Link as={NavLink} to="/career">Career</Nav.Link>
                        <Nav.Link as={NavLink} to="/myDG">MyDG</Nav.Link>
                    </Nav>
                    {user && (
                        <Nav className="ml-auto">
                            <Button variant="outline-light" onClick={logout}>Logout</Button>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavComponent;

