import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BriefcaseIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className=' sticky top-0 z-10'>
            <div className='my-container flex justify-between items-center bg-white shadow-xl py-5'>
                {/* logo section */}
                <Link to='/'>
                    <div className='relative flex items-center'>
                        <BriefcaseIcon className="h-8 w-8 text-[#9873FF]" />
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
                <ul className=' md:flex items-center hidden space-x-8'>
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

                {/* mobile bar section */}
                <div className='md:hidden'>
                    {/* bars Buttons added */}
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3BottomRightIcon className="h-9 w-9 text-[#9873FF]" />
                    </button>
                    {
                        isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full z-10'>
                                <div className='flex justify-between items-center p-5 bg-white shadow-2xl border'>
                                    {/* page title section */}
                                    <div>
                                        <Link to='/'>
                                            <div className=' inline-flex items-center'>
                                                <BriefcaseIcon className="h-8 w-8 text-[#9873FF]" />
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
                                    </div>
                                    {/* dropdown menu and close button */}
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close MEnu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <XMarkIcon className="w-9 text-[#5d6fe3]" />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile nav section */}
                                <div>
                                    <nav>
                                        <ul className='space-y-4 bg-white h-full'>
                                            <li className='px-3 hover:bg-slate-200'>
                                                <Link to='/' className='default'>
                                                    Home
                                                </Link>
                                            </li>
                                            <li className='px-3 hover:bg-slate-200'>
                                                <Link to='statistics' className='default'>
                                                    Statistics
                                                </Link>
                                            </li>
                                            <li className='px-3 hover:bg-slate-200'>
                                                <Link to='application' className='default'>
                                                    Application Job
                                                </Link>
                                            </li>
                                            <li className='px-3 hover:bg-slate-200'>
                                                <Link to='blog' className='default'>
                                                    Blog
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;