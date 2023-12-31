import { BasicIndicators } from "../BasicIndicators/BasicIndicators";
import { DetailedIndicators } from "../DetailedIndicators/DetailedIndicators";
import { HourlyForecast } from "../HourlyForecast/HourlyForecast";
import { WeatherDate } from "../WeatherDate/WeatherDate";
import styles from "./Today.module.css";

export const Today = ({ weather, current, currentCondition }) => {
  return (
    <section>
      <WeatherDate weather={weather} />
      <BasicIndicators current={current} />
      <DetailedIndicators
        current={current}
        currentCondition={currentCondition}
      />
      <HourlyForecast
        weather={weather}
        current={current}
        currentCondition={currentCondition}
      />
    </section>
  );
};
