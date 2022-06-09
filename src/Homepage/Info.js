import React from 'react';
import './Info.css';
import pic1 from '../Images/js.png'
import pic2 from '../Images/html.png'
import pic3 from '../Images/css.png'
import pic4 from '../Images/bootstrap.png'
import pic5 from '../Images/mongo.png'
import pic6 from '../Images/node.png'
import pic7 from '../Images/react.png'
import pic8 from '../Images/word.png'
const Info = () => {
    return (
        <div className=' py-6' >

            <h1 className='text-center text-white font-bold text-4xl mb-8' >Experties Area & Skills</h1>

            <div className=' py-6 grid grid-cols-1  lg:grid-cols-4 md:grid-cols-2 gap-10 mt-16  m-4   '>
                <div  >
                    <img className='image' src={pic1} alt="" />
                </div>
                <div  >
                    <img className='image' src={pic2} alt="" />
                </div>
                <div  >
                    <img className='image' src={pic3} alt="" />
                </div>
                <div  >
                    <img className='image' src={pic4} alt="" />
                </div>
                <div  >
                    <img className='image' src={pic5} alt="" />
                </div>
                <div  >
                    <img className='image' src={pic6} alt="" />
                </div>
                <div  >
                    <img className='image' src={pic7} alt="" />
                </div>
                <div  >
                    <img className='image' src={pic8} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Info;