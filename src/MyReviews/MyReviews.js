import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useTitle from '../Hooks/useTitle';
import ReviewCard from './ReviewCard';

const MyReviews = () => {
    useTitle("My Reviews")

    const { user } = useContext(AuthContext);

    const [allReviews, setAllReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, []);

    return (
        <div>
            {
                allReviews.slice().reverse().map(allReview => <ReviewCard key={allReview._id} allReview={allReview} user={user}></ReviewCard>)
            }
        </div>
    );
};

export default MyReviews;