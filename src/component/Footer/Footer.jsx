import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#1A1919] text-center py-20'>
            <div className='my-container grid grid-cols-1 md:grid-cols-5 pt-8 gap-6 border-b-2 border-slate-600'>
                <div className=' text-left'>
                    <h2 className=' text-white text-3xl font-bold pb-5'>Job Zone</h2>
                    <p className='text-white text-justify'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className='flex gap-4 py-9'>
                        <div className='bg-white w-10 h-10 rounded-[50px] items-center'>
                            <img src="../../../public/footerImage/facebook.png" alt="" className='w-10 h-8 pt-1 mx-auto'
                            />
                        </div>
                        <div className='footer-img'>
                            <img src="../../../public/footerImage/twitter.png" alt="" className='w-6' />
                        </div>
                        <div className='footer-img'>
                            <img src="../../../public/footerImage/instagram.png" alt="" className='w-6' />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h2 className='footer-title'>Company</h2>
                    <p className='footer-description hover:text-opacity-70 hover:underline'>About Us </p>
                    <p className='footer-description hover:text-opacity-70 hover:underline'>Work</p>
                    <p className='footer-description hover:text-opacity-70 hover:underline'>Latest News</p>
                    <p className='footer-description hover:text-opacity-70 hover:underline'>Careers</p>
                </div>
                <div className=''>
                    <h2 className='footer-title'>Product</h2>
                    <p className='footer-description'>Prototype</p>
                    <p className='footer-description'>Plans & Pricing</p>
                    <p className='footer-description'>Customers</p>
                    <p className='footer-description'>Integrations</p>
                </div>
                <div className=''>
                    <h2 className='footer-title'>Product</h2>
                    <p className='footer-description'>Help Desk</p>
                    <p className='footer-description'>Sales</p>
                    <p className='footer-description'>Developers</p>
                </div>
                <div>
                    <h2 className='footer-title'>Contact</h2>
                    <p className='text-white pb-3'>524 Broadway , NYC</p>
                    <p className='text-white hover:underline'>+1 777 - 978 - 5570</p>
                </div>
            </div>
            <div className='pl-10 md:flex justify-between items-center px-10'>
                <p className='text-left text-slate-400 pt-4'>@web developer by <span className='underline text-xl text-orange-300 cursor-pointer'>saiful arafat</span></p>
                <p className='text-left text-slate-400 pt-4 '>Powered by CareerHub</p>
            </div>
        </div>
    );
};

export default Footer;