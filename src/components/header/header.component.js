import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './header.module.css';
import logo from '../../assets/images/coolorsLogo.png';
import stackIcon from '../../assets/images/stack.png';

export const Header = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = (e) => {
        e.stopPropagation(); 
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => setIsMenuOpen(false);

    return (
        
        <header className={classes.header}>
            <button className={classes.burgerBtn} onClick={toggleMenu}>
                <img src={stackIcon} alt="Menu" />
            </button>
            <div className={classes.logoSection}>
                <Link to="/" className={classes.logoLink}> 
                    <img src={logo} alt="coolors" className={classes.logoImage} />
                </Link>
            </div>


            <div className={classes.menuSection}>
                <a href="#" className={classes.menuLinkT}>Tools</a>
                <a href="#" className={classes.menuLinkG}>Go Pro</a>
                <div className={classes.divider}></div>
                <Link to="/loginOptions" state={{background: location}} className={classes.signInBtn}>Sign in</Link>
                <Link to="/loginOptions" state={{background: location}} className={classes.signUpBtn}>Sign up</Link>
            </div>


            {isMenuOpen && (
                <div className={classes.dropdown} ref={menuRef}>
                    <Link to="/" className={classes.dropdownLink} onClick={closeMenu}>
                        Main Page
                    </Link>
                    <Link to="/generator" className={classes.dropdownLink} onClick={closeMenu}>
                        Generator Page
                    </Link>
                    <Link to="/colors/0066FF" className={classes.dropdownLink} onClick={closeMenu}>
                        Special Color
                    </Link>
                    
                    <div className={classes.dropdownDivider}></div>
                    
                    <div className={classes.accountLabel}>ACCOUNT</div>
                    
                    <div className={classes.authRow}>
                        <Link 
                            to="/loginOptions" 
                            state={{background: location}} 
                            className={classes.dropSignIn}
                            onClick={closeMenu}
                        >
                            Sign in
                        </Link>
                        <Link 
                            to="/loginOptions" 
                            state={{background: location}} 
                            className={classes.dropSignUp}
                            onClick={closeMenu}
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};