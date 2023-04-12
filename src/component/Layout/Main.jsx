import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <div className='min-h-[calc(100vh-306px)] mb-36'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;