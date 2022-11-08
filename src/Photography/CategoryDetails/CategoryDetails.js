import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../Hooks/useTitle';
import Reviews from '../../Reviews/Reviews';

const CategoryDetails = () => {
    useTitle('Details');
    const catDetails = useLoaderData()
    const { _id, img, description, title } = catDetails

    return (
        <div className='mx-28'>
            <div className='flex justify-center'>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img className='cursor-zoom-in w-1/2 rounded-xl mt-10' src={img} alt="img" />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <p className='text-sm text-gray-400 text-center'>Click on the image for fullscreen view</p>
            <div className='text-center'>
                <h1 className='my-10 text-5xl text-gray-700 font-bold'>{title}</h1>
                <h2 className='text-xl mb-10 text-gray-600'>{description}</h2>
            </div>
            <Reviews card_id={_id}></Reviews>
        </div>
    );
};

export default CategoryDetails;