import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import edit from '../../src/assests/edit.png'
import del from '../../src/assests/delete.png'

const ReviewCard = ({ allReview, user }) => {
    // console.log("kirey bha", allReview);
    const [reviewDisplay, setreviewDisplay] = useState(allReview)
    console.log("ki hoise", reviewDisplay._id , "jato", allReview._id);

    const handleDelete = review => {
        const agree = window.confirm(`Are you sure you want to delete: ${allReview.review}`)
        console.log(agree);
        if (agree) {
            console.log("Deleting review with id:", allReview._id);
            fetch(`http://localhost:5000/review/${allReview._id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Review deleted Successfully');
                    window.location.reload(false);
                    const remainingUsers = reviewDisplay.filter(usr => usr._id !== allReview._id);
                    console.log("ami asi", remainingUsers);
                    setreviewDisplay(remainingUsers);
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
                        </div>
                    </figure>
                )
            }
        </div>
    );
};

export default ReviewCard;