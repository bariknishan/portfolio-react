import React from 'react';
import Footer from '../Sharedpages/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Service from './Service';
import State from './State';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info></Info>
           <State></State>
           <Service></Service>
      
       <Footer></Footer>

        </div>
    );
};

export default Home;