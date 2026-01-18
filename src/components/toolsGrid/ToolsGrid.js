import styles from './ToolsGrid.module.css';
import arrowIcon from '../../assets/images/right-arrow.png';

export const ToolsGrid = () => {
    const tools = [
        {
            title: "Palette Generator",
            desc: "Create beautiful color schemes in seconds with the worldwide loved palette tool. Just hit the spacebar!",
            link: "START THE GENERATOR",
            bg: "#d0f5ff", 
            accent: "#1f9bb1"  
        },
        {
            title: "Explore Palettes",
            desc: "Get inspired by thousands of beautiful color schemes. Search by colors, styles, topics or hex values.",
            link: "EXPLORE 10M+ PALETTES",
            bg: "#E6EFFE",
            accent: "#0066FF"
        },
        {
            title: "Image Picker",
            desc: "Extract beautiful colors from your photos and turn them into palettes for your projects.",
            link: "LAUNCH THE IMAGE PICKER",
            bg: "#F5E6FF",
            accent: "#8337DA"
        },
        {
            title: "Contrast Checker",
            desc: "Calculate the contrast ratio of text and background colors to make your content more accessible.",
            link: "TRY THE CONTRAST CHECKER",
            bg: "#FFE6F0",
            accent: "#df398c"
        },
        {
            title: "Palette Visualizer",
            desc: "Preview your colors on real designs to see how they look in context before using them in your projects.",
            link: "OPEN THE VISUALIZER",
            bg: "#FFEBE6",     
            accent: "#dc3f3f" 
        },
        {
            title: "Color Picker",
            desc: "Get useful color information like meaning, usage, variations, accessibility and conversion.",
            link: "LAUNCH THE COLOR PICKER",
            bg: "#FFF2D9",
            accent: "#f97316"
        },
        {
            title: "Tailwind Colors",
            desc: "Preview Tailwind CSS colors on real designs to see how they look in context before using them in your projects.",
            link: "GET YOUR TAILWIND COLORS",
            bg: "#FFFDE6",
            accent: "#d09e08"
        },
        {
            title: "Color Bot",
            desc: "Chat with our AI-powered Color Bot, ask questions and get color suggestions for your projects.",
            link: "CHAT WITH COLOR BOT",
            bg: "#E3FCE9",
            accent: "#00A86B"
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.headText}>
                    Our tools, loved by millions
            </div>
            <div className={styles.gridContainer}>
                {tools.map((item, index) => (
                    <div 
                        key={index} 
                        className={styles.card} 
                        style={{ backgroundColor: item.bg, color: item.accent,
                        '--hover-color': item.accent
                        }} 
                        
                    >
                        <div className={styles.content}>
                            <h3 
                                className={styles.title} 
                                style={{ color: item.accent }}
                            >
                                {item.title}
                            </h3>
                            <p className={styles.description}>
                                {item.desc}
                            </p>
                        </div>

                        <div className={styles.footer}>
                            <span 
                                className={styles.linkText}
                                style={{ color: item.accent }}
                            >
                                {item.link}
                            </span>
                            
                    
                            <img 
                                src={arrowIcon} 
                                alt="arrow" 
                                className={styles.arrow}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};