import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PhotoCard from '../PhotoCard/PhotoCard';
import './AllPhotoCategory.css'

const AllPhotoCategory = () => {
    const categories = useLoaderData()
    return (
        <div>
            <div className='bgd-img py-32 w-screen text-center shadow-2xl'>
                <div>
                    <h1 className='strike'><span className='font-3 text-10xl align text-white drop-shadow-2xl'>P H O T O G R A P H Y</span></h1>
                </div>
            </div>

            <div>
                {
                    categories.map(category => (<PhotoCard key={category._id} category={category}></PhotoCard>))
                }
            </div>
        </div>
    );
};

export default AllPhotoCategory;