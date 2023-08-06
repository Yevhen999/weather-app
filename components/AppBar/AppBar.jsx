import Link from "next/link";
import { currentWeather } from "@/api/api";

export const AppBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li onClick={currentWeather}>
            <Link href="/">Today</Link>
          </li>
          <li>
            <Link href="/forecast">Forecast</Link>
          </li>
          <li>Precipitation</li>
          <li>Radar Sun & Moon</li>
        </ul>
      </nav>
    </div>
  );
};
