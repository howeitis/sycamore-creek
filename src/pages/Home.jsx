import React from 'react';
import Hero from '../components/Hero';
import Pedigree from '../components/Pedigree';
import ServiceHierarchy from '../components/ServiceHierarchy';
import Metrics from '../components/Metrics';
import Closing from '../components/Closing';
import Seo from '../components/Seo';

const Home = () => {
    return (
        <div className="home-page">
            <Seo path="/" />
            <Hero />
            <Pedigree />
            <ServiceHierarchy />
            <Metrics />
            <Closing />
        </div>
    );
};

export default Home;
