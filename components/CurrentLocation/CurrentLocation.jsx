import React from "react";
import styles from "./CurrentLocation.module.css";

export const CurrentLocation = ({ weather }) => {
  // console.log(weather.location.name);
  return (
    <div>
      <h1 className={styles.title}>
        {weather.name}, {weather.country}
      </h1>
    </div>
  );
};
