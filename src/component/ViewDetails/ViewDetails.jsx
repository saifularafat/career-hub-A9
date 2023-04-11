import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = ({ params }) => {
    // const jobDetails = useParams(params)
    const jobDetails = useLoaderData()
    console.log(jobDetails);
    return (
        <div>
            <p>This is a View Details Component</p>
        </div>
    );
};

export default ViewDetails;