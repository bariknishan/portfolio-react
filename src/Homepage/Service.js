import React from 'react';

const Service = () => {
    return (
        <div className='m-4'>
            <h1 className='text-warning font-bold text-4xl mt-8  text-center py-6'> MY BEST SERVICES 2022</h1>

            <div className=' grid sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-16  py-6'  >

                <div className="card w-100  text-primary-content   ">
                    <div className="card-body   ">
                        <h2 className="card-title text-2xl font-bold text-warning">WEB DEV AND DESIGN</h2>
                        <p className='font-bold'>I design amd develop beautiful website for business pusposes,personal purposes etc.
                            Design and develop webisites with latest technology such as ReacJs,React Router,Hooks,Tailwind, Bootstrap, nodejs, mongodb,stripe  etc. Hire me anytime.
                        </p>
                       
                    </div>
                </div>
                <div className="card w-100   text-primary-content">
                    <div className="card-body  ">
                        <h2 className="card-title text-2xl font-bold text-warning ">WORDPRESS CUSTOMIZATION </h2>
                        <p className='font-bold'>I provide Wordpress theme Customization, plugins customization. Also makes user friendly and resposive websites ,with good UI,UX Design. How to make traffics on website with SEO friendly and give good user experinece.  </p>
                      
                    </div>
                </div>
                <div className="card w-100  text-primary-content">
                    <div className="card-body  ">
                        <h2 className="card-title text-2xl font-bold text-warning ">FIREBASE AND PSD TO HTML</h2>
                        <p  className='font-bold'>I implements firebase authentication system on websites also firebase hosting I convert psd to html figma to html with low cost. I am available to work with active clients and give them best output from myslef.   </p>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;