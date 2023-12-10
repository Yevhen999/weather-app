import { BasicIndicators } from "../BasicIndicators/BasicIndicators";
import { DetailedIndicators } from "../DetailedIndicators/DetailedIndicators";
import { WeatherDate } from "../WeatherDate/WeatherDate";
import styles from "./Today.module.css";

export const Today = ({ weather, current }) => {
  return (
    <section>
      <WeatherDate weather={weather} />
      <BasicIndicators current={current} />
      <DetailedIndicators />
    </section>
  );
};
