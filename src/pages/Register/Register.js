import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const handleSubmit = event => {
        event.prevendDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current.value;
    }
    return (
        <Form onSubmit={handleSubmit} className='container w-50 mt-5 border border-dark p-5'>
            <h3 className='text-center mb-4'>Register</h3>
            <button className='w-100 p-2 mb-4'>Register with Google</button>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control ref={nameRef} type="name" placeholder="Enter Your Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>
            <input className='w-100 p-2' type="submit" value="Log In" />
            <p className='m-3 text-center'>Already have an Account : <Link className='text-decoration-none' to='/login'>Log In</Link></p>
        </Form>
    );
};

export default Register;