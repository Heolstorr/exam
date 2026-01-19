import styles from './Footer.module.css';
import languageIcon from '../../assets/images/language.png';
import downArrowIcon from '../../assets/images/downArrow.png';
import twitterIcon from '../../assets/images/twitterB.png';
import pinterestIcon from '../../assets/images/pinterest.png';
import instagramIcon from '../../assets/images/instagram.png';
import prodHuntIcon from '../../assets/images/prodHunt.png';

export const Footer = () => {
    const footerSections = [
        {
            title: "TOOLS",
            links: [
                "Generate your palettes", "Explore popular palettes", "Extract palette from image",
                "Contrast checker", "Preview palettes on designs", "Color picker",
                "Tailwind Colors", "Color Bot"
            ]
        },
        {
            title: "DISCOVER",
            links: [
                "List of colors", "Browse gradients", "Create a gradient",
                "Make a gradient palette", "Image converter", "Recolor your own design",
                "Create a collage", "Browse free fonts", "Font Generator"
            ]
        },
        {
            title: "APPS",
            links: [
                "iOS App", "Figma Plugin", "Adobe Extension", "Chrome Extension"
            ]
        },
        {
            title: "COMPANY",
            links: [
                "Pricing", "License", "Terms of service", "Privacy policy",
                "Cookie policy", "Manage cookies", "Help center",
                "Advertise", "Affiliate", "Contact", "Feature Requests"
            ]
        }
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                
                <div className={styles.linksRow}>
                    {footerSections.map((section, index) => (
                        <div key={index} className={styles.column}>
                            <h4 className={styles.heading}>{section.title}</h4>
                            <ul className={styles.list}>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className={styles.listItem}>
                                        <a href="#" className={styles.link}>{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className={styles.bottomBar}>
                    <div className={styles.copyright}>
                        &copy; Coolors by <strong>Fabrizio Bianchi</strong>. Let's make something cool!
                    </div>

                    <div className={styles.rightSection}>
                        <button className={styles.langButton}>
                            <img src={languageIcon} alt="Language" className={styles.iconSm} />
                            <span>English</span>
                            <img src={downArrowIcon} alt="Select" className={styles.iconXs} />
                        </button>

                        <div className={styles.socialIcons}>
                            <a href="#" className={styles.socialLink}>
                                <img src={twitterIcon} alt="Twitter" />
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <img src={pinterestIcon} alt="Pinterest" />
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <img src={instagramIcon} alt="Instagram" />
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <img src={prodHuntIcon} alt="Product Hunt" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};