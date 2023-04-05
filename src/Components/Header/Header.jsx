import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt="" />
           <div>
                <NavLink to="/">shop</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/inventory">inventory</NavLink>
                <NavLink to="/login">login</NavLink>
            </div>
        </nav>
    );
};

export default Header;