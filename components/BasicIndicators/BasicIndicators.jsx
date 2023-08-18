import Image from "next/image";
import sunny from "../../public/sunny.svg";
import styles from "./BasicIndicators.module.css";

export const BasicIndicators = ({ current }) => {
  console.log(current);
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <Image src={sunny} alt="sunny" priority />
        <p className={styles.leftText}>
          {current.temp_c}&#176; | Feels like{" "}
          <span className={styles.leftTextSpan}>
            {current.feelslike_c}&#176;
          </span>
        </p>
      </div>
      <div className={styles.contentWrapper}>
        <span className={styles.bigSizeDegree}>{current.temp_c}&#176;</span>
        <p className={styles.rightText}>Partly cloudy</p>
        <p className={styles.secondRightText}>
          Wind {current.wind_kph} KM/H WSW
        </p>
      </div>
    </div>
  );
};
