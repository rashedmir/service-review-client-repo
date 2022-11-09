import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { ToastContainer, toast, Flip, Slide, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from '../../Footer/Footer';
import useTitle from '../../Hooks/useTitle';


const Register = () => {
    useTitle('Register');

    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const notifyEnrolled = () =>
        toast.success('Signed up Successfully. You can log in now', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                form.reset();


                handleUpdateUserProfile(name, photoURL);
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        navigate(from, { replace: true });
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }


    return (
        <div className='bg-gray-200 h-screen'>
            <div className='flex flex-col items-center'>
                {/* <Header></Header> */}
                <div className=''>
                    <Link to='/'>
                        <div className='flex items-center my-10'>
                            {/* <img className='w-28 mr-5 rounded-lg' src={logo} alt='img' /> */}
                            <h1 className='text-5xl font-bold text-gray-600'>Mir Rashed Photography</h1>
                        </div>
                    </Link>
                </div>
                <div className='flex flex-col items-center md:w-1/3 bg-white rounded-lg mx-16 text-gray-800 p-5 mb-16'>
                    <div>
                        <h1 className='font-bold text-3xl mb-2'>Register account</h1>
                    </div>
                    <div>
                        <p className='mb-5'>Already have an account? <Link className='text-blue-600' to='/login'>Log In</Link></p>
                    </div>
                    <div className='flex flex-row items-center mt-5'>
                        <hr className='border-2 w-60 mr-5'></hr>
                        <p className='font-bold text-2xl text-gray-300'>or</p>
                        <hr className='border-2 w-60 ml-5'></hr>
                    </div>
                    <form onSubmit={handleSubmit} className='w-11/12 mt-8'>
                        <div className="mb-6">
                            <p className="block mb-2 text-sm font-medium text-gray-900">Full Name</p>
                            <input name="name" type="text" id="f_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                             focus:border-blue-500 block w-full p-2.5 " placeholder="Jhankar Mahbub" />
                        </div>
                        <div className="mb-6">
                            <p className="block mb-2 text-sm font-medium text-gray-900 ">Photo Link</p>
                            <input name="photo" type="text" id="p_link" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                             focus:border-blue-500 block w-full p-2.5 " placeholder="http://.....com/abcd.jpg .png" />
                        </div>
                        <div className="mb-6">
                            <p className="block mb-2 text-sm font-medium text-gray-900 ">Your email</p>
                            <input name="email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                             focus:border-blue-500 block w-full p-2.5 " placeholder="name@mrphotography.com" required />
                        </div>
                        <div className="mb-6">
                            <p className="block mb-2 text-sm font-medium text-gray-900 ">Your password</p>
                            <input name="password" type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                            focus:border-blue-500 block w-full p-2.5 " placeholder='••••••••••••' required />
                        </div>
                        <div className="flex items-center mb-4">
                            <input onClick={handleAccepted} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 ">{<>Accept <Link className='text-blue-600' to="/terms">Terms & conditions</Link></>}</label>
                        </div>
                        <button type="submit" disabled={!accepted} className="disabled:bg-gray-400 text-white bg-blue-700 focus:ring-4 focus:outline-none 
                        focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Sign up</button>
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
                        <div>{error}</div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;