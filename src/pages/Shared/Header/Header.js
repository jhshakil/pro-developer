import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Pro Developer</h1>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact Me</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/login'>Log In</Link>
                <Link to='/register'>Register</Link>
            </div>
        </div>
    );
};

export default Header;