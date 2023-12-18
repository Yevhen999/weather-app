import Image from "next/image";
import styles from "./HourlyForecast.module.css";
import nightly from "../../public/nightly.svg";
import sunny from "../../public/sunny.svg";
import partlyRainy from "../../public/partly-rainy.svg";

export const HourlyForecast = () => {
  return (
    <div className={styles.hourlyForecast}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={styles.listTime}>11</span>
          <Image
            src={sunny}
            alt="image"
            width={20}
            height={20}
            className={styles.listImage}
          />
          <span className={styles.listTime}>11</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.listTime}>12</span>
          <Image
            src={nightly}
            alt="image"
            width={20}
            height={20}
            className={styles.listImage}
          />
          <span className={styles.listTime}>12</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.listTime}>13</span>
          <Image
            src={sunny}
            alt="image"
            width={20}
            height={20}
            className={styles.listImage}
          />
          <span className={styles.listTime}>14</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.listTime}>15</span>
          <Image
            src={partlyRainy}
            alt="image"
            width={20}
            height={20}
            className={styles.listImage}
          />
          <span className={styles.listTime}>15</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.listTime}>16</span>
          <Image
            src={nightly}
            alt="image"
            width={20}
            height={20}
            className={styles.listImage}
          />
          <span className={styles.listTime}>17</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.listTime}>18</span>
          <Image
            src={partlyRainy}
            alt="image"
            width={20}
            height={20}
            className={styles.listImage}
          />
          <span className={styles.listTime}>19</span>
        </li>
      </ul>
    </div>
  );
};
