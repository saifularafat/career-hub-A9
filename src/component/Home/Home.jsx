import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import Application from "../../../public/job.json";
import Category from '../Category/Category';
const Home = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])


    return (
        <div>
            {/* content and animation added start */}
            <div className='md:flex justify-between items-center pt-8 bg-[#F9F9FF]'>
                <div>
                    <Lottie animationData={Application} loop={true} />
                </div>

                <div className='w-full md:w-[570px] md:mx-auto md:pl-11 pl-2 mt-3'>
                    <h2 className=' text-2xl md:text-6xl font-bold leading-tight text-gray-800'>
                        One Step <br />
                        Closer To Your <br />
                        <span className='text-[#9873FF]'>Dream Job</span>
                    </h2>
                    <p className='w-full md:max-w-[500px] text-base md:text-lg text-slate-500 md:mb-8 my-3 md:mt-6'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>

                    <button className='btn-star'>Get Started</button>
                </div>
            </div>
            {/* content and animation added end */}
            {/* category section start */}
            <div>
                <div className='text-center'>
                    <h3 className='text-5xl font-bold text-slate-800 mt-24 pb-4'>Job Category List</h3>
                    <p className='font-medium text-slate-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                {/* category section props transfer of Category component */}
                <div className='grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-5 mx-10 mt-10 '>
                    {
                        category.map(jobs => <Category
                            key={jobs.id}
                            jobs={jobs}
                        ></Category>)
                    }
                </div>
            </div>
            {/* category section start */}


        </div>
    );
};

export default Home;