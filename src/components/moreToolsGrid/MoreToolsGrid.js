import styles from './MoreToolsGrid.module.css';

export const MoreToolsGrid = () => {
    const items = [
        {
            title: "Color Names",
            desc: "Browse and search through a comprehensive list of color names to find the perfect shade for your project."
        },
        {
            title: "Free Fonts",
            desc: "Discover and collect beautiful free fonts for your designs from our curated list of typography resources."
        },
        {
            title: "Collage Maker",
            desc: "Create stylish collages by combining your photos and palettes in seconds."
        },
        {
            title: "Browse Gradients",
            desc: "Explore beautiful gradients for your projects or create your own gradient with the Gradient Maker."
        },
        {
            title: "Gradient Palette",
            desc: "Create a gradient palette between two colors and export it in various formats."
        },
        {
            title: "Image Converter",
            desc: "Convert images to different formats with ease."
        }
    ];

    return (
        <section className={styles.section}>

             <div className={styles.headText}>
                    More useful resources
            </div>

            <div className={styles.container}>
                {items.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.description}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};