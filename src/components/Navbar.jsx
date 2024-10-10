import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

    useEffect(() => {
        // Function to toggle menu visibility
        const toggleMenu = (event) => {
            const target = event.currentTarget.dataset.target;
            const $target = document.getElementById(target);

            event.currentTarget.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        };

        // Function to close the menu
        const closeMenu = () => {
            const navbarBurgers = Array.from(document.querySelectorAll('.navbar-burger'));
            const navbarMenu = document.getElementById('navbarMenu');

            navbarBurgers.forEach(el => el.classList.remove('is-active'));
            if (navbarMenu) {
                navbarMenu.classList.remove('is-active');
            }
        };

        // Add click event listeners to each navbar burger for toggling menu visibility
        const navbarBurgers = Array.from(document.querySelectorAll('.navbar-burger'));
        navbarBurgers.forEach(el => el.addEventListener('click', toggleMenu));

        // Add click event listeners to each navbar item to close the menu when an item is clicked
        const navbarItems = Array.from(document.querySelectorAll('.navbar-item, .navbar-heading'));
        navbarItems.forEach(el => el.addEventListener('click', closeMenu));

    }, []);

    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item navbar-logo-container ml-6">
                    <img src="/public/ccf-logo.png" alt="CCF Logo" className="navbar-logo"/>
                </Link>
                <Link role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Link>
            </div>

            <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-items mr-6">
                        <div className="buttons">
                            <Link to="/" className="navbar-item">Home</Link>
                            <Link to="/dgroups" className="navbar-item">DGroups</Link>
                            <Link to="#" className="navbar-item">Join Us</Link>
                            <Link to="#" className="navbar-item">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
