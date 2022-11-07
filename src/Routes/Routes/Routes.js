import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Landing from '../../LandingPage/Landing';
import Main from '../../Main/Main';
import Photography from '../../Photography/Photography';

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
                element: <Photography></Photography>
            }
        ]
    },
])

export default routes;