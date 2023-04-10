import React from 'react';
import Lottie from "lottie-react";
import Application from "../../../public/job.json";
const Home = () => {
    return (
        <div className='md:flex justify-between items-center'>
            <div className='w-[570px] mx-auto pl-11 border '>
                <h2 className=' text-6xl font-bold leading-tight text-gray-800'>
                    One Step <br /> 
                    Closer To Your <br /> 
                    <span className='text-[#9873FF]'>Dream Job</span>
                </h2>
                <p className='max-w-[500px] text-lg text-slate-500 md:mb-8 my-3 md:mt-6'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>

                <button className='btn-star'>Get Started</button>
            </div>
            <div>
                <Lottie animationData={Application} loop={true} />
            </div>
        </div>
    );
};

export default Home;