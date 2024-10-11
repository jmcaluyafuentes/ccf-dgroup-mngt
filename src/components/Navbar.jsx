import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    useEffect(() => {
        // Function to toggle menu visibility in mobile and tablet screens
        const toggleMenu = (event) => {
            const target = event.currentTarget.dataset.target; // data-target="navbarMenu"
            const $target = document.getElementById(target); // navbarMenu element
            
            // Toggles navbar-burger between the hamburger and "X" icon, indicating menu open/close state
            event.currentTarget.classList.toggle('is-active');

            // Toggles to show or hide the navbar-menu
            $target.classList.toggle('is-active');
        };

        // Function to close the menu in mobile and tablet screens
        const closeMenu = () => {
            // Hide the menu if the user clicks a navbar-item
            const navbarMenu = document.getElementById('navbarMenu');
            navbarMenu.classList.remove('is-active');

            // Switch the "X" icon to hamburger when the user clicks a navbar-item
            document.querySelector('.navbar-burger').classList.remove('is-active');
        };

        // Add click event listener to navbar burger for toggling menu visibility
        document.querySelector('.navbar-burger').addEventListener('click', toggleMenu);

        // Add click event listeners to each navbar item to close the menu when an item is clicked
        const navbarItems = Array.from(document.querySelectorAll('.navbar-item'));
        navbarItems.forEach(el => el.addEventListener('click', closeMenu));

    }, []);

    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                {/* CCF Logo always appear in all screen sizes */}
                <Link to="/" className="navbar-item navbar-logo-container">
                    <img src="/ccf-logo.png" alt="CCF Logo" className="navbar-logo"/>
                </Link>

                {/* Hamburger icon that is only visible in mobile and tablet screens */}
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            {/* Navbar menu */}
            <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-items">
                        <div className="buttons">
                            <Link to="/" className="navbar-item navbar-option">Home</Link>
                            <Link to="/dgroups" className="navbar-item navbar-option">DGroups</Link>
                            <Link to="#" className="navbar-item navbar-option navbar-contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
