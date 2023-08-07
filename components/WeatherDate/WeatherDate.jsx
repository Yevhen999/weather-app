import styles from "./WeatherDate.module.css";

export const WeatherDate = () => {
  return (
    <div className={styles.generalWrapper}>
      <div className={styles.dateWrapper}>
        <h2 className={styles.title}>Date</h2>
      </div>
    </div>
  );
};
