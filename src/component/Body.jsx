import React from 'react';
import Sidebar from '../component/Sidebar';
import Feed from '../component/Feed';
import { Outlet } from 'react-router-dom';

const Body = () => {
    return (
        <div className='flex  '>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Body