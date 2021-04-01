import React, { useContext } from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import { userContext } from '../../App';

const Header = () => {
    const [loggedinUser, setLoggedinUser] = useContext(userContext);
    return (
        <>
            <Navbar bg="dark" expand="lg" className="sticky-top">
                <Navbar.Brand as={Link} to="/" className="text-success">Premium Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" className="text-white px-3">Home</Nav.Link>
                        <Nav.Link as={Link} to="/orders" className="text-white px-3">Orders</Nav.Link>
                        <Nav.Link as={Link} to="/admin" className="text-white px-3">Admin</Nav.Link>
                        <Nav.Link as={Link} to="/deals" className="text-white px-3">Deals</Nav.Link>
                        <Nav.Link as={Link} to="/signin" className="text-white px-3">
                            {loggedinUser.email ? loggedinUser.email : "Login"}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;