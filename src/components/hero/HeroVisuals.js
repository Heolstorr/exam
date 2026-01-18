import styles from './Hero.module.css'; 
export const HeroVisuals = () => {
    return (
        <div className={styles.visualsContainer}>
            <div className={styles.visualsBackground}></div>

            <div className={styles.visualsForeground}></div>
        </div>
    );
};