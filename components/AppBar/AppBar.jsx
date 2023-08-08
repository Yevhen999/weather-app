import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

import { Header } from "../Header/Header";
import styles from "./AppBar.module.css";

export const AppBar = ({ weather }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className={styles.appHeader}>
      <Header weather={weather} />
      <nav className={styles.nav}>
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
