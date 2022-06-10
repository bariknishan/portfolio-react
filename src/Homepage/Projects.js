import React from 'react';
import { Link } from 'react-router-dom';
import pro1 from '../Images/pro1.png'
import pro2 from '../Images/pro2.png'
import pro3 from '../Images/pro3.png'
const Projects = () => {
    return (
        <div>
            <h1 className='text-4xl  text-warning font-bold text-white text-center mt-8 mb-4'> My Recent Projects</h1>
    <div className="grid  lg:grid-cols-3 py-12  sm:grid-cols-1 md:grid-cols-2 gap-5 ml-6 mt-16 mb-16">

    <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={pro1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">Electric Manufactur website</h2>
                    <p >This ia manufacturer website? to see more click on..</p>
                    <div className="card-actions justify-end">
                        <Link to="/projects" className="btn btn-primary">See Details</Link>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={pro2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title   text-white">Computer WareHouse Webiste</h2>
                    <p>This is a warehouse webiste ti know more click on.. </p>
                    <div className="card-actions justify-end">
                        <Link to="/projects" className="btn btn-primary">See Details</Link>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={pro3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">Gym webiste</h2>
                    <p> This is a  Gym website  to know more click on...  </p>
                    <div className="card-actions justify-end">
                        <Link to="/projects" className="btn btn-primary"> See Details</Link>
                    </div>
                </div>
            </div>
   </div>


        </div>
    );
};

export default Projects;