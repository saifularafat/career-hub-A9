import React from 'react';

const Category = ({ jobs }) => {
    console.log(jobs);
    const { img, name, job, id } = jobs
    return (
        <div className='border shadow-md p-5 rounded-md 
        bg-gray-100 hover:opacity-70 transition duration-200'>
            <img
                src={img}
                alt="category photo"
                className='w-20 h-20 bg-gray-200 rounded-md p-4 mb-8'
            />
            <h2 className='text-xl font-bold text-gray-900 pb-2'>
                {name}
            </h2>
            <p className='text-base font-medium text-slate-400'>
                {job}
            </p>
            <div>
            </div>
        </div>
    );
};

export default Category;