import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const CategoryDetails = () => {
    const catDetails = useLoaderData()
    const {_id, img, description, title} = catDetails

    return (
        <div>
            <PhotoProvider>
                <PhotoView src={img}>
                    <img className='w-1/2 rounded-xl' src={img} alt="" />
                </PhotoView>
            </PhotoProvider>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </div>
    );
};

export default CategoryDetails;