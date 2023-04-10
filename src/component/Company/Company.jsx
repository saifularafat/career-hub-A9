import React from 'react';

const Company = ({ company }) => {
    console.log(company);
    return (
        <div>
            <p>{company.name}</p>
        </div>
    );
};

export default Company;