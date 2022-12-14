import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { ToastContainer, toast, Flip, Slide, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reviews = ({ card_id, cat_title }) => {
    const { user } = useContext(AuthContext);

    const [review, setReviews] = useState({});


    const handleAddReview = event => {
        event.preventDefault();

        fetch('https://b6a11-service-review-server-side-rashedmir.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                setTimeout(() => window.location.reload(false), 2000)
                toast.success('Review added Successfully', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
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

        <div className="grid rounded-lg  md:mb-12">
            <div className='my-14 text-center'>

                {
                    user?.uid ?
                        <>
                            <form onSubmit={handleAddReview} className="mb-6">
                                <input onBlur={handleInput} name='review' type="text" id="large-input" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border 
                                border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder='Type your review and suggestions here...' required />
                                <button type='submit' className="mt-5 float-right bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                    Submit review
                                </button>
                            </form>
                        </>
                        :
                        <>
                            <button><Link className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow 
                    transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100" to={`/main/private/${card_id}`}>Login to Comment</Link></button>
                        </>
                }
            </div><ToastContainer
                theme="dark"
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />


        </div>

    );
};

export default Reviews;