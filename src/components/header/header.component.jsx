import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="logo-container">
                <Logo />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/contact" className="option">CONTACT</Link>
            </div>
        </header>
    );
};

export default Header;