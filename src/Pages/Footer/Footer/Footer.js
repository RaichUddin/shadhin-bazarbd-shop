import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>


            <div className="footer-nav">
                <Link to="/header">
                    <h5 className='nav-back'>Back Nav head</h5>
                </Link>
                <h1>Copyright@Shadhin-Bazar</h1>
            </div>

        </div>
    );
};

export default Footer;