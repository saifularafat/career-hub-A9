import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center flex-initial justify-center items-center mt-14' >
            <p className='emoji mb-10 bg-white'>☹</p>
            <p className=''>
                <span className='four-style pr-1 text-neutral-700'>4</span>
                <span className='zero'>0</span>
                <span className='four-style pl-1 text-slate-800'>4</span>
            </p>
            <h5 className='found-style'>Not Found..!</h5>


            <Link to='/'>
                <button className='error-btn'>Go Back</button>
            </Link>
        </div >
    );
};

export default Error;