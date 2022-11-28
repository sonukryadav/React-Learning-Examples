import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import NewUser from './NewUser';
import Nav from './Nav';
import Routing from './Routing';
import ProductDetails from './ProductDetails';

const ReduxWeb = () => {
    return (
        <div style={{ border: '2px dotted black', padding: '5px' }}>
            <Nav />
            <Routing />
        </div>
    )
};

export default memo(ReduxWeb);
