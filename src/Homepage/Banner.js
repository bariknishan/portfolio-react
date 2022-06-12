import React from 'react';

import bg from '../Images/profili.png'
import './Banner.css'

const Banner = () => {

  

  return (
    <div className="hero min-h-screen py-6 banner    ">
      <div className="hero-content flex-col lg:flex-row-reverse   banner">
        <div class="avatar">
          <div class="w-24  images  ">
            <img src={bg}  alt="" />
          </div>
        </div>
        <div  className='para-area'>
          <h1 className="text-5xl font-bold text-warning">Wellcome To My Profile!</h1>
          <p className="py-6 text-xl  text-white"> Hi My name is Barik. I am a Frontend Developer.I design and develops beautiful websites with responsive elements. I create custom websites to help business do better. </p>
          <button onClick={(e) => { e.preventDefault(); window.location.href = 'https://drive.google.com/uc?id=1GK3efbGBKWL9c_GtYBoGSoRKLcHybHas&export=download' }}
            className="btn btn-primary font-bold text-white "> Download Resume</button>

        </div>

      </div>
    </div>
  );
};

export default Banner;