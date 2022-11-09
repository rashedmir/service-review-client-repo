import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const PhotoCard = ({ category }) => {
    const {_id, service_id, img, title, description, price } = category;
    return (
        <div className='font-3'>
            {
                (service_id % 2 === 0) ? (<div className="my-16">
                    <div className="flex flex-row mx-36 items-center">
                        <div className='w-1/2'>
                            <PhotoProvider>
                                <PhotoView src={img}>
                                    <img src={img} alt='img' className="cursor-zoom-in w-4/5 h-full rounded-lg shadow-2xl hover:-rotate-6 transition-transform rotate-6 " />
                                </PhotoView>
                            </PhotoProvider>

                        </div>
                        <div className='w-1/2'>
                            <h1 className="text-5xl font-bold drop-shadow-lg">{title}</h1>
                            <p className="py-6 text-xl justify-evenly">{description.slice(0, 100)}...</p>
                            <p className='font-3 text-xl font-bold mb-3'>Service offer: <span className='text-2xl'>${price}</span></p>
                            <Link to={`/main/category/${_id}`}><button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 
                        focus:ring-gray-400 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 
                        transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100">Explore</button></Link>
                        </div>
                    </div>
                </div>) : (<div className="my-16">
                    <div className="flex flex-row mx-36 items-center">
                        <div className='w-1/2'>
                            <h1 className="text-5xl font-bold drop-shadow-lg">{title}</h1>
                            <p className="py-6 pr-8 text-xl justify-evenly">{description.slice(0, 100)}...</p>
                            <p className='font-3 text-xl font-bold mb-3'>Service offer: <span className='font-extrabold'>${price}</span></p>
                            <Link to={`/main/category/${_id}`}><button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 
                        focus:ring-gray-400 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 
                        transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100">Explore</button></Link>
                        </div>
                            <div className='w-1/2'>
                                <PhotoProvider>
                                    <PhotoView src={img}>
                                        <img src={img} alt='img' className="cursor-zoom-in w-4/5 h-full rounded-lg shadow-2xl hover:rotate-6 transition-transform -rotate-6" />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                    </div>
                </div>)
            }
            
        </div>
    );
};

export default PhotoCard;