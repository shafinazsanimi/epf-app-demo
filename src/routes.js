import React from 'react';
import MainLayout from './layouts/index'
import MainTable from './views/table';
import Details from './views/details';

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <MainTable /> },
            { path: '/details/:id', element: <Details /> }
        ]
    },
];

export default routes;
