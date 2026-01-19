import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './InfoSection.module.css';
import arrowIcon from '../../assets/images/top-right.png';

export const InfoSection = () => {
    const colorOptions = [
        { name: "Sweet Salmon", hex: "#F88379", desc: "Sweet, gentle salmon wraps with a soft glow, bringing comfort, approachability, and friendly warmth." },
        { name: "Midnight Violet", hex: "#301934", desc: "Intense violet-black depths fill any space with intrigue and boldness, channeling mystery and hidden elegance." },
        { name: "Electric Blue", hex: "#0066FF", desc: "A vibrant and energetic blue that sparks creativity and brings a modern, tech-forward vibe to any design." },
        { name: "Bright Gold", hex: "#FFE135", desc: "Bright and cheerful yellow that evokes happiness, optimism, and the warmth of a sunny summer day." },
        { name: "Mint Fresh", hex: "#98FF98", desc: "A cool and refreshing shade of green that suggests nature, renewal, and a calm, peaceful atmosphere." }
    ];

    const [dailyColor, setDailyColor] = useState(colorOptions[0]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * colorOptions.length);
        setDailyColor(colorOptions[randomIndex]);
    }, []);

    if (!dailyColor) return null;

    const hexUrl = dailyColor.hex.replace('#', '');

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.textContent}>
                    <p className={styles.description}>
                        Coolors is the lightning-fast, ultra-intuitive color palette generator for designers, creators, and anyone seeking visual harmony. Instantly generate beautiful palettes by hitting the spacebar, or explore millions of popular ones. Extract colors from images, check accessibility, and preview them on real designs. Organize your palettes into projects and export them in multiple formats—effortlessly across web, apps, and plugins. Now with AI!
                    </p>
                </div>

                <div className={styles.cardColumn}>
                    <Link to={`/colors/${hexUrl}`} style={{ textDecoration: 'none' }}>
                        <div className={styles.card}>
                            <img src={arrowIcon} alt="" className={styles.arrowIcon} />
                            
                            <p className={styles.cardTitle}>COLOR OF THE DAY</p>
                            
                            <div className={styles.cardBody}>
                                <div className={styles.swatchWrapper}>
                                    <div 
                                        className={styles.colorSwatch} 
                                        style={{ backgroundColor: dailyColor.hex }}
                                    ></div>
                                    <span className={styles.hexCode}>{dailyColor.hex}</span>
                                </div>

                                <div className={styles.colorInfo}>
                                    <h3 className={styles.colorName}>{dailyColor.name}</h3>
                                    <p className={styles.colorDesc}>
                                        {dailyColor.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};