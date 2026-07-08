import React from 'react';
import Hero from '../components/Hero';
import Pedigree from '../components/Pedigree';
import ServiceHierarchy from '../components/ServiceHierarchy';
import Metrics from '../components/Metrics';
import Closing from '../components/Closing';
import { useCanonical } from '../hooks/useCanonical';

const Home = () => {
    useCanonical('https://sycamorecreekconsulting.com/');
    return (
        <div className="home-page">
            <title>Sycamore Creek Consulting | Boutique Talent Advisory</title>
            <meta name="description" content="We find the people who aren't looking. Sycamore Creek is a boutique retained search and talent advisory firm for cleared, defense, and AI-native engineering hiring — rooted in DC and NYC, placing nationwide." />
            <Hero />
            <Pedigree />
            <ServiceHierarchy />
            <Metrics />
            <Closing />
        </div>
    );
};

export default Home;
