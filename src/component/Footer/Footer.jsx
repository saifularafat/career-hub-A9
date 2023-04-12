import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#1A1919] text-center mt-40'>
            <div className='my-container grid grid-cols-1 md:grid-cols-4 pt-8 gap-5'>
                <div className=' text-left'>
                    <h2 className=' text-white text-3xl font-bold pb-5'>Job Zone</h2>
                    <p className='text-white text-justify'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className='flex gap-4 py-9'>
                        <div className='bg-white w-10 h-10 rounded-[50px] items-center'>
                            <img src="../../../public/footerImage/facebook.png" alt="" className='w-10 h-8 pt-1 mx-auto'
                            />
                        </div>
                        <div className='footer-img'>
                            <img src="../../../public/footerImage/twitter.png" alt="" className='w-6'/>
                        </div>
                        <div className='footer-img'>
                            <img src="../../../public/footerImage/instagram.png" alt="" className='w-6'/>
                        </div>
                    </div>
                </div>
                <div className='w-2/12'>vnsdkjb</div>
                <div className='w-2/12'>gafgafa4121</div>
                <div className='w-1/3'>saifdyk</div>
            </div>
        </div>
    );
};

export default Footer;