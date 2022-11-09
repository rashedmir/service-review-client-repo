import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';


const Reviews = ({ card_id, cat_title }) => {
    const { user } = useContext(AuthContext);

    const [review, setReviews] = useState({});
    const handleAddReview = event => {
        event.preventDefault();

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('Review added successfully')
                event.target.reset();
            })
    }

    const handleInput = event => {
        const date = new Date();
        const userId = user.uid;
        const userName = user.displayName;
        const userImage = user.photoURL;
        const cardId = card_id;
        const category_title = cat_title;
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review, userId, userName, userImage, cardId, category_title, date };
        newReview[field] = value;
        console.log(newReview);
        setReviews(newReview);
    }


    return (

        <div class="grid mb-8 rounded-lg shadow-sm md:mb-12">
            <h2>Reviews</h2>

            <div className='my-14 text-center'>

                {
                    user?.uid ?
                        <>
                            <form onSubmit={handleAddReview} class="mb-6">
                                <input onBlur={handleInput} name='review' type="text" id="large-input" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border 
                                border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder='Type your review and suggestions here...' required />
                                <button type='submit' className="mt-5 float-right bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                    Submit review
                                </button>
                            </form>
                        </>
                        :
                        <>
                            <button><Link className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow 
                    transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100' to={`/main/private/${card_id}`}>Login to Comment</Link></button>
                        </>
                }
            </div>


        </div>

    );
};

export default Reviews;