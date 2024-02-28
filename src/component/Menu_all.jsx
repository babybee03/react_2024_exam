import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import './Menu_all.css';

const Menu_all = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div onClick={() => {setMenuOpen(!menuOpen)}} className="btn">
                메인메뉴 {menuOpen ? 'Open' : 'Close'}
            </div>

            
            <nav className={menuOpen ? 'act' : ''}>
                <NavLink to="/">
                    <div className="menu_01">Home</div>
                </NavLink>

                <NavLink to="/about">
                    <div className="menu_02">About</div>
                </NavLink>

                <NavLink to="/shop">
                    <div className="menu_03">Shop</div>
                </NavLink>
            </nav>
        </>
    )
}
export default Menu_all;