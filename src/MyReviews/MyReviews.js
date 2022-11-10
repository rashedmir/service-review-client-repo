import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useTitle from '../Hooks/useTitle';
import ReviewCard from './ReviewCard';

const MyReviews = () => {
    useTitle("My Reviews")

    const { user } = useContext(AuthContext);

    const [allReviews, setAllReviews] = useState([]);
    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-rashedmir.vercel.app/review')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, []);

    return (
        <div>
            <h1 className='text-center my-5 font-2 text-xl font-bold text-gray-600'>All reviews of: <span className='text-gray-400 text-2xl'>{user.displayName}</span></h1>
            {
                allReviews.slice().reverse().map(allReview => <ReviewCard key={allReview._id} allReview={allReview} user={user}></ReviewCard>)
            }
        </div>
    );
};

export default MyReviews;