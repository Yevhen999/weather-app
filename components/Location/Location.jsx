import React from "react";
import styles from "./Location.module.css";

export const Location = ({ weather }) => {
  return (
    <div>
      <h1 className={styles.title}>
        {weather.name}, {weather.country}
      </h1>
    </div>
  );
};
