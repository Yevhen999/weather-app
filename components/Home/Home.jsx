import Image from "next/image";
import homePhoto from "../../public/home.png";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={homePhoto} alt="home-photo" />
      <h1 className={styles.title}>Weather</h1>
      <p className={styles.text}>Forecast</p>
    </div>
  );
};
