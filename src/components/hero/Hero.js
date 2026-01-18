import styles from './Hero.module.css';
import { HeroVisuals } from './HeroVisuals';
import { HoverColorLetters } from '../hoverColorLetters/hoverColorLetters';
import palletes from '../../assets/images/palletes.jpg';
import stickerImage from '../../assets/images/and_much_more.png'; 
import { HeroPalette } from './HeroPalette';

import { Link } from 'react-router-dom';


export const Hero = () => {
    const companies = [
        "https://res.cloudinary.com/coolors/image/upload/v1757421975/media/1622439415c22e4475400432eae4619d1592a8bc-71x22.svg",
        "https://res.cloudinary.com/coolors/image/upload/v1757422329/media/c641bb5bbe69c6b42344fd2333924a206ef43736-92x18.svg",
        "https://res.cloudinary.com/coolors/image/upload/v1757421770/media/cc8b81fd47ded1e82d83258e2f674e0951e20fcc-86x18.svg",
        "https://res.cloudinary.com/coolors/image/upload/v1757421784/media/63efa1d3d16c97552586e2ac6a280a6b2389b88f-100x48.svg",
        "https://res.cloudinary.com/coolors/image/upload/v1757422338/media/5e789db505180ee41e0612d7d53e2ec48c9c5837-153x20.svg",
        "https://res.cloudinary.com/coolors/image/upload/v1757421758/media/a9bfb23cca986ee16b0547274bcd7461ffd373aa-67x18.svg",
        "https://res.cloudinary.com/coolors/image/upload/v1757421980/media/fb78b2f382a2d2d93b155601fbc9032379d2515d-79x20.svg",
        "https://res.cloudinary.com/coolors/image/upload/v1757422149/media/warnerbros.svg",
        "https://res.cloudinary.com/coolors/image/upload/v1757422148/media/ea.svg",
        "https://res.cloudinary.com/coolors/image/upload/v1757422624/media/DreamWorks2016.svg",
        "https://res.cloudinary.com/coolors/image/upload/v1757422145/media/apple.svg",
        "https://res.cloudinary.com/coolors/image/upload/v1757421653/media/Disney_wordmark.svg"
    ];
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                
                <div className={styles.textColumn}>
                    <div className={styles.titleWrapper}>
                        <HoverColorLetters 
                            text="The super fast color palettes generator!" 
                            defaultColor="#000000"
                            colors={['#e23838ff', '#e47e2bff', '#eed444ff', '#75b621ff', '#2ace45ff', 
                                '#3fd39aff', '#60e1d0ff', '#378cd1ff', '#3f42e6ff', '#6925e7ff',
                                '#8337daff', '#e160c5ff', '#ba33beff']}
                        />
                        <img 
                            src={stickerImage} 
                            alt="and much more" 
                            className={styles.sticker} 
                        />
                    </div>                    
                    
                    <p className={styles.subtitle}>
                        Create the perfect palette or get inspired by thousands of beautiful color schemes.
                    </p>

                    <div className={styles.buttonsWrapper}>
                        <Link to="/generator">
                            <button className={styles.primaryBtn}>Start the generator!</button>
                        </Link>
                        <button className={styles.secondaryBtn}>Explore 10M+ palettes</button>
                    </div>
                </div>

                <div className={styles.visualsColumn}>
                    <img 
                        src={palletes} 
                        alt="Color palettes grid" 
                        className={styles.visualsBackground}/>
                        <div className={styles.visualsForeground}>
                            <HeroPalette />
                        </div>
                </div>
            </div>

            <div className={styles.trustedContainer}>
                <p className={styles.trustedTitle}>
                    TRUSTED BY 8+ MILLION CREATIVE MINDS AND TOP COMPANIES
                </p>
                
                <div className={styles.slider}>
                    <div className={styles.slideTrack}>
                        
                        {companies.map((url, index) => (
                            <div className={styles.slide} key={`first-${index}`}>
                                <img src={url} alt="company logo" />
                            </div>
                        ))}

                        {companies.map((url, index) => (
                            <div className={styles.slide} key={`second-${index}`}>
                                <img src={url} alt="company logo" />
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </section>
    );
};