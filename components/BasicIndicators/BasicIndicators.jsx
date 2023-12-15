import Image from "next/image";
import sunny from "../../public/sunny.svg";
import styles from "./BasicIndicators.module.css";

export const BasicIndicators = ({ current }) => {
  // console.log(current);
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div>
          <Image src={sunny} alt="sunny" priority width={120} height={95} />
        </div>

        <div>
          <p className={styles.bigSizeDegree}>{current.temp_c}&#176;</p>
          <p className={styles.rightText}>Partly cloudy</p>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <p className={styles.leftText}>
          {current.temp_c}&#176; | Feels like{" "}
          <span className={styles.leftTextSpan}>
            {current.feelslike_c}&#176;
          </span>
        </p>

        <p className={styles.secondRightText}>
          Wind <span className={styles.rightTextSpan}>{current.wind_kph}</span>{" "}
          KM/H WSW
        </p>
      </div>
    </div>
  );
};
