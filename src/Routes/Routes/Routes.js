import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Landing from '../../LandingPage/Landing';

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Landing></Landing>
    }
])

export default routes;