import React from 'react';

const About = () => {
    return (
        <div className='container'>
            <h2 className='m-4 text-center'>About Me</h2>
            <div className='row'>
                <div className='col'>
                    <img className='w-50' src='jhshakil.jpg' alt="" />
                </div>
                <div className='col'>
                    <p>My name is jahid hasan shakil. I am a student. Now I am a junior web developer.</p>
                </div>
            </div>
        </div>
    );
};

export default About;