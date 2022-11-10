import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../Hooks/useTitle';
import Reviews from '../../Reviews/Reviews';
import ShowReview from '../../Reviews/ShowReview';

const CategoryDetails = () => {
    useTitle('Details');
    const catDetails = useLoaderData()
    const { _id, img, description, title, price } = catDetails
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-rashedmir.vercel.app/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className='mx-28 font-2'>
            <div className='flex justify-center'>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img className='cursor-zoom-in w-1/2 rounded-xl mt-10' src={img} onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src =
                                "https://img.freepik.com/free-photo/word-no-with-child-s-hand-dark-wall_1150-26173.jpg?w=2000";
                        }} alt="img" />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <p className='text-sm text-gray-400 text-center'>Click on the image for fullscreen view</p>
            <div className='text-center'>
                <h1 className='my-10 text-5xl text-gray-700 font-bold'>{title}</h1>
                <h1 className='mt-10 text-xl text-gray-700 font-bold'>Discounted offer: ${price - 5}</h1>
                <p className='mb-10'><span className='font-bold text-sm text-red-500'>Original offer: <span className='line-through'>${price}</span></span></p>
                <h2 className='text-xl mb-10 text-gray-600'>{description}</h2>
            </div>
            <Reviews card_id={_id} cat_title={title}></Reviews>
            <h2 className='mt-5 text-3xl font-3 font-bold text-gray-400 text-center'>Reviews</h2>
            {
                reviews.slice().reverse().map(review => <ShowReview key={review._id} review={review} card_id={_id}></ShowReview>)
            }
        </div>
    );
};

export default CategoryDetails;