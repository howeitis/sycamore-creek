import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';
import Seo from '../components/Seo';

const NotFound = () => {
    return (
        <div className="nf-wrapper">
            <Seo path="/__not_found__" />
            <section className="nf-header">
                <div className="nf-container">
                    <p className="nf-code">404</p>
                    <h1 className="nf-headline">Page not found.</h1>
                    <p className="nf-body">
                        The page you're looking for doesn't exist or has moved.
                    </p>
                    <Link to="/" className="nf-button">Back to Home</Link>
                </div>
            </section>


        </div>
    );
};

export default NotFound;
