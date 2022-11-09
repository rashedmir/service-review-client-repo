import React from 'react';

const ShowReview = ({review, card_id}) => {

    return (
        <div>
            {
                review.cardId === card_id?(<>
                    <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-200 md:rounded-xl mb-5">
                        <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8">
                            <h3 class="font-3 text-lg font-semibold text-gray-500">Section: {review.category_title}</h3>
                            <p class="font-2 my-4 text-xl font-bold">{review.review}</p>
                        </blockquote>
                        <figcaption class="flex justify-center items-center space-x-3">
                            <img class="w-9 h-9 rounded-full" src={review.userImage} alt="img" />
                            <div class="space-y-0.5 font-medium dark:text-white text-left">
                                <div className='font-2 text-gray-700'>{review.userName}</div>
                                <div class="font-2 text-sm font-light text-gray-500 dark:text-gray-400">{review.date.slice(0, 10)} | {review.date.slice(11, 19)}</div>
                                {/* <div class="text-sm font-light text-gray-500 dark:text-gray-400">{review.date.slice(11, 19)}</div> */}
                            </div>
                        </figcaption>
                    </figure>
                </>) : (<></>)
            }
            
        </div>
    );
};

export default ShowReview;