import React from 'react';
import Hero from '../components/Hero';
import Pedigree from '../components/Pedigree';
import ServiceHierarchy from '../components/ServiceHierarchy';
import Closing from '../components/Closing';

const Home = () => {
    return (
        <div className="home-page">
            <title>Sycamore Creek Consulting | Boutique Talent Advisory</title>
            <meta name="description" content="We find the people who aren't looking. Sycamore Creek is a boutique retained search and talent advisory firm serving DC and NYC." />
            <Hero />
            <Pedigree />
            <ServiceHierarchy />
            <Closing />
        </div>
    );
};

export default Home;
