import React, { useState, useEffect, useCallback } from 'react';
import { Header } from '../header/header.component';
import styles from './GeneratorPage.module.css';
import { getRandomPalette } from '../../shared/colorPaletteGenerator';

import crossIcon from '../../assets/images/cross.png';
import circleIcon from '../../assets/images/circle.png';
import stackIcon from '../../assets/images/stack.png';
import heartIcon from '../../assets/images/heart.png';
import fullHeartIcon from '../../assets/images/fullHeart.png';
import dragIcon from '../../assets/images/drag.png';
import copyIcon from '../../assets/images/copy.png';
import infoIcon from '../../assets/images/info.png';
import lockIcon from '../../assets/images/lock.png';

export const GeneratorPage = () => {
    const [colors, setColors] = useState([]);

    const getUniqueHex = (existingColors) => {
        let newHex = getRandomPalette(1)[0];
        let attempts = 0;
        while (existingColors.some(c => c.hex === newHex) && attempts < 10) {
            newHex = getRandomPalette(1)[0];
            attempts++;
        }
        return newHex;
    };

    const handleGenerate = useCallback(() => {
            setColors(prevColors => {
                const newColors = [];
                for (let i = 0; i < prevColors.length; i++) {
                    if (prevColors[i].isSaved) {
                        newColors.push(prevColors[i]);
                    } else {
                        const hex = getUniqueHex(newColors);
                        newColors.push({
                            hex: hex,
                            name: "New Color",
                            isSaved: false 
                        });
                    }
                }
                return newColors;
            });
        }, []);

    const handleKeyDown = useCallback((event) => {
        if (event.target.tagName === 'INPUT') return;

        if (event.code === 'Space') {
            event.preventDefault();
            handleGenerate();
        }
    }, [handleGenerate]);
    
    useEffect(() => {
        const initialColors = [];
        for (let i = 0; i < 5; i++) {
            initialColors.push({
                hex: getUniqueHex(initialColors),
                name: "Lorem Ipsum",
                isSaved: false
            });
        }
        setColors(initialColors);
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);


    const addColor = (index, e) => {
       
        if (e && e.currentTarget) e.currentTarget.blur();

        if (colors.length >= 7) return;

        const newHex = getUniqueHex(colors);
        const newColorObj = { hex: newHex, name: "New Color", isSaved: false };

        const updatedColors = [...colors];
        updatedColors.splice(index + 1, 0, newColorObj);
        setColors(updatedColors);
    };

    const removeColor = (index) => {
        if (colors.length <= 2) return;
        
        const updatedColors = colors.filter((_, i) => i !== index);
        setColors(updatedColors);
    };

    const toggleSave = (index) => {
        const updatedColors = [...colors];
        updatedColors[index].isSaved = !updatedColors[index].isSaved;
        setColors(updatedColors);
    };

    return (
        <div className={styles.page}>
            <Header />
            
            <div className={styles.subHeader}>
                Press the spacebar to generate color palettes!
            </div>

            <div className={styles.generatorContainer}>
                {colors.map((color, index) => (
                    <div 
                        key={index} 
                        className={styles.colorColumn} 
                        style={{ backgroundColor: color.hex }}
                    >
                        <div className={styles.toolbar}>
                            <button className={styles.toolBtn} onClick={() => removeColor(index)}>
                                <img src={crossIcon} alt="Remove" />
                            </button>
                            
                            <button className={styles.toolBtn}>
                                <img src={circleIcon} alt="Shades" />
                            </button>
                            
                            <button className={styles.toolBtn}>
                                <img src={stackIcon} alt="Move" />
                            </button>

                            <button className={styles.toolBtn} onClick={() => toggleSave(index)}>
                                <img 
                                    src={color.isSaved ? fullHeartIcon : heartIcon} 
                                    alt="Save" 
                                    style={color.isSaved ? { filter: 'brightness(0)' } : {}}
                                />
                            </button>

                            <button className={styles.toolBtn}>
                                <img src={dragIcon} alt="Drag" />
                            </button>
                            
                            <button className={styles.toolBtn}>
                                <img src={copyIcon} alt="Copy" />
                            </button>
                            
                            <button className={styles.toolBtn}>
                                <img src={infoIcon} alt="Info" />
                            </button>
                            
                            <button className={styles.toolBtn}>
                                <img src={lockIcon} alt="Lock" />
                            </button>
                        </div>

                        <div className={styles.colorInfo}>
                            <h2 className={styles.hexCode}>{color.hex.toUpperCase()}</h2>
                            <p className={styles.colorName}>{color.name}</p>
                        </div>
                        {index < colors.length - 1 && colors.length < 7 && (
                            <div className={styles.addDivider}>
                                <button 
                                    className={styles.addBtn}
                                    onClick={(e) => addColor(index, e)}
                                    title="Insert color"
                                >
                                    +
                                </button>
                            </div>
                        )}
                        
                    </div>
                ))}
            </div>

            <div className={styles.subFooter}>
                <button className={styles.mobileGenerateBtn} onClick={handleGenerate}>
                Generate
                </button>
            </div>
        </div>
    );
};