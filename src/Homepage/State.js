import React from 'react';
import './Stat.css'
const State = () => {
    return (
     <div className='text-center mt-8'>


<div className="stats stats-vertical p-12 gap-8 text-center  lg:stats-horizontal ">
  
  <div className="stat text-warning  font-bold text-2xl  ">
    <div className="stat-value "> Projects</div>
    <div className="stat-value">10+</div>
    <div className="stat-desc">2022 Running</div>
  </div>
  
  <div className="stat text-warning  font-bold text-2xl  ">
    <div className="stat-value">Clients </div>
    <div className="stat-value">10+</div>
    <div className="stat-desc">2020 Running</div>
  </div>
  
  <div className="stat   text-warning  font-bold text-2xl ">
    <div className="stat-value">Reviews</div>
    <div className="stat-value">30+</div>
    <div className="stat-desc">2022 Running</div>
  </div>
  <div className="stat   text-warning  font-bold text-2xl ">
    <div className="stat-value">Technology</div>
    <div className="stat-value">12+</div>
    <div className="stat-desc">2022 Running</div>
  </div>
  
</div>


     </div>

    );
};

export default State;