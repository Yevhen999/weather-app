import { IoPartlySunny } from "react-icons/io5";
import { WiHumidity, WiNightCloudyWindy, WiSunset } from "react-icons/wi";
import Image from "next/image";

import styles from "./DetailedIndicators.module.css";

export const DetailedIndicators = ({ current }) => {
  console.log(current.text);
  // console.log(current.condition);
  // console.log(current.condition.icon);
  const icon = current.icon;
  console.log(icon);
  return (
    <section className={styles.section}>
      <ul className={styles.indicatorsList}>
        <li className={styles.indicatorsItem}>
          {/* <Image src="icon" alt={current.text} width={64} height={64} /> */}
          <IoPartlySunny
            size={20}
            color="#FFC100"
            className={styles.indicatorsIcon}
          />
          <p>
            Precipitation: <span>21%</span>
          </p>
        </li>
        <li className={styles.indicatorsItem}>
          <WiHumidity
            size={20}
            color="#FFC100"
            className={styles.indicatorsIcon}
          />
          <p>
            Humidity: <span>59%</span>
          </p>
        </li>
        <li className={styles.indicatorsItem}>
          <WiNightCloudyWindy
            size={20}
            color="#FFC100"
            className={styles.indicatorsIcon}
          />{" "}
          <p>
            Wind: <span>10 km/h</span>
          </p>
        </li>
        <li className={styles.indicatorsItem}>
          <WiSunset
            size={20}
            color="#FFC100"
            className={styles.indicatorsIcon}
          />
          <p>
            Sunset: <span>29%</span>
          </p>
        </li>
      </ul>
    </section>
  );
};
