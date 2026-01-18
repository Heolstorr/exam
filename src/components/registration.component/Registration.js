import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './Registration.module.css';

import bgImage from '../../assets/images/bg.png'; 
import eyeOpen from '../../assets/images/eyeOpen.png';
import eyeClosed from '../../assets/images/eyeClosed.png';

export const RegistrationComponent = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleClose = () => {
        if (location.state?.background) {
            navigate(location.state.background.pathname);
        } else {
            navigate('/');
        }
    };
 
    return (
        <div className={styles.container}>
            <div 
                className={styles.closeBtn} 
                onClick={handleClose}
                style={{ cursor: 'pointer' }}>
                ✕
            </div>
            <div className={styles.formSection}>
                <div className={styles.formWrapper}>
                    <h1 className={styles.title}>Sign up</h1>
                    <p className={styles.subtitle}>Create a free account with your email.</p>

                    <form className={styles.form}>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Full Name" className={styles.input} />
                        </div>

                        <div className={styles.inputGroup}>
                            <input type="email" placeholder="Email" className={styles.input} />
                        </div>

                        <div className={styles.inputGroup}>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="Password" 
                                className={styles.input} 
                            />
                            <img 
                                src={showPassword ? eyeClosed : eyeOpen} 
                                alt="Toggle password"
                                className={styles.eyeIcon} 
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            Create your free account
                        </button>
                    </form>

                    <div className={styles.footerLink}>
                        Already have an account? 
                        <Link 
                            to="/login" 
                            replace 
                            state={{ background: location.state?.background }}
                        >
                            Sign in
                        </Link>
                    </div>
                </div>

                <div className={styles.footerLegal}>
                    By continuing, you agree to our <span className={styles.legalLink}>Terms of Service</span>. 
                    Read our <span className={styles.legalLink}>Privacy Policy</span>.
                </div>
            </div>

            <div 
                className={styles.imageSection} 
                style={{ backgroundImage: `url(${bgImage})` }} 
            ></div>
        </div>
    );
};