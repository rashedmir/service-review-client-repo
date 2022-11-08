import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const Reviews = ({card_id}) => {
    const { user } = useContext(AuthContext); 

    const [review, setReviews] = useState({});
    const handleAddUser = event => {
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
                alert('User added successfully')
                event.target.reset();
            })
    }

    const handleInputBlur = event => {
        const userId = user.uid;
        const userName = user.displayName;
        const userImage = user.photoURL;
        const cardId = card_id;
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review, userId, userName, userImage, cardId };
        newReview[field] = value;
        console.log(newReview);
        setReviews(newReview);
    }


    return (

        <div class="grid mb-8 rounded-lg shadow-sm md:mb-12">
            <h2>Reviews</h2>
            <form onSubmit={handleAddUser} class="mb-6">
                <input onBlur={handleInputBlur} name='review' type="text" id="large-input" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border 
                border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder='Type your review and suggestions here...' />
                <button type='submit' className="mt-5 float-right bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Submit review
                </button>
            </form>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-200 rounded border-b border-gray-200 md:rounded md:border-r">
                <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8">
                    <h3 class="text-lg font-semibold text-gray-500">Very easy this was to integrate</h3>
                    <p class="my-4 font-light">If you care for your time, I hands down would go with this."</p>
                </blockquote>
                <figcaption class="flex justify-center items-center space-x-3">
                    <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="img"/>
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                            <div className='text-gray-700'>Bonnie Green</div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                        </div>
                </figcaption>
            </figure>
            
        </div>

    );
};

export default Reviews;