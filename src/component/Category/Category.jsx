import React from 'react';

const Category = ({ jobs }) => {
    console.log(jobs);
    const {img, name, job, id} = jobs
    return (
        <div>
            <h2>Name: {name}</h2>
            <div>
                
            </div>
        </div>
    );
};

export default Category;