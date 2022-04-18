import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Navbar.Brand as={Link} to="/home">Pro Developer</Navbar.Brand>
                    </Nav>
                    <Nav>

                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                        {
                            user ? <Nav.Link as={Link} to="/login" onClick={handleLogout}>Log Out</Nav.Link> : <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;