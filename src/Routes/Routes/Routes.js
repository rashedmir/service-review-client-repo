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
                path: '/main/private/:id',
                element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
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