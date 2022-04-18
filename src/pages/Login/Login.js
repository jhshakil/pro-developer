import { FirebaseError } from 'firebase/app';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogIn from './SocialLogIn/SocialLogIn';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    const navigate = useNavigate()
    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)

    }
    let errorElement;
    if (error) {
        errorElement = <p className='fs-3 mt-2 text-center text-danger'>email address or password do not match</p>
    }
    return (
        <div className='container w-50 mt-5 border border-dark p-5'>
            <h3 className='text-center mb-4'>Log In</h3>
            <SocialLogIn></SocialLogIn>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <input className='w-100 p-2' type="submit" value="Log In" />
                {errorElement}
            </Form>
            <p className='m-3 text-center'>Reset Password : <Link className='text-decoration-none' to='/login' onClick={resetPassword}>Reset Password</Link></p>
            <p className='m-3 text-center'>New to Pro Developer : <Link className='text-decoration-none' to='/register'>Create an Account</Link></p>
        </div>
    );
};

export default Login;