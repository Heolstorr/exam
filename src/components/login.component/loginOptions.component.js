import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './loginOptions.module.css';

import bgImage from '../../assets/images/bg.png';
import googleIcon from '../../assets/images/google.png';
import appleIcon from '../../assets/images/apple.png';

export const LoginOptionsComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();

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
            
            <div className={styles.contentSection}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Hello!</h1>
                    <p className={styles.subtitle}>Use your email or another service to continue with Coolors.</p>

                    <div className={styles.buttonsList}>
                        <button className={styles.socialBtn}>
                            <img src={googleIcon} alt="Google" className={styles.icon} />
                            Continue with Google
                        </button>

                        <button className={styles.socialBtn}>
                            <img src={appleIcon} alt="Apple" className={styles.icon} />
                            Continue with Apple
                        </button>
                        
                        <div className={styles.divider}>OR</div>

                        <Link 
                            to="/login" 
                            className={styles.emailLink}

                            state={{ background: location.state?.background }}

                            replace 
                        >
                            <button className={styles.emailBtn}>
                                Continue with email
                            </button>
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