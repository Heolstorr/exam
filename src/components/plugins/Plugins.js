import styles from './Plugins.module.css';
import { HoverColorLetters } from '../hoverColorLetters/hoverColorLetters';

export const Plugins = () => {
    return (
        <section className={styles.section}>

            <div className={styles.headText}>
                    plugins and apps
            </div>

            <div className={styles.container}>
                
                <a href="#" className={styles.card}>
                    <span className={styles.text}>iOS App</span>
                </a>

                <a href="#" className={styles.card}>
                    <span className={styles.text}>Figma Plugin</span>
                </a>

                <a href="#" className={`${styles.card} ${styles.fullWidth}`}>
                    <span className={styles.text}>Adobe Extension</span>
                </a>
                 </div>
                 <div className={styles.titleWrapper}>
                        <HoverColorLetters 
                            text="Make something coolorful!" 
                            defaultColor="#d1d1d1"
                            colors={['#e23838ff', '#e47e2bff', '#eed444ff', '#75b621ff', '#2ace45ff', 
                                '#3fd39aff', '#60e1d0ff', '#378cd1ff', '#3f42e6ff', '#6925e7ff',
                                '#8337daff', '#e160c5ff', '#ba33beff']}
                        />
                </div>
        </section>
    );
};