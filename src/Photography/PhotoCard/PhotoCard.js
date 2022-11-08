import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const PhotoCard = ({ category }) => {
    const {_id, service_id, img, title, description} = category;
    return (
        <div>
            {
                (service_id % 2 === 0) ? (<div className="my-16">
                    <div className="flex flex-row mx-36 items-center">
                        <div className='w-1/2'>
                            <PhotoProvider>
                                <PhotoView src={img}>
                                    <img src={img} alt='img' className="w-4/5 h-full rounded-lg shadow-2xl hover:-rotate-6 transition-transform rotate-6" />
                                </PhotoView>
                            </PhotoProvider>

                        </div>
                        <div className='w-1/2'>
                            <h1 className="text-5xl font-bold">{title}</h1>
                            <p className="py-6 justify-evenly">{description.slice(0, 100)}...</p>
                            <Link to={`/main/category/${_id}`}><button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 
                        focus:ring-gray-400 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2">Explore</button></Link>
                        </div>
                    </div>
                </div>) : (<div className="my-16">
                    <div className="flex flex-row mx-36 items-center">
                        <div className='w-1/2'>
                            <h1 className="text-5xl font-bold">{title}</h1>
                            <p className="py-6 justify-evenly">{description.slice(0, 100)}...</p>
                            <Link to={`/main/category/${_id}`}><button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 
                        focus:ring-gray-400 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2">Explore</button></Link>
                        </div>
                            <div className='w-1/2'>
                                <PhotoProvider>
                                    <PhotoView src={img}>
                                        <img src={img} alt='img' className="w-4/5 h-full rounded-lg shadow-2xl hover:rotate-6 transition-transform -rotate-6" />
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