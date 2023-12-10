import styles from "./DetailedIndicators.module.css";

export const DetailedIndicators = () => {
  return (
    <section className={styles.section}>
      DetailedIndicators
      <ul>
        <li>
          Precipitation: <span>21%</span>
        </li>
        <li>
          Humidity: <span>59%</span>
        </li>
        <li>
          Wind: <span>10 km/h</span>
        </li>
        <li>
          Sunset: <span>29%</span>
        </li>
      </ul>
    </section>
  );
};
