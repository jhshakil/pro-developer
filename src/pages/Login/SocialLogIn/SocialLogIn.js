import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let errorElement;
    if (error) {
        errorElement = <p>Please Log in</p>
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <button onClick={() => signInWithGoogle()} className='w-100 p-2 mb-4'>Login with Google</button>
            {errorElement}
        </div>
    );
};

export default SocialLogIn;