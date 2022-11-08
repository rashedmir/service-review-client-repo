import React, { useState } from 'react';
import './Photography.css'
import portrait from '../assests/portrait.jpg'
import { useLoaderData } from 'react-router-dom';
import PhotoCard from './PhotoCard/PhotoCard';

const Photography = () => {
    const categories = useLoaderData()
    // const [category, setCategory]=useState(categories)
    return (
        <div>
            <div className='bg-img py-32 w-screen text-center shadow-2xl'>
                <div>
                    <h1 className='font-3 text-10xl align text-white drop-shadow-2xl'>P H O T O G R A P H Y</h1>
                </div>
            </div>
            <div>
                {
                    categories.slice(-3).reverse().map(category => (<PhotoCard key={category._id} category={category}></PhotoCard>))
                }
            </div>
        </div>
    );
};

export default Photography;