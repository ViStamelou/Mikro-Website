
import styles from "./HeroSection.module.css";
import { getImageUrl } from "../../utils";

export const HeroSection = () => {

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Stone Cottage by the Sea</h1>
        <p className={styles.description}>
         This is Mikro paradise
        </p>
      </div>
      <img
        src={getImageUrl("hero/Homepage.jpg")}
        alt="Image of cottage"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default HeroSection;

