import styles from "./WeatherDate.module.css";

export const WeatherDate = ({ weather }) => {
  return (
    <div className={styles.generalWrapper}>
      <div className={styles.dateWrapper}>
        <h2 className={styles.title}>
          <time dateTime={weather.localtime}>{weather.localtime}</time>
        </h2>
      </div>
    </div>
  );
};
