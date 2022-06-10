import React from 'react';
import Footer from '../Sharedpages/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Projects from './Projects';
import Service from './Service';
import State from './State';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <State></State>
            <Service></Service>
            <Projects></Projects>
            <Footer></Footer>

        </div>
    );
};

export default Home;