import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {

    const data = useParams()
    const featured = useLoaderData();
    const [jobsDetails, setJobsDetails] = useState({})

    useEffect(() => {
        if (featured) {
            const selectedJob = featured.find(job =>
                job.id == data.Id);
            setJobsDetails(selectedJob)
        }
    }, [])
    console.log(jobsDetails);
    const { description, educational, responsibility, experiences, email,
        Phone, job_title, salary, location, address, } = jobsDetails;
    return (
        <div>
            <div className='w-full mx-auto py-20 bg-slate-400'>
                <h1 className='text-center text-2xl text-white'>Job Details</h1>
            </div>
            <div>
                <p>Job Description: {description}</p>
                <p>Job Responsibility: {responsibility}</p>
                <p>Educational: {educational}</p>
            </div>
        </div>
    );
};

export default ViewDetails;