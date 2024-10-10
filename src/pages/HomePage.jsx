import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section className="hero is-fullheight" id="hero">
            <div className="container" id="herocontainer">
                <h1 className="title is-1">Welcome to CCF Australia</h1>
                <h2 className="subtitle is-3 m-5 has-text-weight-bold">Join a care group to connect and grow spiritually.</h2>
                
                {/* Call-to-action button linking to the DGroup page */}
                <Link to="/dgroups" className="button is-warning is-large mt-5" id="cta-search-recipes">
                    Find a DGroup
                </Link>
            </div>
        </section>
    );
};

export default Home;
