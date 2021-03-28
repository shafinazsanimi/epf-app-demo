import React from 'react';
import MainLayout from './layouts/index'
import MainTable from './views/table';

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <MainTable /> }
        ]
    },
];

export default routes;
