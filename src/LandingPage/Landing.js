import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';


const Landing = () => {
    return (
        <div className='bg-image h-screen pl-32 flex items-center'>
            <div>
                <h1 className='font text-10xl font-bold text-white drop-shadow-2xl'>Mir Rashed</h1>
                <p className='font-2 text-2xl font-semibold text-slate-400'>
                    <span className='mr-7'>Photographer</span> |
                    <span className='mx-7'>Content Creator</span> |
                    <span className='mx-7'>Storyteller</span>
                </p>
                <div className='font-3 text-5xl mt-5 text-white'>
                    <Link className='' to='/main/photography'>Photography</Link>
                    <Link className='ml-10' to='/'>About</Link>
                    <Link className='ml-10' to='/'>Contact</Link>
                    <Link className='ml-10' to='/'>Blog</Link>
                </div>
            </div>
        </div>

    );
};

export default Landing;