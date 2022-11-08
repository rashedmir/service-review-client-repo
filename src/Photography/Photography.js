import React, { useState } from 'react';
import './Photography.css'
import { Link, useLoaderData } from 'react-router-dom';
import PhotoCard from './PhotoCard/PhotoCard';
import AllPhotoCategory from './AllPhotoCategory/AllPhotoCategory';
import useTitle from '../Hooks/useTitle';

const Photography = () => {
    useTitle('Photography');
    const categories = useLoaderData()
    // const [category, setCategory]=useState(categories)
    return (
        <div>
            <div className='bg-img py-32 w-screen text-center shadow-2xl'>
                <div>
                    <h1 className='strike'><span className='font-3 text-10xl align text-white drop-shadow-2xl'>P H O T O G R A P H Y</span></h1>
                </div>
            </div>
            <div>
                {
                    categories.slice(-3).reverse().map(category => (<PhotoCard key={category._id} category={category}></PhotoCard>))
                }
            </div>
            <div className='text-center my-10'>                
                <Link to={"/main/allPhotoCategory"}>    
                    <button type='button' className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow 
                    transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100">
                    See all
                </button>
                </Link>
            </div>
        </div>
    );
};

export default Photography;