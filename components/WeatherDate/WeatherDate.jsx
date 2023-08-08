import styles from "./WeatherDate.module.css";

export const WeatherDate = ({ weather }) => {
  return (
    <div className={styles.generalWrapper}>
      <div className={styles.dateWrapper}>
        <h2 className={styles.title}>{weather.localtime}</h2>
      </div>
    </div>
  );
};
