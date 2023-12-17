import { IoPartlySunny } from "react-icons/io5";
import { WiHumidity, WiNightCloudyWindy, WiSunset } from "react-icons/wi";
// import Image from "next/image";

import styles from "./DetailedIndicators.module.css";

export const DetailedIndicators = ({ current, currentCondition }) => {
  const icon = currentCondition.icon;
  7;

  const text = currentCondition.text;

  console.log(currentCondition);

  // const imageLoader = ({ icon }) => {
  //   return `https:${icon}`;
  // };

  console.log(icon);
  return (
    <section className={styles.section}>
      {/* <Image /> */}
      <ul className={styles.indicatorsList}>
        <li className={styles.indicatorsItem}>
          <IoPartlySunny
            size={20}
            color="#FFC100"
            className={styles.indicatorsIcon}
          />
          <p>
            Precipitation: <span>{current.precip_mm} mm</span>
          </p>
        </li>
        <li className={styles.indicatorsItem}>
          <WiHumidity
            size={20}
            color="#FFC100"
            className={styles.indicatorsIcon}
          />
          <p>
            Humidity: <span>{current.humidity}%</span>
          </p>
        </li>
        <li className={styles.indicatorsItem}>
          <WiNightCloudyWindy
            size={20}
            color="#FFC100"
            className={styles.indicatorsIcon}
          />{" "}
          <p>
            Wind: <span>{current.wind_kph} km/h</span>
          </p>
        </li>
        <li className={styles.indicatorsItem}>
          <WiSunset
            size={20}
            color="#FFC100"
            className={styles.indicatorsIcon}
          />
          <p>{text}</p>
        </li>
      </ul>
    </section>
  );
};
