import React from 'react';
import { Link } from 'react-router-dom';



const Resume = () => {
    return (
        <div className='m-8'>
            <h1 className='text-3xl font-bold text-white'> Some projects </h1>
        <div className='text-white mt-4'>
     <h1 className='text-xl'> Electric Manufacturer website Full-Stack.</h1>

         <p>Live-Site: <Link to="https://electric-manufacturer-5c625.web.app/">https://electric-manufacturer-5c625.web.app/</Link></p>
        </div>

        <div className='text-white mt-4'>
     <h1 className='text-xl'>Computer Warehouse Website Full-stack</h1>

         <p>Live-Site: <Link to="https://computer-warehouse-a5ede.web.app/">https://computer-warehouse-a5ede.web.app/.app/</Link></p>
        </div>
        <div className='text-white mt-4'>
     <h1 className='text-xl'> Gym website Front-End based</h1>

         <p>Live-Site: <Link to=" https://fitness-zone-app.netlify.app/"> https://fitness-zone-app.netlify.app/
         </Link></p>
        </div>

         
        </div>
    );
};

export default Resume;