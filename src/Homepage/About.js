import React from 'react';
import './about.css'
import profile from '../background/bg1.png'
const About = () => {
    return (
        <div className='py-6'>


            <img className='picture  mt-8' src={profile} alt="" />
            <div className='para mt-8 m-2'>
                <p className='text-white '>Hello! Im am Abdul Barek. I am from Dinajpur.But Now I am living in Dhaka. I have completed my graduation
                    in CSE from University Of Development Alternative 2021. My Dream is to become Website Developer one day.
                    I want to see myself In an IT company as a Front-end Developer. And I am trying on it. I am learning and absorbing new technology day by day
                    I am working hard to achive my goal. My hobbies are playing, visiting, workout, Movies etc.</p>
            </div>


        </div>
    );
};

export default About;