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
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AddServices from '../../AddServices/AddServices';
import MyReviews from '../../MyReviews/MyReviews';
import EditReview from '../../EditReview/EditReview';
import Blog from '../../Blog/Blog';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Landing></Landing>
    },
    {
        path: '/main',
        element: <Main></Main>,
        children: [
            {
                path: '/main/photography',
                element: <Photography></Photography>,
                loader: () => fetch('https://b6a11-service-review-server-side-rashedmir.vercel.app/category')
            },
            {
                path: '/main/allPhotoCategory',
                element: <AllPhotoCategory></AllPhotoCategory>,
                loader: () => fetch('https://b6a11-service-review-server-side-rashedmir.vercel.app/category')
            },
            {
                path: '/main/category/:id',
                element: <CategoryDetails></CategoryDetails>,
                loader: ({ params }) => fetch(`https://b6a11-service-review-server-side-rashedmir.vercel.app/category/${params.id}`)
            },
            {
                path: '/main/private/:id',
                element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b6a11-service-review-server-side-rashedmir.vercel.app/category/${params.id}`)
            },
            {
                path: '/main/private/addServices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>,
            },
            {
                path: '/main/private/myReview',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
            },
            {
                path: '/main/private/update/:id',
                element: <PrivateRoute><EditReview></EditReview></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b6a11-service-review-server-side-rashedmir.vercel.app/review/${params.id}`)
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/terms',
        element: <TermsAndConditions></TermsAndConditions>
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    }
])

export default routes;