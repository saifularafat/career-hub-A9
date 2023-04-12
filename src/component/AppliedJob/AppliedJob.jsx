import React from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import ApplicationCart from '../ApplicationCart/ApplicationCart';

const AppliedJob = () => {
    const jobData = useLoaderData();

    let newCart = []
    const saveApplication = getShoppingCart();
    for (const id in saveApplication) {
        const jobItems = jobData.find(job => job.id === id);
        if (jobItems) {
            newCart.push(jobItems)
        }
    }

    return (
        <div>
            <div className='banner'>
                <h2 className='banner-title'>Application Job</h2>
            </div>
            <div className='text-right mr-28 my-10'>
                <button className='remote-onsite-btn mr-3'>Remote</button> 
                <button className='remote-onsite-btn'>Onsite</button>
            </div>

            <div className=''>
                {
                    newCart.map(application => <ApplicationCart
                        key={application.id}
                        application={application}
                    ></ApplicationCart>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;