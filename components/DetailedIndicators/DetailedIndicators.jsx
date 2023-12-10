import { IoPartlySunny } from "react-icons/io5";
import { WiHumidity, WiNightCloudyWindy, WiSunset } from "react-icons/wi";

import styles from "./DetailedIndicators.module.css";

export const DetailedIndicators = () => {
  return (
    <section className={styles.section}>
      DetailedIndicators
      <ul>
        <li>
          <IoPartlySunny color="#FFC100" /> Precipitation: <span>21%</span>
        </li>
        <li>
          <WiHumidity color="#FFC100" />
          Humidity: <span>59%</span>
        </li>
        <li>
          <WiNightCloudyWindy color="#FFC100" /> Wind: <span>10 km/h</span>
        </li>
        <li>
          <WiSunset color="#FFC100" />
          Sunset: <span>29%</span>
        </li>
      </ul>
    </section>
  );
};
