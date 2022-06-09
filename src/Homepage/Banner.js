import React from 'react';

import bg from  '../Images/bg.png'
import './Banner.css'

const Banner = () => {

// const download=()=>{
//   'https://drive.google.com/uc?id=1GK3efbGBKWL9c_GtYBoGSoRKLcHybHas&export=download'
// }

    return (
        <div className="hero min-h-screen py-6 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bg} className="max-w-sm rounded-lg images s h-100 w-100 " alt='' />
          <div>
            <h1 className="text-5xl font-bold text-blue-600">Wellcome To My Profile!</h1>
            <p className="py-6 text-xl font-bold text-white"> Hi My name is Barik. I am a Frontend Developer.I design and develops beautiful websites with responsive elements. I create custome websites to help business do better. </p>
            <button onClick={(e)=>{e.preventDefault(); window.location.href='https://drive.google.com/uc?id=1GK3efbGBKWL9c_GtYBoGSoRKLcHybHas&export=download'}}
             className="btn btn-primary font-bold text-white "> Download Resume</button>
          
          </div>
      
        </div>
      </div>
    ); 
};

export default Banner;