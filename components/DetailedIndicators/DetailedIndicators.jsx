import { IoPartlySunny } from "react-icons/io5";
import { WiHumidity, WiNightCloudyWindy, WiSunset } from "react-icons/wi";

import styles from "./DetailedIndicators.module.css";

export const DetailedIndicators = () => {
  return (
    <section className={styles.section}>
      DetailedIndicators
      <ul className={styles.indicatorsList}>
        <li className={styles.indicatorsItem}>
          <IoPartlySunny color="#FFC100" className={styles.indicatorsIcon} />{" "}
          Precipitation: <span>21%</span>
        </li>
        <li className={styles.indicatorsItem}>
          <WiHumidity color="#FFC100" className={styles.indicatorsIcon} />
          Humidity: <span>59%</span>
        </li>
        <li className={styles.indicatorsItem}>
          <WiNightCloudyWindy
            color="#FFC100"
            className={styles.indicatorsIcon}
          />{" "}
          Wind: <span>10 km/h</span>
        </li>
        <li className={styles.indicatorsItem}>
          <WiSunset color="#FFC100" className={styles.indicatorsIcon} />
          Sunset: <span>29%</span>
        </li>
      </ul>
    </section>
  );
};
