import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section className="hero is-fullheight" id="hero">
            <div className="container" id="herocontainer">
                <h1 className="title title-home is-1">Welcome to CCF Australia</h1>
                <h2 className="subtitle subtitle-home is-3 mt-4 has-text-weight-bold">Join a DGroup and grow together.</h2>
                
                {/* Call-to-action button linking to the DGroup page */}
                <Link to="/dgroups" className="button cta-blue mt-4">
                    Find A DGroup
                </Link>
            </div>
        </section>
    );
};

export default Home;
