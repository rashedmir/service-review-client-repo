import React, { useState } from 'react';

const AddServices = () => {
    const [category, setCategory] = useState({});
    const [dataLength, setdataLength] = useState({});

    const handleAddService = event => {
        event.preventDefault();
        // console.log(user);

        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setdataLength(data))

        fetch('http://localhost:5000/category', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(category)
        })
            .then(res => res.json())
            .then(data => {
                alert('Service added successfully')
                event.target.reset();
            })
    }
    
    const handleInputBlur = event => {
        const service_id = (dataLength.length + 1).toString();
        const field = event.target.name;
        console.log(service_id);
        const value = event.target.value;
        const newCategory = { ...category, service_id };
        newCategory[field] = value;
        setCategory(newCategory);
    }

    return (

        <form onSubmit={handleAddService}>
            <div class="">
                <div>
                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                    <input onBlur={handleInputBlur} type="text" name="title" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Title of the Service" required />
                </div>
                <div>
                    <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image URL</label>
                    <input onBlur={handleInputBlur} type="text" name="img" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="http://.....com/abcd.jpg .png" required />
                </div>
                <div>
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price in $</label>
                    <input onBlur={handleInputBlur} type="text" name="price" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123.00" required />
                </div>
                <div>
                    <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                    <input onBlur={handleInputBlur} type="text" name="description" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Write something about the service" required />
                </div>

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
        </form>

    );
};

export default AddServices;