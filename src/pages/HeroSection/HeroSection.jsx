
import styles from "./HeroSection.module.css";
import { getImageUrl } from "../../utils";

const HeroSection = () => {
  const heroImageUrl = getImageUrl("Homepage.jpg");

  return (
    <div className={styles.heroContainer}>
      <img className={styles.heroImage} src={heroImageUrl} alt="image of the cottage" />
      <h1 className={styles.heroTitle}>Welcome the Stone Cottage by the Sea</h1>
      <p className={styles.heroDescription}>This is the homepage content.</p>
    </div>
  );
};

export default HeroSection;

