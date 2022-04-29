import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/Library.svg';

const Nav = () => {
    return (
        <nav>
            <div className="nav__container">
                <a href="/">
                    <img src={LibraryLogo} className="logo" alt="" />
                </a>
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="/" className="nav__link">
                            Home
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="/" className="nav__link">
                            Books
                        </a>
                    </li>
                    <button className="btn__menu">
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className="nav__icon">
                        <a href="/cart" className="nav__link">
                            <FontAwesomeIcon icon="shopping-cart" />
                        </a>
                        <span className="cart__length">2</span>
                    </li>
                </ul>
            </div>
            <div className="menu__backdrop">
                <div className="menu__bar">
                    <div className="menu__logo">
                        <img className="menu__logo--img" src={LibraryLogo} alt="" />
                    </div>
                    <div className="menu__btn">
                        <button className="btn__menu btn__menu--close">
                            <FontAwesomeIcon icon="times" />
                        </button>
                    </div>
                </div>
                <ul className="menu__links">
                    <li className="menu__list"><a className="menu__link" href="/">Home</a></li>
                    <li className="menu__list"><a className="menu__link" href="/">Contact</a></li>
                    <li className="menu__list"><a href="./books.html" className="menu__link">Books</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
