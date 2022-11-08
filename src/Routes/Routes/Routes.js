import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Landing from '../../LandingPage/Landing';
import Login from '../../Login/Login/Login';
import Register from '../../Login/Register/Register';
import Main from '../../Main/Main';
import AllPhotoCategory from '../../Photography/AllPhotoCategory/AllPhotoCategory';
import CategoryDetails from '../../Photography/CategoryDetails/CategoryDetails';
import Photography from '../../Photography/Photography';
import TermsAndConditions from '../../Others/TermsAndConditions/TermsAndConditions';
import Reviews from '../../Reviews/Reviews';

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Landing></Landing>
    },
    {
        path:'/main',
        element: <Main></Main>,
        children:[
            {
                path:'/main/photography',
                element: <Photography></Photography>,
                loader: () => fetch('http://localhost:5000/category')
            },
            {
                path:'/main/allPhotoCategory',
                element:<AllPhotoCategory></AllPhotoCategory>,
                loader: () => fetch('http://localhost:5000/category')
            },
            {
                path: '/main/category/:id',
                element: <CategoryDetails></CategoryDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/main/category/:id',
                element: <Reviews></Reviews>,
                loader: () => fetch(`http://localhost:5000/review`)
            }
            
        ]
    },
    {
        path:'/login',
        element: <Login></Login>
    },
    {
        path:'/register',
        element: <Register></Register>
    },
    {
        path: '/terms',
        element: <TermsAndConditions></TermsAndConditions>
    }
    
])

export default routes;