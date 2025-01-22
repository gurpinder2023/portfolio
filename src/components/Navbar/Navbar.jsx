import React, {useState} from 'react';

import { getImageUrl } from '../../utils';
import Styles from './Navbar.module.css';

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    return <nav className = {Styles.navbar}>
        <a className= {Styles.title} href="/">Gupinder</a>
        <div className= {Styles.menu}>
            <img className ={Styles.menuBtn} src={
                menuOpen 
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            } 
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul 
            className= {`${Styles.menuItems} ${menuOpen && Styles.menuOpen}`}
            onclick = {() => setMenuOpen(false)}
            >  
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
        </div>
    </nav>;   
};
