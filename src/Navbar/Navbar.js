import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import mrp_logo from '../../src/assests/mrp_logo_b.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    return (

        <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" class="flex items-center">
                    <img className='w-14 -mr-5 my-2 rotate-12' src={mrp_logo} alt="logo-img" />
                    <span class="font-2 self-center text-2xl text-gray-500 mt-7">Mir Rashed Photography</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        <li>
                            <a href="/" class="font-3 text-xl block py-2 pr-4 pl-3 text-white rounded md:text-gray-700 md:p-0" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/" class="font-3 text-xl block py-2 pr-4 pl-3 text-gray-400 rounded md:hover:text-gray-700 md:p-0 ">About</a>
                        </li>
                        <li>
                            <a href="/main/allPhotoCategory" class="font-3 text-xl block py-2 pr-4 pl-3 text-gray-400 rounded md:hover:text-gray-700 md:p-0 ">Services</a>
                        </li>

                    </ul>
                </div>
                <div className="flex items-center">
                    {
                        user?.uid ?
                            <>
                                <Link to="/">
                                    <button class="mr-5 ml-0 font-3 text-xl block py-2 pr-4 pl-3 text-gray-400 rounded md:hover:text-gray-700 md:p-0">My Reviews</button>
                                </Link>
                                <Link to="/">
                                    <button class="mr-5 ml-0 font-3 text-xl block py-2 pr-4 pl-3 text-gray-400 rounded md:hover:text-gray-700 md:p-0 ">Add Services</button>
                                </Link>
                                <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                    <span className="sr-only">Open user menu</span>
                                    {user?.photoURL ?
                                        <Tippy content={user?.displayName}><img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="img" /></Tippy>
                                        : <Tippy content="No user logged in"><img className="w-14 h-14 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="img" /></Tippy>
                                    }
                                </button>
                                <span className='ml-5 font-3 text-xl font-bold text-gray-500'>{user?.displayName}</span>
                                <button className="font-3 mr-5 ml-5 text-xl font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={handleLogOut}>Log out</button>
                            </>
                            :
                            <>
                                <Link to="/login" className="mr-5 font-3 text-xl block py-2 pr-4 pl-3 text-white rounded md:text-gray-700 md:p-0">Login</Link>
                                <Link to="/register" className="mr-5 font-3 text-xl block py-2 pr-4 pl-3 text-white rounded md:text-gray-700 md:p-0">Register</Link>
                            </>
                    }
                </div>
            </div>
        </nav>

    );
};

export default Navbar;