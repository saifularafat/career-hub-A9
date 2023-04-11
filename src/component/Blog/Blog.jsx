import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-container mt-12 relative '>
            <div>
                <div className='blog-cart hover:bg-amber-200'>
                    <h2 className='blog-question text-orange-700'>Question.1 : why the context api use?</h2>
                    <p className='blog-ans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo obcaecati temporibus, dignissimos id facilis quidem quasi modi deserunt ipsum animi quibusdam repellendus unde adipisci debitis ut sit aliquam tenetur cumque sunt consequuntur saepe. Tempore, ipsam exercitationem vero dolorum corrupti, qui commodi modi quod reiciendis eius alias vitae molestiae. Sed, consequuntur.</p>
                </div>
                <div className='blog-cart hover:bg-rose-200'>
                    <h2 className='blog-question text-blue-600'>Question.2 : What is react custom hook ?</h2>
                    <p className='blog-ans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo obcaecati temporibus, dignissimos id facilis quidem quasi modi deserunt ipsum animi quibusdam repellendus unde adipisci debitis ut sit aliquam tenetur cumque sunt consequuntur saepe. Tempore, ipsam exercitationem vero dolorum corrupti, qui commodi modi quod reiciendis eius alias vitae molestiae. Sed, consequuntur.</p>
                </div>
            </div>
            <div>
                <div className='blog-cart hover:bg-teal-300 hover:text-stone-700'>
                    <h2 className='blog-question text-red-950'>Question.3 : What is the useRef ?</h2>
                    <p className='blog-ans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo obcaecati temporibus, dignissimos id facilis quidem quasi modi deserunt ipsum animi quibusdam repellendus unde adipisci debitis ut sit aliquam tenetur cumque sunt consequuntur saepe. Tempore, ipsam exercitationem vero dolorum corrupti, qui commodi modi quod reiciendis eius alias vitae molestiae. Sed, consequuntur.</p>
                </div>
                <div className='blog-cart hover:bg-indigo-300'>
                    <h2 className='blog-question text-fuchsia-950'>Question.4 : What is the useMemo ?</h2>
                    <p className='blog-ans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo obcaecati temporibus, dignissimos id facilis quidem quasi modi deserunt ipsum animi quibusdam repellendus unde adipisci debitis ut sit aliquam tenetur cumque sunt consequuntur saepe. Tempore, ipsam exercitationem vero dolorum corrupti, qui commodi modi quod reiciendis eius alias vitae molestiae Sed, consequuntur.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;