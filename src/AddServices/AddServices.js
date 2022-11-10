import React, { useState } from 'react';
import useTitle from '../Hooks/useTitle';
import './AddServices.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Flip, Slide, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddServices = () => {
    useTitle("Add Service")
    const [category, setCategory] = useState({});
    const [dataLength, setdataLength] = useState({});

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/main/allPhotoCategory';
    fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setdataLength(data))

    const handleAddService = event => {
        event.preventDefault();
        // console.log(user);


        fetch('http://localhost:5000/category', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(category)
        })
            .then(res => res.json())
            .then(data => {
                setTimeout(() => navigate(from, { replace: true }), 500)
                toast.success('Service added successfully', {
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

    const handleInputBlur = event => {
        const service_id = (dataLength.length + 1).toString();
        const field = event.target.name;
        console.log(dataLength);
        const value = event.target.value;
        const newCategory = { ...category, service_id };
        newCategory[field] = value;
        setCategory(newCategory);
    }

    return (

        <form onSubmit={handleAddService}>
            <div className="mx-56">
                <div>
                    <label for="last_name" className="block mb-2 text-xl font-medium text-gray-900">Title</label>
                    <input onBlur={handleInputBlur} type="text" name="title" id="last_name" className="field_input2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Title of the Service" required />
                </div>
                <div>
                    <label for="company" className="block mb-2 text-xl font-medium text-gray-900">Image URL</label>
                    <input onBlur={handleInputBlur} type="text" name="img" id="company" className="field_input2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="http://.....com/abcd.jpg .png" required />
                </div>
                <div>
                    <label for="phone" className="block mb-2 text-xl font-medium text-gray-900">Price in $</label>
                    <input onBlur={handleInputBlur} type="number" name="price" id="phone" className="field_input2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123.00" required />
                </div>
                <div>
                    <label for="website" className="block mb-2 text-xl font-medium text-gray-900">Description</label>
                    <textarea onBlur={handleInputBlur} type="text" name='description' id="message" rows="4" className="field_input1 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300
                 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write something about the service..."></textarea>
                    {/* <label for="website" className="block mb-2 text-xl font-medium text-gray-900">Description</label>
                    <input onBlur={handleInputBlur} type="text" name="description" id="website" className="field_input1 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Write something about the service" required /> */}
                </div>
            </div>

            <div className='text-center'>
                <button type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-24 border border-gray-400 rounded shadow 
                    transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100 my-6">Submit</button><ToastContainer
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

        </form>

    );
};

export default AddServices;