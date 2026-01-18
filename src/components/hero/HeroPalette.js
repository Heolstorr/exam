import React, { useState, useEffect } from 'react';

export const HeroPalette = () => {
  const [colors, setColors] = useState([]);

  const colorSchemes = {
    analogous: (baseHue) => {
      // Аналогові кольори 
      return [
        baseHue,
        (baseHue + 30) % 360,
        (baseHue + 60) % 360,
        (baseHue + 90) % 360,
        (baseHue + 120) % 360
      ];
    },
    
    triadic: (baseHue) => {
      // Тріадні кольори 
      return [
        baseHue,
        (baseHue + 120) % 360,
        (baseHue + 240) % 360,
        (baseHue + 60) % 360,
        (baseHue + 180) % 360
      ];
    },
    monochromatic: (baseHue) => {
      return [baseHue, baseHue, baseHue, baseHue, baseHue];
    },

  };

  const generateHarmonizedPalette = () => {
    const baseHue = Math.floor(Math.random() * 360);
    
    const schemes = Object.values(colorSchemes);
    const selectedScheme = schemes[Math.floor(Math.random() * schemes.length)];
    const hues = selectedScheme(baseHue);

    return hues.map((hue, index) => {
      let saturation, lightness;
      
      if (selectedScheme === colorSchemes.monochromatic) {
        saturation = Math.floor(Math.random() * 20) + 60;
        lightness = 35 + (index * 12);
      } else {
        saturation = Math.floor(Math.random() * 25) + 65;
        lightness = Math.floor(Math.random() * 25) + 35;
      }
      
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    });
  };

  useEffect(() => {
    setColors(generateHarmonizedPalette());
    const interval = setInterval(() => {
      setColors(generateHarmonizedPalette());
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  const styles = {
    container: {
      display: 'flex',
      width: '100%',
      height: '100%',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    },
    stripe: {
      flex: 1,
      height: '100%',
      transition: 'all 0.8s ease-in-out'
    }
  };

  return (
    <div style={styles.container}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            ...styles.stripe,
            backgroundColor: color
          }}
        />
      ))}
    </div>
  );
};
