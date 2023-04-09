import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='my-container flex justify-between items-center bg-slate-200 py-5'>
                <Link to='/'>
                    <p className='tracking-wide'>
                        <span className='font-serif text-3xl font-semibold text-rose-700'>D</span>
                        <span className='title  text-sky-500'>e</span>
                        <span className='title text-orange-500'>v</span>
                        <span className='font-serif text-3xl font-semibold text-purple-800'>Z</span>
                        <span className='title text-blue-700'>o</span>
                        <span className='title text-red-800'>n</span>
                        <span className='title text-pink-700'>e</span>
                    </p>
                </Link>
                <div className=''>
                    <Link to='/' className='link-tag'>Home</Link>
                    <Link to='statistics' className='link-tag'>Statistics</Link>
                    <Link to='application' className='link-tag'>Application Job</Link>
                    <Link to='blog' className='link-tag'>Blog</Link>
                </div>
                <div>
                    <button>Star Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Header;