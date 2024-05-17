import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Select from 'react-select'


const NavComponent = () => {
    let navigate = useNavigate()

    const handleSelectChange = (eventKey) => {
        navigate(eventKey);
    };
    const options = [
        { value: '/food', label: "food" },
        { value: '/baby-apparel', label: 'Baby & Apparel' },
        { value: '/office-toys', label: 'Office & Toys' },
        { value: '/pet', label: 'Pet' },
        { value: '/household', label: 'HouseHold' },
        { value: '/beauty-health', label: 'Beauty & Health' },
        { value: 'auto-more', label: 'Auto & Hardware & OutdoorLiving' },


    ]
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
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
                            <NavDropdown.Item eventKey="/auto-more">Auto & Hardware & OutdoorLiving</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={NavLink} to="/deals">Coupons & Cash Back</Nav.Link>
                        <Nav.Link as={NavLink} to="/weekly-ads">Weekly Ads</Nav.Link>
                        <Nav.Link as={NavLink} to="/career">Career</Nav.Link>
                        <Nav.Link as={NavLink} to="/myDG">MyDG</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavComponent
