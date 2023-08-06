import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../Header/Header";

export const AppBar = () => {
  const [weather, setWeather] = useState({});

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
        <ul>
          <li>
            <Link href="/">Today</Link>
          </li>
          <li>
            <Link href="/forecast">Forecast</Link>
          </li>
          <li>Precipitation</li>
          <li>Radar Sun & Moon</li>
        </ul>
      </nav>
    </header>
  );
};
