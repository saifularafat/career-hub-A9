import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BriefcaseIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div>
            <div className='my-container flex justify-between items-center bg-slate-200 py-5'>
                <Link to='/'>
                    <div className='flex items-center'>
                        <BriefcaseIcon className="h-8 w-8 text-slate-500" />
                        <p className='tracking-wide'>
                            <span className='font-serif text-3xl font-semibold text-rose-700'>D</span>
                            <span className='title  text-sky-500'>e</span>
                            <span className='title text-orange-500'>v</span>
                            <span className='font-serif text-3xl font-semibold text-purple-800'>Z</span>
                            <span className='title text-blue-700'>o</span>
                            <span className='title text-red-800'>n</span>
                            <span className='title text-pink-700'>e</span>
                        </p>
                    </div>
                </Link>
                {/* nav items section activities */}
                <ul className=' lg:flex items-center hidden space-x-8'>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='statistics'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}>
                            Statistics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='application'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}>
                            Application Job
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='blog'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}>
                            Blog
                        </NavLink>
                    </li>
                </ul>

                {/* star button style */}
                <div>
                    <button className='btn-star'>Star Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Header;