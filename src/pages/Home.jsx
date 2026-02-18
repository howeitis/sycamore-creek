import React from 'react';
import Hero from '../components/Hero';
import Pedigree from '../components/Pedigree';
import ServiceHierarchy from '../components/ServiceHierarchy';
import Closing from '../components/Closing';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Pedigree />
            <ServiceHierarchy />
            <Closing />
        </div>
    );
};

export default Home;
