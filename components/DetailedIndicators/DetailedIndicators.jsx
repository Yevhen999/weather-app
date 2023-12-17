import { IoPartlySunny } from "react-icons/io5";
import { WiHumidity, WiNightCloudyWindy, WiSunset } from "react-icons/wi";
import Image from "next/image";

import styles from "./DetailedIndicators.module.css";

export const DetailedIndicators = ({ current }) => {
  console.log(current.text);
  const icon = current.icon;
  const imageLoader = ({ icon }) => {
    return `https:${icon}`;
  };

  // const icon = current.icon;
  console.log(icon);
  return (
    <section className={styles.section}>
      <Image
        loader={imageLoader}
        alt={icon}
        src="https://cdn.weather.api"
        width={75}
        height={75}
      />
      <ul className={styles.indicatorsList}>
        <li className={styles.indicatorsItem}>
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
