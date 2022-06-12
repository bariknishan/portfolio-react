import React from 'react';
import Footer from '../Sharedpages/Footer';
import Tools from '../Tools';
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
            <Tools></Tools>
            <State></State>
            <Service></Service>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;