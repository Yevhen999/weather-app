import { IoPartlySunny } from "react-icons/io5";
import { WiHumidity, WiNightCloudyWindy, WiSunset } from "react-icons/wi";
import Image from "next/image";

import partlySunny from "../../public/parlty-sunny.svg";

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
    <div className={styles.detailedIndicators}>
      <ul className={styles.indicatorsList}>
        <li className={styles.indicatorsItem}>
          <Image
            src={partlySunny}
            alt="parlty-sunny"
            width={20}
            height={20}
            className={styles.indicatorsIcon}
          />
          {/* <IoPartlySunny
            size={20}
            color="#FFC100"
            className={styles.indicatorsIcon}
          /> */}
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
          {text === "Overcast" ? (
            <Image
              src={partlySunny}
              alt="parlty-sunny"
              width={20}
              height={20}
              className={styles.indicatorsIcon}
            />
          ) : (
            <WiSunset
              size={20}
              color="#FFC100"
              className={styles.indicatorsIcon}
            />
          )}
          <p>{text}</p>
        </li>
      </ul>
    </div>
  );
};
