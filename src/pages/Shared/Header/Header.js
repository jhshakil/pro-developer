import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        // <div>
        //     <h1>Pro Developer</h1>
        //     <div>
        //         <Link to='/'>Home</Link>
        //         <Link to='/about'>About</Link>
        //         <Link to='/contact'>Contact Me</Link>
        //         <Link to='/orders'>Orders</Link>
        //         <Link to='/login'>Log In</Link>
        //         <Link to='/register'>Register</Link>
        //     </div>
        // </div>
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Pro Developer</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#orders">Orders</Nav.Link>
                        <Nav.Link href="#login">Log In</Nav.Link>
                        <Nav.Link href="#register">Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;