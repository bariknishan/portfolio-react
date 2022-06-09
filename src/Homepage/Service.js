import React from 'react';

const Service = () => {
    return (
        <div className='m-4'>
            <h1 className='text-white font-bold text-4xl mt-8  text-center py-6'> Service I Provides 2022</h1>

            <div className=' grid sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-16  py-6'  >

                <div className="card w-100  text-primary-content   ">
                    <div className="card-body   ">
                        <h2 className="card-title text-2xl font-bold text-warning">Web Development & Design</h2>
                        <p className='font-bold'>I design amd develop beautiful website for business pusposes,  personal puposes etc.
                            Design and develop webisites with lates technology such as React,Tailwind, Bootstrap,materialUI, nodejs, mongodb,stripe  etc. Hire me anytime.
                        </p>
                       
                    </div>
                </div>
                <div className="card w-100   text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-warning ">Wordpress & Customization</h2>
                        <p className='font-bold'>I provide Wordpress theme Customization, plugins customization. Also makes user friendly and respncive websites ,with good UI,UX Design. How to make traffics on website with SEO friendly and give good user experinece.  </p>
                      
                    </div>
                </div>
                <div className="card w-100  text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-warning ">Firebase And PSD TO HTML</h2>
                        <p  className='font-bold'>I implements firebase authentication system on websites also firebase hosting. if you need nosql database system on your system I can  provide that. I convert psd to html figma to html with low cost.   </p>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;