import React from 'react';
import { Link } from 'react-router-dom';
import './Resume.css'
import screen1 from '../screeshort/s1.png'
import screen2 from '../screeshort/s2.png'
import screen3 from '../screeshort/s3.png'
import screen4 from '../screeshort/s4.png'
import screen5 from '../screeshort/s5.png'
import screen6 from '../screeshort/s6.png'
import screen7 from '../screeshort/s7.png'
import screen8 from '../screeshort/s8.png'
import screen9 from '../screeshort/s9.png'


const Resume = () => {
    return (
        <div className='m-8'>

            <h1 className='text-3xl font-bold text-white'> Some projects </h1>
            <div className='text-white mt-4'>
                <h1 className='text-xl'> Electric Manufacturer website Full-Stack.</h1>
                <h1 className='text-xl'> Details:</h1>
                <p className='text-secondary'>Technology: React Js, Tailwind CSS, DaisyUI, Firebase authentication, Nodejs, MongoDB, stripe.</p>
                <p>Description: This is a manufacturer website, where I used multiple react hooks. And react-router.

                    There is an admin panel where the user can see his order. I also implemented a stripe payment system.

                    There is also a firebase Authentication login, and signout system. After Login users can see various features and able to order.
                </p>

                <p>Demo </p>

                <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2  m-4 gap-5'>
                    <img className='img' src={screen1} alt="" />
                    <img className='img' src={screen2} alt="" />
                    <img className='img' src={screen3} alt="" />
                </div>


                <p>Live-Site: <a className='text-blue-500' href="https://electric-manufacturer-5c625.web.app/">https://electric-manufacturer-5c625.web.app/</a></p>

                <p>code- server-Site: <a className='text-blue-500' href=": https://github.com/bariknishan/manufacturer-website-12-server">https://github.com/bariknishan/manufacturer-website-12-server</a>
                </p>
                <p>code-client-code: <a className='text-blue-500' href=" https://github.com/bariknishan/manufacturer-website-12-client">https://github.com/bariknishan/manufacturer-website-12-client</a></p>




            </div>






            <div className='text-white mt-8'>
                <h1 className='text-xl'>Computer Warehouse Website Full-stack</h1>
                <p className='text-secondary'>Technology: React Js, Tailwind CSS, DaisyUI, Firebase authentication, Nodejs, MongoDB, </p>

                <p>	This is a computer warehouse website. Where I used the user login system
                    User can add and remove multiple orders it is shown on the home page
                    There are also extra pages and the route I implemented.

                </p>

                <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mt-8 m-4 gap-5'>
                    <img className='img' src={screen4} alt="" />
                    <img className='img' src={screen5} alt="" />
                    <img className='img' src={screen6} alt="" />
                </div>




                <p>Live-Site: <a className='text-blue-500' href="https://computer-warehouse-a5ede.web.app/">https:computer-warehouse-a5ede.web.app/.app/</a></p>


                <p>code- client-Site: <a className='text-blue-500' href="https://github.com/bariknishan/compuetr-warehouse-11 ">https://github.com/bariknishan/compuetr-warehouse-11</a>
                </p>
                <p>code-server-side: <a className='text-blue-500' href="https://github.com/bariknishan/computer-warehiuse-server-11 ">https://github.com/bariknishan/computer-warehiuse-server-11</a></p>









            </div>
            <div className='text-white mt-4'>












                <h1 className='text-xl'> Gym website Front-End based</h1>
                <p className='text-secondary'>Technology: React Js, Bootstrap, netlify, Firebase authentication, , </p>
                <p> Details:	This is a simple gym website where users can log in and create an account.
                    	User can book gym package. After booking user will see a message on another page.
                    	Authentication of users by firebase system.
                </p>


                <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mt-8  m-4 gap-5'>
                    <img className='img' src={screen7} alt="" />
                    <img className='img' src={screen8} alt="" />
                    <img className='img' src={screen9} alt="" />
                </div>



                <p>Live-Site: <a className='text-blue-500' target="_blank" href=" https://fitness-zone-app.netlify.app/"> https://fitness-zone-app.netlify.app/ </a></p>

                <p>code: <a className='text-blue-500' href=" https://github.com/bariknishan/gym-site-10"> https://github.com/bariknishan/gym-site-10</a></p>
            </div>


        </div>
    );
};

export default Resume;