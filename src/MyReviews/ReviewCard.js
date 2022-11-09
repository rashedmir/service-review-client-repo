import React from 'react';

const ReviewCard = ({allReview, user}) => {
    return (
        <div>
            {
                user.uid == allReview.userId ? (
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-200 md:rounded-xl mb-5">
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
                    </figure>  
                ):(<></>)
            }
        </div>
    );
};

export default ReviewCard;