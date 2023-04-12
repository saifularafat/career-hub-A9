import React from 'react';
import { Link } from 'react-router-dom';

const ApplicationCart = ({ application }) => {
    console.log(application);
    const { logo, company_title, company, location, salary, time, id } = application
    /*  */
    return (
        <div className='my-container'>
            <div className='flex items-center border my-6 p-6 border-[#E8E8E8] shadow-lg'>
                <div className='md:w-50 w-40 md:h-40 h-30 bg-[#F4F4F4] border rounded-md py-8'>
                    <img
                        src={logo}
                        alt=""
                        className='h-24 w-full p-4'
                    />
                </div>
                <div className='flex justify-between items-center w-full'>
                    <div className='pl-6'>
                        <h2 className='text-2xl font-bold pb-2 text-neutral-900'>
                            {company_title}
                        </h2>
                        <p className='text-xl font-semibold tracking-wide text-subtitle pb-3'>
                            {company}
                        </p>
                        <p className='inline-block pb-3'>
                            <span className='time'>{time}</span>
                            <span className='time ml-4'>Full Time</span>
                        </p> <br />
                        <div className='inline-flex items-center text-xl font-medium text-subtitle'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>

                            <p className='text-subtitle pl-1'>{location}</p>
                            <p className='text-xl font-medium text-subtitle pl-5 inline-flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className='pl-2'>{salary}</span>
                            </p>
                        </div>
                    </div>
                    <div className=''>
                        <Link
                            to={`../featured/${id}`}>
                            <button
                                className='company-btn'
                            >View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationCart;