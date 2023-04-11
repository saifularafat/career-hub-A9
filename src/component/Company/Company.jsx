import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link, useParams } from 'react-router-dom';

const Company = ({ jobs }) => {
    const { company_title, id, logo, company, location, salary, job_title, time } = jobs
// const dynamicId = useParams(id)
    return (
        <div className='border p-6 shadow-md rounded'>
            <img
                src={logo}
                alt="company logo"
                className='w-2/6 h-28 '
            />
            <h2 className='text-2xl font-bold text-neutral-900'
            >{company_title}</h2>
            <p className='text-xl font-semibold tracking-wide text-subtitle pb-3'>
                {company}</p>
            <p className='inline-block'>
                <span className='time'>{time}</span>
                <span className='time ml-2'>Full Time</span>
            </p>
            <div className='pt-4 md:flex items-center'>
                <div className='inline-flex items-center text-xl font-medium text-subtitle'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>

                    <p className='text-subtitle pl-1'>{location}</p>
                </div>
                <p className='text-xl font-medium text-subtitle pl-5 inline-flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className='pl-2'>{salary}</span>
                </p>
            </div>
            <Link 
            to={`/featured/${id}`}>
                <button className='company-btn'>View Details</button>
            </Link>
        </div>
    );
};

export default Company;