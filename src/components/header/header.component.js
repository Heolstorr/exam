import { Link, useLocation } from 'react-router-dom';
import classes from './header.module.css';
import logo from '../../assets/images/coolorsLogo.png';

export const Header = () => {
    const location = useLocation();
    return (
        <header className={classes.header}>
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
        </header>
    );
};