import React, {useState} from 'react';

import { getImageUrl } from '../../utils';
import Styles from './Navbar.module.css';

export const Navbar = () => {
    return <nav className = {Styles.navbar}>
        <a className= {Styles.title} href="/">Portfolio</a>
        <div className= {Styles.menu}>
            <img className ={Styles.menuBtn} src={getImageUrl("nav/menuIcon.png")} alt="menu-button"/>
            <ul className= {Styles.menuItems}>  
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>;   
};
