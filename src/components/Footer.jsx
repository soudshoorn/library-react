import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Library.svg';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className="footer__logo">
                            <img src={Logo} className="footer__logo--img" alt="" />
                        </figure>
                    </Link>
                    <div className="footer__copyright">
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
