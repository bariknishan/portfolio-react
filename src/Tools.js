import React from 'react';
import './Tools.css'
import tool1 from '../src/Images/netly.png'
import tool2 from '../src/Images/vode.png'
import tool3 from '../src/Images/chro.png'
import tool4 from '../src/Images/hero.png'
import tool5 from '../src/Images/git.png'
const Tools = () => {
    return (
        <div className='py-6'>
            <h1 className='mt-8 text-center font-bold text-4xl text-warning'> Dev-Tools Preferable</h1>

            <div className="grid p-6 lg:grid-cols-5 mt-8 mb-8 md:grid-cols-3  gap-5">
                <div >
                    
              <img  className='tools-image   '   src={tool1} alt="Shoes" />
                   <p className='text-center  text-white font-bold p-2 '>netlify</p>      
                </div>

                <div >
                    <img  className='tools-image' src={tool2} alt="Shoes" />
                    <p className='text-center  text-white font-bold p-2 '>vs-Code</p>
                </div>
                <div >
                    <img className='tools-image'  src={tool3} alt="Shoes" />
                    <p className='text-center   text-white font-bold p-2 '>Chrome dev-tools</p>
                </div>
                <div >
                <img  className='tools-image' src={tool4} alt="Shoes" />
                <p className='text-center  text-white font-bold p-2 '>Heroku Deployment</p>
                </div>
                <div >
                <img  className='tools-image' src={tool5} alt="Shoes" />
                <p className='text-center  text-white font-bold p-2 '>GitHub</p>
                </div>
            </div>
        </div>
    );
};

export default Tools;
