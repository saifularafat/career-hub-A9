import React from 'react';

const Company = ({ jobs }) => {
    const { company_name, id, logo, company, location, Salary, job_title } = jobs
   
    return (
        <div>
            <div className='border p-6'>
                <img
                    src={logo}
                    alt="company logo"
                    className='w-2/6'
                />
                <p>{company_name}</p>

            </div>
            
        </div>
    );
};

export default Company;