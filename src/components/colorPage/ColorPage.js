import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ColorPage.module.css';

import { Header } from '../header/header.component';
import { Footer } from '../footer/Footer';

import pipetteIcon from '../../assets/images/pipette.png';
import expandIcon from '../../assets/images/expand.png';
import heartIcon from '../../assets/images/heart.png';
import fullHeartIcon from '../../assets/images/fullHeart.png';
import downArrowIcon from '../../assets/images/downArrow.png';

const hexToRgb = (hex) => {
    hex = hex.replace('#', '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
};
const rgbToCmyk = (r, g, b) => {
    let c = 1 - (r / 255);
    let m = 1 - (g / 255);
    let y = 1 - (b / 255);
    let k = Math.min(c, Math.min(m, y));
    c = (c - k) / (1 - k) || 0;
    m = (m - k) / (1 - k) || 0;
    y = (y - k) / (1 - k) || 0;
    return { c: Math.round(c * 100), m: Math.round(m * 100), y: Math.round(y * 100), k: Math.round(k * 100) };
};
const rgbToHsl = (r, g, b) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) { h = s = 0; } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
};
const rgbToHsb = (r, g, b) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, v = max;
    const d = max - min;
    s = max === 0 ? 0 : d / max;
    if (max === min) { h = 0; } else {
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), b: Math.round(v * 100) };
};


export const ColorPage = () => {
    const { colorHex } = useParams();
    const fullHex = `#${colorHex}`; 

    const [isSaved, setIsSaved] = useState(false);

    const toggleSave = () => {
        setIsSaved(!isSaved);
    };

    const rgb = hexToRgb(colorHex);
    const safeRgb = rgb || { r: 0, g: 0, b: 0 };
    
    const cmyk = rgbToCmyk(safeRgb.r, safeRgb.g, safeRgb.b);
    const hsl = rgbToHsl(safeRgb.r, safeRgb.g, safeRgb.b);
    const hsb = rgbToHsb(safeRgb.r, safeRgb.g, safeRgb.b);

    const colorOptions = [
        { name: "Sweet Salmon", hex: "F88379", desc: "Sweet, gentle salmon wraps with a soft glow, bringing comfort, approachability, and friendly warmth." },
        { name: "Midnight Violet", hex: "301934", desc: "Intense violet-black depths fill any space with intrigue and boldness, channeling mystery and hidden elegance." },
        { name: "Electric Blue", hex: "0066FF", desc: "A vibrant and energetic blue that sparks creativity and brings a modern, tech-forward vibe to any design." },
        { name: "Sunny Lemon", hex: "FFE135", desc: "Bright and cheerful yellow that evokes happiness, optimism, and the warmth of a sunny summer day." },
        { name: "Mint Fresh", hex: "98FF98", desc: "A cool and refreshing shade of green that suggests nature, renewal, and a calm, peaceful atmosphere." }
    ];

    const colorData = colorOptions.find(c => c.hex.toLowerCase() === colorHex.toLowerCase()) || {
        name: "Custom Color",
        desc: "A beautiful custom color generated just for you."
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header /> 
            <div className={styles.pageWrapper}>
                <div className={styles.container}>
                    <Link to="/" className={styles.backLink}>← Main page
                    </Link>
                    
                    <div>
                        <h1 className={styles.colorName}>{colorData.name}</h1>
                        <p className={styles.description}>{colorData.desc}</p>
                    </div>
                    
                    <div 
                        className={styles.bigColorBlock} 
                        style={{ backgroundColor: fullHex }}
                    >

                        <div className={styles.buttons}>
                            
                            <button className={styles.iconButton}>
                                <img src={pipetteIcon} alt="Pipette" />
                            </button>

                            <button className={styles.iconButton}>
                                <img src={expandIcon} alt="Expand" />
                            </button>

                            <div className={styles.saveButtonGroup}>
                                <button className={styles.saveButtonMain} onClick={toggleSave}>
                                    <img 
                                        src={isSaved ? fullHeartIcon : heartIcon} 
                                        alt="Save" 
                                        className={styles.heartIcon}
                                    />
                                    <span>Save</span>
                                </button>
                               
                                <button className={styles.saveButtonArrow}>
                                    <img src={downArrowIcon} alt="Options" />
                                </button>
                            </div>

                        </div>

                        <span className={styles.hexText}>{colorHex}</span>
                    </div>

                    <h2 className={styles.sectionTitle}>Conversion</h2>
                <div className={styles.conversionTable}>
                    
                    <div className={styles.row_d}>
                        <span className={styles.label}>HEX</span>
                        <span className={styles.value}>{colorHex}</span>
                    </div>

                    <div className={styles.row_d}>
                        <span className={styles.label}>RGB</span>
                        <span className={styles.value}>{rgb.r}, {rgb.g}, {rgb.b}</span>
                    </div>

                    <div className={styles.row}>
                        <span className={styles.label}>CMYK</span>
                        <span className={styles.value}>{cmyk.c}, {cmyk.m}, {cmyk.y}, {cmyk.k}</span>
                    </div>

                    <div className={styles.row}>
                        <span className={styles.label}>HSB</span>
                        <span className={styles.value}>{hsb.h}, {hsb.s}, {hsb.b}</span>
                    </div>

                    <div className={styles.row_d}>
                        <span className={styles.label}>HSL</span>
                        <span className={styles.value}>{hsl.h}, {hsl.s}, {hsl.l}</span>
                    </div>

                    <div className={styles.row_d}>
                        <span className={styles.label}>LAB</span>
                        <span className={styles.value}>13, 17, -13</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>XYZ</span>
                        <span className={styles.value}>2, 2, 3</span>
                    </div>

                    
                    <div className={styles.row}>
                        <span className={styles.label}>LCH</span>
                        <span className={styles.value}>68, 51, 31</span>
                    </div>

                    
                    <div className={styles.row_d}>
                        <span className={styles.label}>LUV</span>
                        <span className={styles.value}>68, 85, 24</span>
                    </div>

                    
                    <div className={styles.row_d}>
                        <span className={styles.label}>HWB</span>
                        <span className={styles.value}>5, 47, 3</span>
                    </div>

                </div>
                    
                </div>
            </div>

            <Footer />
        </>
    );
};