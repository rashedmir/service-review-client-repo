import React, { useState } from 'react';
import './Photography.css'
import { Link, useLoaderData } from 'react-router-dom';
import PhotoCard from './PhotoCard/PhotoCard';
import useTitle from '../Hooks/useTitle';

const Photography = () => {
    useTitle('Photography');
    const categories = useLoaderData()
    return (
        <div>
            <div>

                <div className='bg-img py-32 w-screen text-center shadow-2xl'>
                    <div>
                        <h1 className='strike'><span className='font-3 text-10xl align text-white drop-shadow-2xl'>P H O T O G R A P H Y</span></h1>
                    </div>
                </div>
                <div>
                    {
                        categories.slice(-3).reverse().map(category => (<PhotoCard key={category._id} category={category}></PhotoCard>))
                    }
                </div>
                <div className='text-center my-10'>
                    <Link to={"/main/allPhotoCategory"}>
                        <button type='button' className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow 
                    transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100">
                            See all
                        </button>
                    </Link>
                </div>
            </div>
            <div>

                <div id="indicators-carousel" className="relative mx-28 my-10" data-carousel="static">
                    {/* <!-- Carousel wrapper --> */}
                    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                        {/* <!-- Item 1 --> */}
                        <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="active">
                            <img src="https://cdn.fstoppers.com/media/2020/11/25/90_of_landscape_photography_in_only_20_minutes_08.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                        {/* <!-- Item 2 --> */}
                        <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
                            <img src="https://i.pinimg.com/736x/e7/26/dc/e726dc39c4b997503f3921cf9f662d95.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                        {/* <!-- Item 3 --> */}
                        <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
                            <img src="https://orlandosydney.com/wp-content/uploads/2021/10/Sydney-Street-Photo-Circular-Quay-orlandosydney.com-DSCF4298-2.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                        {/* <!-- Item 4 --> */}
                        <div class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform" data-carousel-item="">
                            <img src="https://blogs-images.forbes.com/ceciliarodriguez/files/2018/08/1.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                        {/* <!-- Item 5 --> */}
                        <div class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
                            <img src="https://camerajabber.com/wp-content/uploads/2017/12/SportsPhotographyTips.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                    </div>
                    {/* <!-- Slider indicators --> */}
                    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" class="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                        <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                    </div>
                    {/* <!-- Slider controls --> */}
                    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
                        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
                        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Photography;