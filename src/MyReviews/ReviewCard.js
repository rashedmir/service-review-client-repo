import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import edit from '../../src/assests/edit.png'
import del from '../../src/assests/delete.png'
import { ToastContainer, toast, Flip, Slide, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReviewCard = ({ allReview, user }) => {
    const [reviewDisplay, setreviewDisplay] = useState(allReview)

    const handleDelete = review => {
        const agree = window.confirm(`Are you sure you want to delete: ${allReview.review}`)
        console.log(agree);
        if (agree) {
            console.log("Deleting review with id:", allReview._id);
            fetch(`https://b6a11-service-review-server-side-rashedmir.vercel.app/review/${allReview._id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        setTimeout(() => window.location.reload(false), 2000)
                        toast.success('Review deleted Successfully', {
                            position: "top-center",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                })
        }
    }

    return (
        <div>
            {
                user.uid == allReview.userId && (
                    <figure className="grid grid-cols-12 gap-5 justify-center items-center p-8 text-center bg-gray-200 md:rounded-xl mb-5 mx-52">
                        <div className='border-2 col-span-11'>
                            <blockquote className="mx-auto mb-4 max-w-2xl text-gray-700 lg:mb-8">
                                <h3 className="font-3 text-lg font-semibold text-gray-400">Section: {allReview.category_title}</h3>
                                <p className="font-2 my-4 text-xl font-bold">{allReview.review}</p>
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">
                                <img className="w-9 h-9 rounded-full" src={allReview.userImage} alt="img" />
                                <div className="space-y-0.5 font-medium dark:text-white text-left">
                                    <div className='font-2 text-gray-700'>{allReview.userName}</div>
                                    <div className="font-2 text-sm font-light text-gray-500 dark:text-gray-400">{allReview.date.slice(0, 10)} | {allReview.date.slice(11, 19)}</div>
                                </div>
                            </figcaption>
                        </div>
                        <div className='float-right border-2'>
                            <button className='' type="submit"><Link to={`/main/private/update/${allReview._id}`}><img className='w-7 mr-5' src={edit} alt="edit-img" /></Link></button>
                            <button onClick={() => handleDelete(allReview.review)} type="submit"><Link><img className='w-8' src={del} alt="edit-img" /></Link></button>
                            <ToastContainer
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
                    </figure>
                )
            }
        </div>
    );
};

export default ReviewCard;