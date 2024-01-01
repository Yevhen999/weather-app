import Image from "next/image";
import styles from "./HourlyForecast.module.css";
import nightly from "../../public/nightly.svg";
import sunny from "../../public/sunny.svg";
import partlyRainy from "../../public/partly-rainy.svg";

export const HourlyForecast = ({ weather, current, currentCondition }) => {
  const { localtime_epoch, localtime } = weather;

  const currentHour = new Date().getHours(localtime_epoch);

  return (
    <div className={styles.hourlyForecast}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={styles.listTime}>
            <time dateTime={currentHour}>{currentHour - 1}:00</time>
          </span>
          <Image
            src={sunny}
            alt="image"
            width={20}
            height={20}
            className={styles.listImage}
          />
          <span className={styles.listTime}>
            <time dateTime={currentHour}>{currentHour}:00</time>
          </span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.listTime}>
            <time dateTime={currentHour}>{currentHour}:00</time>
          </span>
          <Image
            src={nightly}
            alt="image"
            width={20}
            height={20}
            className={styles.listImage}
          />
          <span className={styles.listTime}>
            <time dateTime={currentHour}>{currentHour + 1}:00</time>
          </span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.listTime}>
            <time dateTime={currentHour}>{currentHour + 1}:00</time>
          </span>
          <Image
            src={sunny}
            alt="image"
            width={20}
            height={20}
            className={styles.listImage}
          />
          <span className={styles.listTime}>
            <time dateTime={currentHour}>{currentHour + 2}:00</time>
          </span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.listTime}>
            <time dateTime={currentHour}>{currentHour + 2}:00</time>
          </span>
          <Image
            src={partlyRainy}
            alt="image"
            width={20}
            height={20}
            className={styles.listImage}
          />
          <span className={styles.listTime}>
            <time dateTime={currentHour}>{currentHour + 3}:00</time>
          </span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.listTime}>
            <time dateTime={currentHour}>{currentHour + 3}:00</time>
          </span>
          <Image
            src={nightly}
            alt="image"
            width={20}
            height={20}
            className={styles.listImage}
          />
          <span className={styles.listTime}>
            <time dateTime={currentHour}>{currentHour + 4}:00</time>
          </span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.listTime}>
            <time dateTime={currentHour}>{currentHour + 4}:00</time>
          </span>
          <Image
            src={partlyRainy}
            alt="image"
            width={20}
            height={20}
            className={styles.listImage}
          />
          <span className={styles.listTime}>
            <time dateTime={currentHour}>{currentHour + 5}:00</time>
          </span>
        </li>
      </ul>
    </div>
  );
};
