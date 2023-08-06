import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { Header } from "../Header/Header";
import styles from "./AppBar.module.css";

export const AppBar = () => {
  const [weather, setWeather] = useState({});

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const currentWeather = async () => {
      try {
        const response = await axios.get(
          "https://api.weatherapi.com/v1/current.json?key=4a06b0437031495ca6b20810233107&q=M4L1V2"
        );
        const data = await response.data;
        setWeather(data.location);
      } catch (error) {
        console.log(error);
      }
    };
    currentWeather();
  }, []);
  console.log(weather);

  const { name, country } = weather;

  return (
    <header>
      <Header weather={weather} />
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link
              href="/"
              className={
                pathname == "/" ? styles.activeNavLink : styles.navLink
              }
            >
              Today
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/forecast"
              className={
                pathname == "/forecast" ? styles.activeNavLink : styles.navLink
              }
            >
              Forecast
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/precipitation"
              className={
                pathname == "/precipitation"
                  ? styles.activeNavLink
                  : styles.navLink
              }
            >
              Precipitation
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/radar"
              className={
                pathname == "/radar" ? styles.activeNavLink : styles.navLink
              }
            >
              Radar Sun & Moon
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
